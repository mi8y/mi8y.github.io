import{S as P,i as w,s as M,a as u,w as d,ae as T,h as l,c,x as $,b as _,y as g,f as h,t as v,z as y}from"../../../../chunks/paths-7a7baea2.js";import{F as x,Q as F}from"../../../../chunks/FieldDetails-7c26a50d.js";import{P as N}from"../../../../chunks/PreviousNextPage-8a3dac72.js";function Q(o){let n,r,t,i,s,f;return document.title=n="Mutation - "+o[0].field.name,t=new x({props:{field:o[0].field,type:F.MUTATION}}),s=new N({props:{page:o[0].page}}),{c(){r=u(),d(t.$$.fragment),i=u(),d(s.$$.fragment)},l(e){T("svelte-1ha51ns",document.head).forEach(l),r=c(e),$(t.$$.fragment,e),i=c(e),$(s.$$.fragment,e)},m(e,a){_(e,r,a),g(t,e,a),_(e,i,a),g(s,e,a),f=!0},p(e,[a]){(!f||a&1)&&n!==(n="Mutation - "+e[0].field.name)&&(document.title=n);const m={};a&1&&(m.field=e[0].field),t.$set(m);const p={};a&1&&(p.page=e[0].page),s.$set(p)},i(e){f||(h(t.$$.fragment,e),h(s.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),f=!1},d(e){e&&l(r),y(t,e),e&&l(i),y(s,e)}}}function S(o,n,r){let{data:t}=n;return o.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class A extends P{constructor(n){super(),w(this,n,S,Q,M,{data:0})}}export{A as default};
