import{p as It,f as Lt}from"./mat3-def297a7.js";import{t as kt,e as Ut}from"./mat3f64-e19cdcb8.js";import{e as ta}from"./mat4f64-9a8384aa.js";import{X as aa,O as U,x as sa}from"./quat-064ab1d0.js";import{o as Gt,e as xt}from"./quatf64-81e039e4.js";import{g as et,j as lt,n as d,r as Pt,w as ia,b as O,E as q,B as mt,X as At,Z as ea,S as na,K as Wt,C as oa,D as ra,s as Ct,H as bt,I as ha,L as ca,y as Ft}from"./mathUtils-19b6edfc.js";import{z as ua}from"./vec42-a95eff2d.js";import{n as da}from"./vec4f64-430e4feb.js";import{i as Qt,Q as fa}from"./SpatialReference-428523ee.js";import{a as _t,R as la}from"./computeTranslationToOriginAndRotation-3ac32984.js";import{n as St,W as Bt}from"./projectBuffer-af7b4ad9.js";import{c as Et,o as ma,F as pt}from"./plane-f835f029.js";import{l as _a}from"./ViewingMode-fb6259a5.js";import{n as ba}from"./vec2f64-b65bfd66.js";class Nt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class ts extends Nt{constructor(t,a,s,n=!1,o=s){super(t,s,o),this.indices=a,this.exclusive=n}}const nt=1e-6,ot=d(),gt=d();function ga(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const o=new wa(i);yt(ot,o.minProj,o.maxProj),dt(ot,ot,.5),N(gt,o.maxProj,o.minProj);const r=wt(gt),c=new ya;c.quality=r,n<14&&(i=new Nt(new Float64Array(o.buffer,112,42),3));const e=d(),h=d(),g=d(),m=d(),z=d(),A=d(),M=d();switch(Ma(o,i,M,e,h,g,m,z,A,c)){case 1:return void Yt(ot,gt,t);case 2:return void pa(i,m,t)}$a(i,M,e,h,g,m,z,A,c),Zt(i,c.b0,c.b1,c.b2,at,st);const v=d();N(v,st,at),c.quality=wt(v),c.quality<r?Dt(c.b0,c.b1,c.b2,at,st,v,t):Yt(ot,gt,t)}function Ma(i,t,a,s,n,o,r,c,e,h){return Pa(i,s,n),qt(s,n)<nt?1:(N(r,s,n),b(r,r),ja(t,s,r,o)<nt?2:(N(c,n,o),b(c,c),N(e,o,s),b(e,e),V(a,c,r),b(a,a),D(t,a,r,c,e,h),0))}const rt=d(),ht=d(),p=d(),I=d(),w=d(),X=d(),G=d(),W=d();function $a(i,t,a,s,n,o,r,c,e){xa(i,t,a,rt,ht),rt[0]!==void 0&&(N(p,rt,a),b(p,p),N(I,rt,s),b(I,I),N(w,rt,n),b(w,w),V(X,I,o),b(X,X),V(G,w,r),b(G,G),V(W,p,c),b(W,W),D(i,X,o,I,p,e),D(i,G,r,w,I,e),D(i,W,c,p,w,e)),ht[0]!==void 0&&(N(p,ht,a),b(p,p),N(I,ht,s),b(I,I),N(w,ht,n),b(w,w),V(X,I,o),b(X,X),V(G,w,r),b(G,G),V(W,p,c),b(W,W),D(i,X,o,I,p,e),D(i,G,r,w,I,e),D(i,W,c,p,w,e))}function Pa(i,t,a){let s=qt(i.maxVert[0],i.minVert[0]),n=0;for(let o=1;o<7;++o){const r=qt(i.maxVert[o],i.minVert[o]);r>s&&(s=r,n=o)}S(t,i.minVert[n]),S(a,i.maxVert[n])}const y=[0,0,0];function ja(i,t,a,s){const{data:n,size:o}=i;let r=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=o){y[0]=n[e]-t[0],y[1]=n[e+1]-t[1],y[2]=n[e+2]-t[2];const h=a[0]*y[0]+a[1]*y[1]+a[2]*y[2],g=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=y[0]*y[0]+y[1]*y[1]+y[2]*y[2]-h*h/g;m>r&&(r=m,c=e)}return S(s,n,c),r}const _=ba();function xa(i,t,a,s,n){za(i,t,_,n,s);const o=Kt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Tt=d(),vt=d(),Ht=d(),K=d(),J=d(),Mt=d();function D(i,t,a,s,n,o){if(Ot(t)<nt)return;V(Tt,a,t),V(vt,s,t),V(Ht,n,t),tt(i,t,_),J[1]=_[0],K[1]=_[1],Mt[1]=K[1]-J[1];const r=[a,s,n],c=[Tt,vt,Ht];for(let e=0;e<3;++e){tt(i,r[e],_),J[0]=_[0],K[0]=_[1],tt(i,c[e],_),J[2]=_[0],K[2]=_[1],Mt[0]=K[0]-J[0],Mt[2]=K[2]-J[2];const h=wt(Mt);h<o.quality&&(S(o.b0,r[e]),S(o.b1,t),S(o.b2,c[e]),o.quality=h)}}const Sa=d();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function za(i,t,a,s,n){const{data:o,size:r}=i;S(s,o),S(n,s),a[0]=Kt(Sa,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){const e=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];e<a[0]&&(a[0]=e,S(s,o,c)),e>a[1]&&(a[1]=e,S(n,o,c))}}function Yt(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Gt}const H=d(),L=d(),ct=d(),at=d(),st=d(),Rt=d();function pa(i,t,a){S(H,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?H[0]=0:Math.abs(t[1])>Math.abs(t[2])?H[1]=0:H[2]=0,Ot(H)<nt&&(H[0]=H[1]=H[2]=1),V(L,t,H),b(L,L),V(ct,t,L),b(ct,ct),Zt(i,t,L,ct,at,st),N(Rt,st,at),Dt(t,L,ct,at,st,Rt,a)}function Zt(i,t,a,s,n,o){tt(i,t,_),n[0]=_[0],o[0]=_[1],tt(i,a,_),n[1]=_[0],o[1]=_[1],tt(i,s,_),n[2]=_[0],o[2]=_[1]}const B=d(),ut=d(),$t=d(),E=kt(1,0,0,0,1,0,0,0,1),Ia=xt();function Dt(i,t,a,s,n,o,r){E[0]=i[0],E[1]=i[1],E[2]=i[2],E[3]=t[0],E[4]=t[1],E[5]=t[2],E[6]=a[0],E[7]=a[1],E[8]=a[2],r.quaternion=qa(Ia,E),yt(B,s,n),dt(B,B,.5),dt(ut,i,B[0]),dt($t,t,B[1]),yt(ut,ut,$t),dt($t,a,B[2]),r.center=lt(ut,ut,$t),r.halfSize=et(B,o,.5)}const P=7;let wa=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let e=0;e<P;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(P),o=new Array(P),{data:r,size:c}=t;for(let e=0;e<r.length;e+=c){let h=r[e];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=e),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=e),h=r[e+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=e),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=e),h=r[e+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=e),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=e),h=r[e]+r[e+1]+r[e+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=e),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=e),h=r[e]+r[e+1]-r[e+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=e),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=e),h=r[e]-r[e+1]+r[e+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=e),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=e),h=r[e]-r[e+1]-r[e+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=e),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=e)}for(let e=0;e<P;++e){let h=n[e];S(this.minVert[e],r,h),h=o[e],S(this.maxVert[e],r,h)}}},ya=class{constructor(){this.b0=Pt(1,0,0),this.b1=Pt(0,1,0),this.b2=Pt(0,0,1),this.quality=0}};function wt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function yt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function N(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function dt(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function S(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],e=a[2];i[0]=n*e-o*c,i[1]=o*r-s*e,i[2]=s*c-n*r}function b(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Ot(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function qt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function Kt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function qa(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);i[s]=.5*r,r=.5/r,i[3]=(t[3*n+o]-t[3*o+n])*r,i[n]=(t[3*n+s]+t[3*s+n])*r,i[o]=(t[3*o+s]+t[3*s+o])*r}return i}class ft{constructor(t=ia,a=Ha,s=Gt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return O(Et.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return O(Et.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return aa(ma.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],q(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(R);return U(l,a),q(u,u,l),mt(u,u),Y[0]=Math.min(u[0],this._data[3]),Y[1]=Math.min(u[1],this._data[4]),Y[2]=Math.min(u[2],this._data[5]),At(Y,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(ea(u)>o*o)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],q(u,u,l),mt(u,u),Y[0]=Math.min(u[0],s[3]),Y[1]=Math.min(u[1],s[4]),Y[2]=Math.min(u[2],s[5]),At(Y,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(pt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=l;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const r=q(u,u,l),c=q(Y,a,l);let e=-1/0,h=1/0;const g=this.getHalfSize(it);for(let m=0;m<3;m++){const z=r[m],A=c[m],M=g[m]+s;if(Math.abs(A)>1e-6){const v=(M-z)/A,$=(-M-z)/A;e=Math.max(e,Math.min(v,$)),h=Math.min(h,Math.max(v,$))}else if(z>M||z<-M)return!1}return e<=h}projectedArea(t,a,s,n){const o=this.getQuaternion(R);U(l,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],q(u,u,l);const r=this.getHalfSize(it),c=u[0]<-r[0]?-1:u[0]>r[0]?1:0,e=u[1]<-r[1]?-1:u[1]>r[1]?1:0,h=u[2]<-r[2]?-1:u[2]>r[2]?1:0,g=Math.abs(c)+Math.abs(e)+Math.abs(h);if(g===0)return 1/0;const m=g===1?4:6,z=6*(c+3*e+9*h+13);It(k,o),Lt(k,k,r);const A=this.getCenter(Q);for(let $=0;$<m;$++){const zt=Aa[z+$];O(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),na(u,u,k),lt(Z,A,u),Z[3]=1,ua(Z,Z,a);const Vt=1/Math.max(1e-6,Z[3]);C[2*$]=Z[0]*Vt,C[2*$+1]=Z[1]*Vt}const M=2*m-2;let v=C[0]*(C[3]-C[M+1])+C[M]*(C[1]-C[M-1]);for(let $=2;$<M;$+=2)v+=C[$]*(C[$+3]-C[$-1]);return Math.abs(v)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(R);return U(l,a),q(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(pt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(pt(t))}toAaBoundingBox(t){const a=this.getQuaternion(R),s=It(k,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=_t(s),r=_t(a),c=Bt(a,r)){if(s===o)a.isGeographic?Ea(this,t,a,n,r):Qa(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Qt(s)))Ca(a,this,s,t,n);else if(a.isWebMercator&&Qt(s))Fa(a,this,s,t,n);else{const e=this.getCenter(Q);e[2]+=n,St(e,a,0,e,s,0,1),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(R),t.halfSize=this.getHalfSize(it))}}}const l=xt(),R=xt(),Na=xt(),u=d(),Y=d(),Z=da();function Va(i,t=new ft){return ga(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function is(i,t,a,s,n){const o=i.getQuaternion(R);n.quaternion=o,U(l,o);const r=i.getCenter(Q),c=i.getHalfSize(it);if(s===_a.Global){q(f,r,l),mt(F,f),ra(x,F,c),Wt(x,F,x);const e=Ct(x);lt(x,F,c);const h=Ct(x);if(e<a)n.center=r,O(f,a,a,a),n.halfSize=lt(f,c,f);else{const g=h>0?1+t/h:1,m=e>0?1+a/e:1,z=(m+g)/2,A=(m-g)/2;et(x,F,A),n.halfSize=bt(x,x,c,z),et(x,F,z),bt(x,x,c,A),ha(f,f),ca(f,x,f);const M=i.getQuaternion(Na);n.center=q(f,f,M)}}else{n.center=bt(f,r,Ft,(a+t)/2);const e=q(f,Ft,l);mt(e,e),n.halfSize=bt(F,c,e,(a-t)/2)}return n}function Ca(i,t,a,s,n){t.getCenter(Q),Q[2]+=n;const o=_t(a);St(Q,i,0,Q,o,0,1),Jt(o,t,Q,a,s)}function Fa(i,t,a,s,n){t.getCenter(Q),Q[2]+=n,Jt(i,t,Q,a,s)}function Jt(i,t,a,s,n){const o=t.getQuaternion(R),r=It(k,o),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let h=0;h<3;++h)T[h]=c[h]*(e&1<<h?-1:1);for(let h=0;h<3;++h){let g=a[h];for(let m=0;m<3;++m)g+=T[m]*r[3*m+h];jt[3*e+h]=g}}St(jt,i,0,jt,s,0,8),Va(Ta,n)}function Qa(i,t,a,s,n=_t(a),o=Bt(a,n)){i.getCorners(Xt),i.getCenter(T),T[2]+=s,la(a,T,j,n),t.setCenter(j[12],j[13],j[14]);const r=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/r,l[1]=(j[8]-j[2])/r,l[2]=(j[1]-j[4])/r,l[3]=.25*r;const c=i.getQuaternion(R);t.quaternion=sa(l,l,c),U(l,l),O(F,0,0,0);const e=t.getCenter(va);for(const h of Xt)h[2]+=s,o(h,0,h,0),Wt(f,h,e),q(f,f,l),mt(f,f),oa(F,F,f);t.halfSize=F}function Ea(i,t,a,s,n=_t(a)){const o=fa(a),r=1+Math.max(0,s)/(o.radius+i.centerZ);i.getCenter(T),T[2]+=s,St(T,a,0,T,n,0,1),t.center=T;const c=i.getQuaternion(R);t.quaternion=c,U(l,c),O(f,0,0,1),q(f,f,l);const e=i.getHalfSize(it);O(f,e[0]*Math.abs(f[0]),e[1]*Math.abs(f[1]),e[2]*Math.abs(f[2])),et(f,f,o.inverseFlattening),lt(f,e,f),t.halfSize=et(f,f,r)}const jt=new Array(24),Ta=new Nt(jt,3),T=d(),Q=d(),va=d(),it=d(),k=Ut(),j=ta(),Xt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),F=d(),x=d(),Ha=Pt(-1,-1,-1);export{is as L,ft as O,ts as t};
