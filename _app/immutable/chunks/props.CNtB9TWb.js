import{S as A,y as $,z,A as V,B as J,C as m,D as Q,g as h,U as c,F as P,G as N,H as C,I as W,o as X,E as k,J as B,q as Y,K as M,w as x,L as p,M as ee,N as re,O as ae,P as U,x as te,Q as ne,R as fe,T as ie,V as se,W as ue,j,X as le,Y as _e,Z as G,_ as ve,l as H,$ as de,a0 as ce,a1 as oe,a2 as ge,a3 as ye,a4 as be}from"./runtime.AwLFUOrX.js";import{c as Pe}from"./store.B_Ft-746.js";function w(f,u=null,y){if(typeof f!="object"||f===null||A in f)return f;const b=$(f);if(b!==z&&b!==V)return f;var i=new Map,_=J(f),v=m(0);_&&i.set("length",m(f.length));var d;return new Proxy(f,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&W();var a=i.get(e);return a===void 0?(a=m(r.value),i.set(e,a)):P(a,w(r.value,d)),!0},deleteProperty(n,e){var r=i.get(e);if(r===void 0)e in n&&i.set(e,m(c));else{if(_&&typeof e=="string"){var a=i.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&P(a,t)}P(r,c),K(v)}return!0},get(n,e,r){var o;if(e===A)return f;var a=i.get(e),t=e in n;if(a===void 0&&(!t||(o=N(n,e))!=null&&o.writable)&&(a=m(w(t?n[e]:c,d)),i.set(e,a)),a!==void 0){var s=h(a);return s===c?void 0:s}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var a=i.get(e);a&&(r.value=h(a))}else if(r===void 0){var t=i.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(n,e){var s;if(e===A)return!0;var r=i.get(e),a=r!==void 0&&r.v!==c||Reflect.has(n,e);if(r!==void 0||C!==null&&(!a||(s=N(n,e))!=null&&s.writable)){r===void 0&&(r=m(a?w(n[e],d):c),i.set(e,r));var t=h(r);if(t===c)return!1}return a},set(n,e,r,a){var E;var t=i.get(e),s=e in n;if(_&&e==="length")for(var o=r;o<t.v;o+=1){var R=i.get(o+"");R!==void 0?P(R,c):o in n&&(R=m(c),i.set(o+"",R))}t===void 0?(!s||(E=N(n,e))!=null&&E.writable)&&(t=m(void 0),P(t,w(r,d)),i.set(e,t)):(s=t.v!==c,P(t,w(r,d)));var g=Reflect.getOwnPropertyDescriptor(n,e);if(g!=null&&g.set&&g.set.call(a,r),!s){if(_&&typeof e=="string"){var S=i.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&P(S,O+1)}K(v)}return!0},ownKeys(n){h(v);var e=Reflect.ownKeys(n).filter(t=>{var s=i.get(t);return s===void 0||s.v!==c});for(var[r,a]of i)a.v!==c&&!(r in n)&&e.push(r);return e},setPrototypeOf(){Q()}})}function K(f,u=1){P(f,f.v+u)}function Re(f,u,y,b=null,i=!1){x&&p();var _=f,v=null,d=null,n=null,e=i?k:0;X(()=>{if(n===(n=!!u()))return;let r=!1;if(x){const a=_.data===ee;n===a&&(_=re(),ae(_),U(!1),r=!0)}n?(v?B(v):v=Y(()=>y(_)),d&&M(d,()=>{d=null})):(d?B(d):b&&(d=Y(()=>b(_))),v&&M(v,()=>{v=null})),r&&U(!0)},e),x&&(_=te)}function Z(f){for(var u=C,y=C;u!==null&&!(u.f&(le|_e));)u=u.parent;try{return G(u),f()}finally{G(y)}}function Ee(f,u,y,b){var q;var i=(y&ve)!==0,_=!ie||(y&se)!==0,v=(y&fe)!==0,d=(y&oe)!==0,n=!1,e;v?[e,n]=Pe(()=>f[u]):e=f[u];var r=A in f||ne in f,a=((q=N(f,u))==null?void 0:q.set)??(r&&v&&u in f?l=>f[u]=l:void 0),t=b,s=!0,o=!1,R=()=>(o=!0,s&&(s=!1,d?t=j(b):t=b),t);e===void 0&&b!==void 0&&(a&&_&&ue(),e=R(),a&&a(e));var g;if(_)g=()=>{var l=f[u];return l===void 0?R():(s=!0,o=!1,l)};else{var S=Z(()=>(i?H:de)(()=>f[u]));S.f|=ce,g=()=>{var l=h(S);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(y&ge))return g;if(a){var O=f.$$legacy;return function(l,I){return arguments.length>0?((!_||!I||O||n)&&a(I?g():l),l):g()}}var E=!1,F=!1,D=ye(e),T=Z(()=>H(()=>{var l=g(),I=h(D);return E?(E=!1,F=!0,I):(F=!1,D.v=l)}));return i||(T.equals=be),function(l,I){if(arguments.length>0){const L=I?h(T):_&&v?w(l):l;return T.equals(L)||(E=!0,P(D,L),o&&t!==void 0&&(t=L),j(()=>h(T))),l}return h(T)}}export{w as a,Re as i,Ee as p};
