import{g as a}from"./model-7893f4f1.js";import{f as n}from"./pages-3431fda8.js";import{e as i}from"./index-b593c33b.js";const f=({params:t,url:r})=>{const o=a(t.mutation),e=n(r.pathname);if(!o||!e)throw i(404,`Mutation ${t.mutation} not found.`);return{field:o,page:e}},p=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));export{p as _,f as l};
