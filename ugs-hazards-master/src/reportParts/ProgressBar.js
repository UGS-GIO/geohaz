import React from 'react';
import classNames from 'classnames';
import './ProgressBar.scss';


export default props => {
  console.log('Progress.render');

  const values = Object.values(props.tasks);
  const max = values.length;

  let completed = 0;
  let percent = 0;
  if (max > 0) {
    completed = values.filter(x => x).length;
    percent = ((completed / max) * 100);
  }

  const classes = classNames(
    "progress-bar",
    "progress-bar--striped",
    { "progress-bar--animated": max > completed }
  );

  const parentClasses = classNames(
    props.className
  )

  return (<div className={parentClasses}>
    {completed < max ?
      <div className="progress">
        <div className={classes}
          style={{ width: `${percent}%` }}
          role="progressbar"
          area-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax={max}
        ></div>
      </div> :
      props.children
    }
  </div>
  );
};
