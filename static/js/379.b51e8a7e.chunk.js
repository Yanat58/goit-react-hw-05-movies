"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{3160:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r=e(9439),a=e(7689),c=e(2791),s=e(7596),o=e(7433),i=e(8809),u=e.p+"static/media/not-found.c04f07f69a328141a5f3.png",f="Cast_foto_actor__wlecR",p="Cast_wrapper__XmIBi",_="Cast_container__iz+ye",h="Cast_actor__list__f3kEW",l="Cast_actor__item__8ltNV",m="Cast_actor__box__KyyaK",d="Cast_actor__name__JuIQ1",v="Cast_actor__character__w4rc-",x="Cast_span__text__aGR6I",k=e(184),y=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],y=n[1],w=(0,c.useState)(!1),g=(0,r.Z)(w,2),b=g[0],j=g[1],C=(0,a.UO)().movieId;return(0,c.useEffect)((function(){j(!0),(0,o.y)(C).then((function(t){var n=t.cast;n.map((function(t){return{character:t.character,original_name:t.original_name,profile_path:t.profile_path}})),y(n)})).catch((function(t){return s.Am.error(t.message,"Something went wrong!")})).finally((function(){return j(!1)}))}),[C]),(0,k.jsx)("div",{className:p,children:(0,k.jsxs)("section",{className:_,children:[e&&e.length>0?(0,k.jsx)("ul",{className:h,children:null===e||void 0===e?void 0:e.map((function(t,n){var e=t.character,r=t.original_name,a=t.profile_path;return(0,k.jsxs)("li",{className:l,children:[(0,k.jsx)("img",{className:f,src:a?"https://image.tmdb.org/t/p/w300".concat(a):u,alt:r}),(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)("p",{className:d,children:r}),(0,k.jsxs)("p",{className:v,children:["Character:",e]})]})]},n)}))}):(0,k.jsx)("p",{className:x,children:"Cast not found"}),b&&(0,k.jsx)(i.Z,{})]})})}},7433:function(t,n,e){function r(t,n,e,r,a,c,s){try{var o=t[c](s),i=o.value}catch(u){return void e(u)}o.done?n(i):Promise.resolve(i).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,c){var s=t.apply(n,e);function o(t){r(s,a,c,o,i,"next",t)}function i(t){r(s,a,c,o,i,"throw",t)}o(void 0)}))}}e.d(n,{y:function(){return l},Ny:function(){return _},Bt:function(){return d},Ai:function(){return x},Tg:function(){return f}});var c=e(7757),s=e.n(c),o="https://api.themoviedb.org/3/",i="a961e99727987689b5a0d0e9241df951&language=en-US&page=1",u="trending/movie/day";function f(){return p.apply(this,arguments)}function p(){return(p=a(s().mark((function t(){var n,e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o).concat(u,"?api_key=").concat(i));case 2:if(!(n=t.sent).ok){t.next=8;break}return t.next=6,n.json();case 6:return e=t.sent,t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return h.apply(this,arguments)}function h(){return(h=a(s().mark((function t(n){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(i));case 2:if(!(e=t.sent).ok){t.next=8;break}return t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=a(s().mark((function t(n){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:if(!(e=t.sent).ok){t.next=8;break}return t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=a(s().mark((function t(n){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:if(!(e=t.sent).ok){t.next=8;break}return t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=a(s().mark((function t(n){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n));case 2:if(!(e=t.sent).ok){t.next=8;break}return t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=379.b51e8a7e.chunk.js.map