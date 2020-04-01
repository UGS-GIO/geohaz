module.exports = function configure(grunt) {
  require('load-grunt-tasks')(grunt);

  var deployFiles = ['**'];
  var deployDir = 'ugs-hazards-clientside';
  var secrets;
  try {
    secrets = grunt.file.readJSON('secrets.json');
  } catch (e) {
    // swallow for build server

    // still print a message so you can catch bad syntax in the secrets file.
    grunt.log.write(e);

    secrets = {
      stage: {
        host: '',
        username: '',
        password: ''
      },
      prod: {
        host: '',
        username: '',
        password: ''
      }
    };
  }

  const packageConfig = grunt.file.readJSON('package.json');
  const zipFileName = `deploy_${packageConfig.version}.zip`;

  grunt.initConfig({
    clean: {
      main: ['deploy']
    },
    compress: {
      main: {
        options: {
          archive: `deploy/${zipFileName}`
        },
        files: [{
          src: deployFiles,
          dest: './',
          cwd: 'build/',
          expand: true
        }]
      }
    },
    secrets: secrets,
    sftp: {
      stage: {
        files: {
          './': `deploy/${zipFileName}`
        },
        options: {
          host: '<%= secrets.stage.host %>',
          username: '<%= secrets.stage.username %>',
          password: '<%= secrets.stage.password %>'
        }
      },
      options: {
        path: './wwwroot/' + deployDir + '/',
        srcBasePath: 'deploy/',
        showProgress: true
      }
    },
    sshexec: {
      stage: {
        command: ['cd wwwroot/' + deployDir, `unzip -oq ${zipFileName}`, `rm ${zipFileName}`].join(';'),
        options: {
          host: '<%= secrets.stage.host %>',
          username: '<%= secrets.stage.username %>',
          password: '<%= secrets.stage.password %>'
        }
      }
    }
  });

  grunt.registerTask('deploy-prod', [
    'clean:main',
    'compress:main'
  ]);
  grunt.registerTask('deploy-stage', [
    'clean:main',
    'compress:main',
    'sftp:stage',
    'sshexec:stage'
  ]);
};
