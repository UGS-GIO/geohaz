import{a as w}from"./typedArrayUtil-2af43698.js";import{n as M}from"./Axis-30be7e73.js";import"./SpatialReference-428523ee.js";import"./mathUtils-19b6edfc.js";import{M as b}from"./Extent-2b4578b8.js";function Y(i,n){const a=n[0]-i[0],u=n[1]-i[1];if(i.length>2&&n.length>2){const e=i[2]-n[2];return Math.sqrt(a*a+u*u+e*e)}return Math.sqrt(a*a+u*u)}function k(i,n,a){const u=i[0]+a*(n[0]-i[0]),e=i[1]+a*(n[1]-i[1]);return i.length>2&&n.length>2?[u,e,i[2]+a*(n[2]-i[2])]:[u,e]}function z(i,n,a,u){return q(i,n,a[u],a[u+1])}function q(i,n,a,u){const[e,c]=n,[o,r]=a,[s,t]=u,f=s-o,m=t-r,y=f*f+m*m,$=(e-o)*f+(c-r)*m,x=Math.min(1,Math.max(0,$/y));return i[0]=o+f*x,i[1]=r+m*x,i}function A(i,n,a,u,e,c){let o=a,r=u,s=e-o,t=c-r;if(s!==0||t!==0){const f=((i-o)*s+(n-r)*t)/(s*s+t*t);f>1?(o=e,r=c):f>0&&(o+=s*f,r+=t*f)}return s=i-o,t=n-r,s*s+t*t}function B(i,n){return k(i,n,.5)}function R(i,n=M.X,a=M.Y){let u=0;const e=i.length;let c=i[0];for(let o=0;o<e-1;o++){const r=i[o+1];u+=(r[n]-c[n])*(r[a]+c[a]),c=r}return u>=0}function d(i){const n=i.length;return n>2&&w(i[0],i[n-1])}function C(i){if("rings"in i&&(j(i),i.rings.length>0&&!R(i.rings[0])))for(const n of i.rings)n.reverse()}function j(i){if("rings"in i)for(const n of i.rings)d(n)||n.push(n[0].slice())}function l(i=E){return[i[0],i[1],i[2],i[3]]}function p(i,n){return i!==n&&(i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3]),i}function F(i,n,a,u,e=l()){return e[0]=i,e[1]=n,e[2]=a,e[3]=u,e}function H(i,n=l()){return n[0]=i.xmin,n[1]=i.ymin,n[2]=i.xmax,n[3]=i.ymax,n}function J(i,n){return new b({xmin:i[0],ymin:i[1],xmax:i[2],ymax:i[3],spatialReference:n})}function N(i,n){n[0]<i[0]&&(i[0]=n[0]),n[0]>i[2]&&(i[2]=n[0]),n[1]<i[1]&&(i[1]=n[1]),n[1]>i[3]&&(i[3]=n[1])}function O(i,n,a){if(n!=null)if("length"in n)h(n)?(a[0]=Math.min(i[0],n[0]),a[1]=Math.min(i[1],n[1]),a[2]=Math.max(i[2],n[2]),a[3]=Math.max(i[3],n[3])):n.length!==2&&n.length!==3||(a[0]=Math.min(i[0],n[0]),a[1]=Math.min(i[1],n[1]),a[2]=Math.max(i[2],n[0]),a[3]=Math.max(i[3],n[1]));else switch(n.type){case"extent":a[0]=Math.min(i[0],n.xmin),a[1]=Math.min(i[1],n.ymin),a[2]=Math.max(i[2],n.xmax),a[3]=Math.max(i[3],n.ymax);break;case"point":a[0]=Math.min(i[0],n.x),a[1]=Math.min(i[1],n.y),a[2]=Math.max(i[2],n.x),a[3]=Math.max(i[3],n.y)}else p(a,i)}function v(i){return i==null||i[0]>=i[2]?0:i[2]-i[0]}function D(i){return i==null||i[1]>=i[3]?0:i[3]-i[1]}function P(i){return v(i)*D(i)}function Q(i,n,a){return n>=i[0]&&a>=i[1]&&n<=i[2]&&a<=i[3]}function S(i,n){return Math.max(n[0],i[0])<=Math.min(n[2],i[2])&&Math.max(n[1],i[1])<=Math.min(n[3],i[3])}function T(i,n){return n[0]>=i[0]&&n[2]<=i[2]&&n[1]>=i[1]&&n[3]<=i[3]}function U(i){return i?p(i,g):l(g)}function h(i){return i!=null&&i.length===4}function V(i,n){return h(i)&&h(n)?i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]:i===n}const g=[1/0,1/0,-1/0,-1/0],E=[0,0,0,0];export{U as D,S as E,V as I,g as K,v as M,T as R,D as a,R as b,B as c,F as d,N as e,q as f,A as g,j as h,Y as i,J as j,O as k,P as l,C as m,H as o,z as s,l as u,Q as w};
