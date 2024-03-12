import{e as n,c as m}from"./subclass-f7409b1b.js";import{S as _}from"./JSONSupport-acf2865c.js";import{L as l,a as p,b as u}from"./promiseUtils-1d963c7c.js";var r;(function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"})(r||(r={}));class a{constructor(){this._resolver=l(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()}),this.promise=this._resolver.promise}destroy(){this._cleanUp()}addResolvingPromise(i){this._resolvingPromises.push(i),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(p())}_cleanUp(){this._allPromise=null,this._resolvingPromises=null}_tryResolve(){if(this.isFulfilled())return;const i=l(),s=[...this._resolvingPromises,i.promise],t=this._allPromise=Promise.all(s);t.then(()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve()},o=>{this.isFulfilled()||this._allPromise!==t||u(o)||this._resolver.reject(o)}),i.resolve()}}const P=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new a,this.addResolvingPromise(Promise.resolve())}destroy(){this._promiseProps.destroy()}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,t){return this._promiseProps.promise.then(()=>this).then(s,t)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s)}};return i=n([m("esri.core.Promise")],i),i};let h=class extends P(_){};h=n([m("esri.core.Promise")],h);export{h as m,P as n};
