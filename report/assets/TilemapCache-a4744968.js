import{o as A,e as d,c as D}from"./subclass-f7409b1b.js";import{U as O,v as S}from"./request-a10d6950.js";import{y,S as z,G as q}from"./JSONSupport-acf2865c.js";import{E as L}from"./ByteSizeUnit-d4757d40.js";import{b as P,a as p}from"./Error-21d1d076.js";import{m as U,b as _,f as x,a as C,e as M}from"./promiseUtils-1d963c7c.js";import{e as E}from"./LRUCache-000d0e19.js";import{d as I,P as k}from"./reactiveUtils-e7d9f86e.js";import{U as j,A as N,y as F}from"./typedArrayUtil-2af43698.js";import{t as H}from"./TileInfo-d188b444.js";function J(e,i=!1){return e<=j?i?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(i){this._validateJSON(i);const{location:a,data:t}=i;this.location=Object.freeze(P(a));const l=this.location.width,s=this.location.height;let r=!0,o=!0;const c=Math.ceil(l*s/32),n=J(c);let h=0;for(let f=0;f<t.length;f++){const u=f%32;t[f]?(o=!1,n[h]|=1<<u):r=!1,u===31&&++h}o?(this._availability="unavailable",this.byteSize=40):r?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+N(n))}getAvailability(i,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const t=(i-this.location.top)*this.location.width+(a-this.location.left),l=t%32,s=t>>5,r=this._availability;return s<0||s>r.length?"unknown":r[s]&1<<l?"available":"unavailable"}static fromDefinition(i,a){const t=i.service.request||O,{row:l,col:s,width:r,height:o}=i,c={query:{f:"json"}};return a=a?{...c,...a}:c,t(R(i),a).then(n=>n.data).catch(n=>{if(n&&n.details&&n.details.httpStatus===422)return{location:{top:l,left:s,width:r,height:o},valid:!0,data:F(r*o,0)};throw n}).then(n=>{if(n.location&&(n.location.top!==l||n.location.left!==s||n.location.width!==r||n.location.height!==o))throw new p("tilemap:location-mismatch","Tilemap response for different location than requested",{response:n,definition:{top:l,left:s,width:r,height:o}});return w.fromJSON(n)})}static fromJSON(i){return Object.freeze(new w(i))}_validateJSON(i){if(!(i!=null&&i.location))throw new p("tilemap:missing-location","Location missing from tilemap response");if(i.valid===!1)throw new p("tilemap:invalid","Tilemap response was marked as invalid");if(!i.data)throw new p("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(i.data))throw new p("tilemap:data-mismatch","Data must be an array of numbers");if(i.data.length!==i.location.width*i.location.height)throw new p("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function R(e){var t;let i;if((t=e.service.tileServers)!=null&&t.length){const l=e.service.tileServers;i=`${l&&l.length?l[e.row%l.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else i=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(i=`${i}?${a}`),i}var v;let m=v=class extends z{constructor(e){super(e),this._pendingTilemapRequests={},this.request=O,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new E(2*L.MEGABYTES),this.addHandles(I(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition(),k))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,i,a,t){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new p("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,i,a,l);if(s)return Promise.resolve(s);const r=t==null?void 0:t.signal;return t={...t,signal:null},new Promise((o,c)=>{U(r,()=>c(C()));const n=$(l);let h=this._pendingTilemapRequests[n];if(!h){h=w.fromDefinition(l,t).then(u=>(this._tilemapCache.put(n,u,u.byteSize),u));const f=()=>{delete this._pendingTilemapRequests[n]};this._pendingTilemapRequests[n]=h,h.then(f,f)}h.then(o,c)})}getAvailability(e,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new p("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a})):this.fetchTilemap(e,i,a,t).catch(l=>l).then(l=>{if(l instanceof w){const s=l.getAvailability(i,a);if(s==="unavailable")throw new p("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a});return s}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,i,a,t,l){t.level=e,t.row=i,t.col=a;const s=this.layer.tileInfo;s.updateTileInfo(t);const r=this.fetchAvailability(e,i,a,l).catch(o=>{if(_(o))throw o;if(s.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t,l);throw o});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,l,r),r}async _fetchAvailabilityUpsamplePrefetch(e,i,a,t,l,s){if(!this._prefetchingEnabled||e==null)return;const r=`prefetch-${e}`;if(this.hasHandles(r))return;const o=new AbortController;s.then(()=>o.abort(),()=>o.abort());let c=!1;const n=M(()=>{c||(c=!0,o.abort())});if(this.addHandles(n,r),await q(10,o.signal).catch(()=>{}),c||(c=!0,this.removeHandles(r)),x(o))return;const h=new H(e,i,a,t),f={...l,signal:o.signal},u=this.layer.tileInfo;for(let T=0;v._prefetches.length<v._maxPrefetch&&u.upsampleTile(h);++T){const b=this.fetchAvailability(h.level,h.row,h.col,f);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_initializeTilemapDefinition(){var t;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:S({...e.query,...a,token:i??((t=e.query)==null?void 0:t.token)}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;const l=$(t);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(i){e._prefetchingEnabled=i},hasTilemap:(i,a,t)=>!!e._tilemapFromCache(i,a,t,e._tmpTilemapDefinition)}}};m._maxPrefetch=4,m._prefetches=new A({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],m.prototype,"layer",void 0),d([y({constructOnly:!0})],m.prototype,"minLOD",void 0),d([y({constructOnly:!0})],m.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],m.prototype,"request",void 0),d([y({constructOnly:!0})],m.prototype,"size",void 0),m=v=d([D("esri.layers.support.TilemapCache")],m);export{m as T};