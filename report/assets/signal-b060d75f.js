import{h as i}from"./Error-21d1d076.js";import{f as o}from"./subclass-f7409b1b.js";import{s as r}from"./SimpleObservable-ae589a25.js";class a{constructor(t,s){this._observable=new r,this._value=t,this._equalityFunction=s}get value(){return o(this._observable),this._value}set value(t){this._equalityFunction(t,this._value)||(this._value=t,this._observable.notify())}mutate(t){t(this._value),this._observable.notify()}}function h(e,t=i){return new a(e,t)}export{h as r};
