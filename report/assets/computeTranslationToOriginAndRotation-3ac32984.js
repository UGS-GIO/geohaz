import{f as A,T as S,k as T,p as k,u as N,K as L,M as _,G as F}from"./SpatialReference-428523ee.js";import{h as G,n as m}from"./mathUtils-19b6edfc.js";import{s as I,q as R,o as W}from"./mat4-a6ac6b0f.js";import{F as P,E as $,e as h,o as r,a as c}from"./projectBuffer-af7b4ad9.js";const H=new A(S),l=new A(T),C=new A(k);new A(N);function D(s){const f=w.get(s);if(f)return f;let n=H;if(s)if(s===l)n=l;else if(s===C)n=C;else{const i=s.wkid,o=s.latestWkid;if(i!=null||o!=null)L(i)||L(o)?n=l:(_(i)||_(o))&&(n=C);else{const e=s.wkt2??s.wkt;if(e){const u=e.toUpperCase();u===U?n=l:u===d&&(n=C)}}}return w.set(s,n),n}const w=new Map,U=l.wkt.toUpperCase(),d=C.wkt.toUpperCase();function O(s,f,n){const i=Math.sin(s),o=Math.cos(s),e=Math.sin(f),u=Math.cos(f),t=n;return t[0]=-i,t[4]=-e*o,t[8]=u*o,t[12]=0,t[1]=o,t[5]=-e*i,t[9]=u*i,t[13]=0,t[2]=0,t[6]=u,t[10]=e,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,t}function B(s,f,n){return O(s,f,n),I(n,n),n}function b(s,f,n,i){if(s==null||i==null)return!1;const o=P(s,$),e=P(i,h);if(o===e&&!M(e)&&(o!==r.UNKNOWN||F(s,i)))return R(n,f),!0;if(M(e)){const u=c[o][r.LON_LAT],t=c[r.LON_LAT][e];return u!=null&&t!=null&&(u(f,0,E,0),t(E,0,a,0),O(p*E[0],p*E[1],n),n[12]=a[0],n[13]=a[1],n[14]=a[2],!0)}if((e===r.WEB_MERCATOR||e===r.PLATE_CARREE||e===r.WGS84)&&(o===r.WGS84||o===r.CGCS2000&&e===r.PLATE_CARREE||o===r.SPHERICAL_ECEF||o===r.WEB_MERCATOR)){const u=c[o][r.LON_LAT],t=c[r.LON_LAT][e];return u!=null&&t!=null&&(u(f,0,E,0),t(E,0,a,0),o===r.SPHERICAL_ECEF?B(p*E[0],p*E[1],n):W(n),n[12]=a[0],n[13]=a[1],n[14]=a[2],!0)}return!1}function M(s){return s===r.SPHERICAL_ECEF||s===r.SPHERICAL_MARS_PCPF||s===r.SPHERICAL_MOON_PCPF}const p=G(1),E=m(),a=m();export{b as R,D as a};
