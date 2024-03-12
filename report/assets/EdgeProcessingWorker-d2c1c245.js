import{I as p}from"./InterleavedLayout-4bcbdca0.js";import{f,u as c,a as u,I as d,d as g,m}from"./edgeProcessing-d2d3b2df.js";import"./BufferView-6e304e0e.js";import"./vec2-f44efd17.js";import"./mathUtils-19b6edfc.js";import"./vec42-a95eff2d.js";import"./types-1305598a.js";import"./Util-5ae70216.js";import"./vec2f64-b65bfd66.js";import"./vec4f64-430e4feb.js";import"./deduplicate-4feec8ff.js";import"./Indices-968b5cdc.js";import"./typedArrayUtil-2af43698.js";import"./VertexAttribute-c2df436e.js";import"./enums-52934aad.js";import"./VertexElementDescriptor-2925c6af.js";function a(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new p(e.layout)}}class z{async extract(t){const i=o(t),r=f(i),n=[i.data.buffer];return{result:h(r,n),transferList:n}}async extractComponentsEdgeLocations(t){const i=o(t),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,L,l),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}async extractEdgeLocations(t){const i=o(t),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,I,l),s=[];return{result:a(n.regular.instancesData,s),transferList:s}}}function o(e){return{data:d.createView(e.dataBuffer),indices:e.indicesType==="Uint32Array"?new Uint32Array(e.indices):e.indicesType==="Uint16Array"?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function h(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}class w{allocate(t){return g.createBuffer(t)}trim(t,i){return t.slice(0,i)}write(t,i,r){t.position0.setVec(i,r.position0),t.position1.setVec(i,r.position1)}}class y{allocate(t){return m.createBuffer(t)}trim(t,i){return t.slice(0,i)}write(t,i,r){t.position0.setVec(i,r.position0),t.position1.setVec(i,r.position1),t.componentIndex.set(i,r.componentIndex)}}const I=new w,L=new y,l={allocate:()=>null,write:()=>{},trim:()=>null};export{z as default};
