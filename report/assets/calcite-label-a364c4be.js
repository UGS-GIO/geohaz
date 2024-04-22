import{p as o,H as l,t as s,l as t,q as c}from"./jsxFactory-605eab60.js";import{a as r,l as d,b as m}from"./label2-29d9af72.js";import"./subclass-f7409b1b.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import"./promiseUtils-1d963c7c.js";import"./intl-fe039018.js";import"./date-7940da18.js";import"./jsonMap-5ba4a9c2.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./messages-2d262041.js";import"./request-a10d6950.js";import"./JSONSupport-acf2865c.js";import"./time-0817624a.js";import"./assets-6fd92e57.js";import"./Evented-b5127116.js";import"./Promise-ec74e14b.js";import"./reactiveUtils-e7d9f86e.js";import"./Collection-aa6ef54b.js";import"./SimpleObservable-ae589a25.js";import"./uuid-709b6c67.js";import"./cast-e7a2f9aa.js";import"./dom-e0c2d9aa.js";import"./guid-bf7a2a99.js";import"./component-11d84c19.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const h={container:"container"},p=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",i=o(class extends l{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=s(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){r(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(d))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(m))}render(){return t(c,{onClick:this.labelClickHandler},t("div",{class:h.container},t("slot",null)))}get el(){return this}static get watchers(){return{for:["handleForChange"]}}static get style(){return p}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]},void 0,{for:["handleForChange"]}]);function n(){if(typeof customElements>"u")return;["calcite-label"].forEach(e=>{switch(e){case"calcite-label":customElements.get(e)||customElements.define(e,i);break}})}n();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const J=i,K=n;export{J as CalciteLabel,K as defineCustomElement};