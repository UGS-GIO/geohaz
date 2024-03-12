import{f as S}from"./Error-21d1d076.js";import{c as E}from"./locale-bde6d0f6.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function w(e=E()){let n=(e=e.toLowerCase())in x;if(!n){const l=e.split("-");l.length>1&&l[0]in x&&(e=l[0],n=!0),n||(e="en")}const[t,r,s="#,##0.###"]=x[e];return{decimal:t,group:r,pattern:s}}function A(e,n){const t=w((n={...n}).locale);n.customs=t;const r=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,r,n)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,n,t){const r=(t=t||{}).customs.group,s=t.customs.decimal,l=n.split(";"),o=l[0];if((n=l[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(n.includes("‰"))e*=1e3;else{if(n.includes("¤"))throw new Error("currency notation not supported");if(n.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=o.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+n);return t.fractional===!1&&(t.places=0),n.replace(d,z(e,u[0],{decimal:s,group:r,places:t.places,round:t.round}))}function z(e,n,t){(t=t||{}).places===!0&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),s=typeof t.places=="string"&&t.places.indexOf(",");let l=t.places;s?l=t.places.substring(s+1):+l>=0||(l=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),d=o[1]||"";if(r[1]||t.places){s&&(t.places=t.places.substring(0,s));const c=t.places!==void 0?t.places:r[1]&&r[1].lastIndexOf("0")+1;+c>d.length&&(o[1]=d.padEnd(Number(c),"0")),+l<d.length&&(o[1]=d.substr(0,Number(l)))}else o[1]&&o.pop();const u=r[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>o[0].length&&(o[0]=o[0].padStart(f,"0")),u.includes("#")||(o[0]=o[0].substr(o[0].length-f)));let p,i,a=r[0].lastIndexOf(",");if(a!==-1){p=r[0].length-a-1;const c=r[0].substr(0,a);a=c.lastIndexOf(","),a!==-1&&(i=c.length-a-1)}const g=[];for(let c=o[0];c;){const m=c.length-p;g.push(m>0?c.substr(m):c),c=m>0?c.slice(0,m):"",i&&(p=i,i=void 0)}return o[0]=g.reverse().join(t.group||","),o.join(t.decimal||".")}function O(e){const n=w((e=e||{}).locale),t=e.pattern||n.pattern,r=n.group,s=n.decimal;let l=1;if(t.includes("%"))l/=100;else if(t.includes("‰"))l/=1e3;else if(t.includes("¤"))throw new Error("currency notation not supported");const o=t.split(";");return o.length===1&&o.push("-"+o[0]),{regexp:h(o,u=>(u="(?:"+S(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:s,exponent:!1},i=f.split(".");let a=e.places;i.length===1&&l!==1&&(i[1]="###"),i.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&+a<i[1].length&&(a+=","+i[1].length),p.places=a);const g=i[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+y(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:s,factor:l}}function $(e,n){const t=O(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],t.factor*=-1}return s=s.replaceAll(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(s)*t.factor}function y(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=b(e),t=h(e.fractional,s=>{let l="";return s&&e.places!==0&&(l="\\"+e.decimal,e.places===1/0?l="(?:"+l+"\\d+)?":l+="\\d{"+e.places+"}"),l},!0);let r=n+t;return t&&(r="(?:(?:"+r+")|(?:"+t+"))"),r+h(e.exponent,s=>s?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,n=>n?"[-+]":"",!0)+h(e.separator,n=>{if(!n)return"(?:\\d+)";(n=S(n))===" "?n="\\s":n===" "&&(n="\\s\\xa0");const t=e.groupSize,r=e.groupSize2;if(r){const s="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*["+n+"]\\d{"+t+"})";return t-r>0?"(?:"+s+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":s}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+n+"]\\d{"+t+"})*)"},!0)}const h=(e,n,t)=>{if(!(e instanceof Array))return n(e);const r=[];for(let s=0;s<e.length;s++)r.push(n(e[s]));return j(r.join("|"),Boolean(t))},j=(e,n)=>"("+(n?"?:":"")+e+")";export{O as a,$ as p,A as s};
