import{o as b,a as q}from"./mathUtils-19b6edfc.js";function p(n,t){return n[0]=t[0],n[1]=t[1],n}function x(n,t,o){return n[0]=t,n[1]=o,n}function g(n,t,o){return n[0]=t[0]+o[0],n[1]=t[1]+o[1],n}function i(n,t,o){return n[0]=t[0]-o[0],n[1]=t[1]-o[1],n}function f(n,t,o){return n[0]=t[0]*o[0],n[1]=t[1]*o[1],n}function M(n,t,o){return n[0]=t[0]/o[0],n[1]=t[1]/o[1],n}function v(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function y(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function _(n,t,o){return n[0]=Math.min(t[0],o[0]),n[1]=Math.min(t[1],o[1]),n}function j(n,t,o){return n[0]=Math.max(t[0],o[0]),n[1]=Math.max(t[1],o[1]),n}function A(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function P(n,t,o){return n[0]=t[0]*o,n[1]=t[1]*o,n}function S(n,t,o,u){return n[0]=t[0]+o[0]*u,n[1]=t[1]+o[1]*u,n}function h(n,t){const o=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(o*o+u*u)}function l(n,t){const o=t[0]-n[0],u=t[1]-n[1];return o*o+u*u}function d(n){const t=n[0],o=n[1];return Math.sqrt(t*t+o*o)}function m(n){const t=n[0],o=n[1];return t*t+o*o}function z(n,t){return n[0]=-t[0],n[1]=-t[1],n}function D(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function I(n,t){const o=t[0],u=t[1];let e=o*o+u*u;return e>0&&(e=1/Math.sqrt(e),n[0]=t[0]*e,n[1]=t[1]*e),n}function L(n,t){return n[0]*t[0]+n[1]*t[1]}function O(n,t,o){const u=t[0]*o[1]-t[1]*o[0];return n[0]=n[1]=0,n[2]=u,n}function E(n,t,o,u){const e=t[0],r=t[1];return n[0]=e+u*(o[0]-e),n[1]=r+u*(o[1]-r),n}function T(n,t){t=t||1;const o=2*b()*Math.PI;return n[0]=Math.cos(o)*t,n[1]=Math.sin(o)*t,n}function $(n,t,o){const u=t[0],e=t[1];return n[0]=o[0]*u+o[2]*e,n[1]=o[1]*u+o[3]*e,n}function k(n,t,o){const u=t[0],e=t[1];return n[0]=o[0]*u+o[2]*e+o[4],n[1]=o[1]*u+o[3]*e+o[5],n}function w(n,t,o){const u=t[0],e=t[1];return n[0]=o[0]*u+o[3]*e+o[6],n[1]=o[1]*u+o[4]*e+o[7],n}function B(n,t,o){const u=t[0],e=t[1];return n[0]=o[0]*u+o[4]*e+o[12],n[1]=o[1]*u+o[5]*e+o[13],n}function C(n,t,o,u){const e=t[0]-o[0],r=t[1]-o[1],a=Math.sin(u),c=Math.cos(u);return n[0]=e*c-r*a+o[0],n[1]=e*a+r*c+o[1],n}function F(n,t){const o=n[0],u=n[1],e=t[0],r=t[1];let a=o*o+u*u;a>0&&(a=1/Math.sqrt(a));let c=e*e+r*r;c>0&&(c=1/Math.sqrt(c));const s=(o*e+u*r)*a*c;return s>1?0:s<-1?Math.PI:Math.acos(s)}function G(n){return"vec2("+n[0]+", "+n[1]+")"}function H(n,t){return n[0]===t[0]&&n[1]===t[1]}function J(n,t){const o=n[0],u=n[1],e=t[0],r=t[1],a=q();return Math.abs(o-e)<=a*Math.max(1,Math.abs(o),Math.abs(e))&&Math.abs(u-r)<=a*Math.max(1,Math.abs(u),Math.abs(r))}function K(n,t,o,u,e){let r=t[0]-o[0],a=t[1]-o[1];const c=(u[0]*r+u[1]*a)*(e-1);return r=u[0]*c,a=u[1]*c,n[0]=t[0]+r,n[1]=t[1]+a,n}const N=d,Q=i,R=f,U=M,V=h,W=l,X=m;Object.freeze(Object.defineProperty({__proto__:null,add:g,angle:F,ceil:v,copy:p,cross:O,dist:V,distance:h,div:U,divide:M,dot:L,equals:J,exactEquals:H,floor:y,inverse:D,len:N,length:d,lerp:E,max:j,min:_,mul:R,multiply:f,negate:z,normalize:I,projectAndScale:K,random:T,rotate:C,round:A,scale:P,scaleAndAdd:S,set:x,sqrDist:W,sqrLen:X,squaredDistance:l,squaredLength:m,str:G,sub:Q,subtract:i,transformMat2:$,transformMat2d:k,transformMat3:w,transformMat4:B},Symbol.toStringTag,{value:"Module"}));export{Q as B,C as I,k as S,E as _,l as b,i as e,L as j,P as l,h as m,x as o,d as q,p as r,g as u,I as v,z as x,O as y};