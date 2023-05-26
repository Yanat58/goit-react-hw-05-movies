"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[661],{9661:function(e,a,t){t.r(a),t.d(a,{default:function(){return O}});var i=t(9439),n=t(7689),s=t(1087),r=t(2791),l=t(7596),o=t(5861),c=t(7757),d=t.n(c),_="https://api.themoviedb.org/3/",v="a961e99727987689b5a0d0e9241df951&language=en-US";function u(){return(u=(0,o.Z)(d().mark((function e(a){var t,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(_,"movie/").concat(a,"?api_key=").concat(v,"&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var h=function(e){return u.apply(this,arguments)},m=t(8809),p=t(3208),f="MovieCardDetails_wrapper__hB4sy",x="MovieCardDetails_container__spJiA",j="MovieCardDetails_btn__back__33l2c",g="MovieCardDetails_card__container__Q-Ygg",C="MovieCardDetails_card__img__+eme3",M="MovieCardDetails_card__detaile__rmSm+",N="MovieCardDetails_box__title__sy9XU",w="MovieCardDetails_card__title__Mqd3L",D="MovieCardDetails_text__title__q1RM0",k="MovieCardDetails_text__detaile__VePsv",b="MovieCardDetails_card__list__bXiAR",y="MovieCardDetails_card__item__numq-",U="MovieCardDetails_container__info__4GeUk",Z="MovieCardDetails_info__list__y90dP",S="MovieCardDetails_card__title__info__EPz-C",A="MovieCardDetails_active__9ZGRj",P="MovieCardDetails_navLink__CG3Ul",G=t(184),L=function(){var e,a,t,o,c,d,_,v,u=(0,r.useState)(null),L=(0,i.Z)(u,2),O=L[0],R=L[1],q=(0,r.useState)(!1),B=(0,i.Z)(q,2),E=B[0],F=B[1],X=(0,n.UO)().movieId,z=function(e){var a=e.isActive;return"".concat(a?A:P)},H=(0,n.TH)();return(0,r.useEffect)((function(){F(!0),h(X).then((function(e){var a=e.id,t=e.genres,i=e.overview,n=e.poster_path,s=e.original_title,r=e.release_date,l=e.vote_average;return R({id:a,genres:t,overview:i,release_date:r,vote_average:l,original_title:s,poster_path:n})})).catch((function(e){return l.Am.error(e.message,"Something went wrong!")})).finally((function(){return F(!1)}))}),[X]),(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)("div",{className:f,children:[(0,G.jsxs)("section",{className:x,children:[(0,G.jsx)(s.rU,{className:j,to:null!==(e=(null===H||void 0===H||null===(a=H.state)||void 0===a||null===(t=a.from)||void 0===t?void 0:t.pathname)+(null===H||void 0===H||null===(o=H.state)||void 0===o||null===(c=o.from)||void 0===c?void 0:c.search))&&void 0!==e?e:"/",children:"Back"}),(0,G.jsxs)("div",{className:g,children:[(0,G.jsx)("img",{className:C,src:null!==O&&void 0!==O&&O.poster_path?"https://image.tmdb.org/t/p/w300".concat(O.poster_path):p,alt:""}),(0,G.jsxs)("div",{className:M,children:[(0,G.jsxs)("div",{className:N,children:[(0,G.jsx)("h2",{className:w,children:null!==O&&void 0!==O&&O.original_title?O.original_title:"Movie without a title"}),(0,G.jsxs)("p",{className:w,children:["(",null===O||void 0===O?void 0:O.release_date.slice(0,4),")"]})]}),(0,G.jsxs)("p",{className:D,children:["Overview:",(0,G.jsx)("span",{className:k,children:null===O||void 0===O?void 0:O.overview})]}),(0,G.jsxs)("p",{className:D,children:["User score:",(0,G.jsxs)("span",{className:k,children:[Math.round(10*(null===O||void 0===O?void 0:O.vote_average))," %"]})]}),(0,G.jsxs)("ul",{className:b,children:[(0,G.jsx)("span",{className:D,children:"Genres:"}),(null===O||void 0===O||null===(d=O.genres)||void 0===d?void 0:d.length)>0&&O.genres.map((function(e,a){return(0,G.jsx)("li",{className:y,children:(0,G.jsx)("p",{children:e.name})},a)}))]})]})]})]}),(0,G.jsxs)("section",{className:U,children:[(0,G.jsx)("h2",{className:S,children:"Additional information"}),(0,G.jsxs)("ul",{className:Z,children:[(0,G.jsx)("li",{children:(0,G.jsx)(s.OL,{className:z,to:"cast",state:null!==(_=null===H||void 0===H?void 0:H.state)&&void 0!==_?_:"/",children:"Cast"})}),(0,G.jsx)("li",{children:(0,G.jsx)(s.OL,{className:z,to:"reviews",state:null!==(v=null===H||void 0===H?void 0:H.state)&&void 0!==v?v:"/",children:"Reviews"})})]}),(0,G.jsx)(r.Suspense,{fallback:(0,G.jsx)(m.Z,{}),children:(0,G.jsx)(n.j3,{})})]}),E&&(0,G.jsx)(m.Z,{})]})})},O=function(){return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(L,{})})}},3208:function(e,a,t){e.exports=t.p+"static/media/meh2.9d6aef3acf8e372c9aa3.png"},5861:function(e,a,t){function i(e,a,t,i,n,s,r){try{var l=e[s](r),o=l.value}catch(c){return void t(c)}l.done?a(o):Promise.resolve(o).then(i,n)}function n(e){return function(){var a=this,t=arguments;return new Promise((function(n,s){var r=e.apply(a,t);function l(e){i(r,n,s,l,o,"next",e)}function o(e){i(r,n,s,l,o,"throw",e)}l(void 0)}))}}t.d(a,{Z:function(){return n}})}}]);
//# sourceMappingURL=661.31928e7b.chunk.js.map