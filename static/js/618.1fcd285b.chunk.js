"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[618],{6507:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var n=a(9439),r=a(7689),c=a(2791),s=a(7596),o=a(5861),i=a(7757),u=a.n(i),_="https://api.themoviedb.org/3/",l="a961e99727987689b5a0d0e9241df951&language=en-US&page=1";function f(){return(f=(0,o.Z)(u().mark((function t(e){var a,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(_,"movie/").concat(e,"/credits?api_key=").concat(l));case 3:return a=t.sent,t.next=6,a.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}var p=function(t){return f.apply(this,arguments)},h=a(8809),m=a.p+"static/media/not-found.c04f07f69a328141a5f3.png",d="Cast_foto_actor__wlecR",v="Cast_wrapper__XmIBi",g="Cast_container__iz+ye",x="Cast_actor__list__f3kEW",w="Cast_actor__item__8ltNV",C="Cast_actor__box__KyyaK",j="Cast_actor__name__JuIQ1",N="Cast_actor__character__w4rc-",k="Cast_span__text__aGR6I",y=a(184),b=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),a=e[0],o=e[1],i=(0,c.useState)(!1),u=(0,n.Z)(i,2),_=u[0],l=u[1],f=(0,r.UO)().movieId;return(0,c.useEffect)((function(){l(!0),p(f).then((function(t){var e=t.cast;e.map((function(t){return{character:t.character,original_name:t.original_name,profile_path:t.profile_path}})),o(e)})).catch((function(t){return s.Am.error(t.message,"Something went wrong!")})).finally((function(){return l(!1)}))}),[f]),(0,y.jsx)("div",{className:v,children:(0,y.jsxs)("section",{className:g,children:[a&&a.length>0?(0,y.jsx)("ul",{className:x,children:null===a||void 0===a?void 0:a.map((function(t,e){var a=t.character,n=t.original_name,r=t.profile_path;return(0,y.jsxs)("li",{className:w,children:[(0,y.jsx)("img",{className:d,src:r?"https://image.tmdb.org/t/p/w300".concat(r):m,alt:n}),(0,y.jsxs)("div",{className:C,children:[(0,y.jsx)("p",{className:j,children:n}),(0,y.jsxs)("p",{className:N,children:["Character:",a]})]})]},e)}))}):(0,y.jsx)("p",{className:k,children:"Cast not found"}),_&&(0,y.jsx)(h.Z,{})]})})}},5861:function(t,e,a){function n(t,e,a,n,r,c,s){try{var o=t[c](s),i=o.value}catch(u){return void a(u)}o.done?e(i):Promise.resolve(i).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,c){var s=t.apply(e,a);function o(t){n(s,r,c,o,i,"next",t)}function i(t){n(s,r,c,o,i,"throw",t)}o(void 0)}))}}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=618.1fcd285b.chunk.js.map