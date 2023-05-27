"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{9298:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(9439),a=n(7689),i=n(1087),s=n(2791),c=n(7596),o=n(7433),l=n(8809),u=n(3208),d="MovieCardDetails_wrapper__hB4sy",_="MovieCardDetails_container__spJiA",v="MovieCardDetails_btn__back__33l2c",p="MovieCardDetails_card__container__Q-Ygg",f="MovieCardDetails_card__img__+eme3",h="MovieCardDetails_card__detaile__rmSm+",m="MovieCardDetails_box__title__sy9XU",x="MovieCardDetails_card__title__Mqd3L",j="MovieCardDetails_text__title__q1RM0",k="MovieCardDetails_text__detaile__VePsv",g="MovieCardDetails_card__list__bXiAR",w="MovieCardDetails_card__item__numq-",y="MovieCardDetails_container__info__4GeUk",N="MovieCardDetails_info__list__y90dP",C="MovieCardDetails_card__title__info__EPz-C",M="MovieCardDetails_active__9ZGRj",b="MovieCardDetails_navLink__CG3Ul",D=n(184),U=function(){var e,t,n,U,A,S=(0,s.useState)(null),P=(0,r.Z)(S,2),Z=P[0],q=P[1],G=(0,s.useState)(!1),L=(0,r.Z)(G,2),O=L[0],R=L[1],B=(0,a.UO)().movieId,E=function(e){var t=e.isActive;return"".concat(t?M:b)},F=(0,a.TH)();return(0,s.useEffect)((function(){R(!0),(0,o.Ny)(B).then((function(e){var t=e.id,n=e.genres,r=e.overview,a=e.poster_path,i=e.original_title,s=e.release_date,c=e.vote_average;return q({id:t,genres:n,overview:r,release_date:s,vote_average:c,original_title:i,poster_path:a})})).catch((function(e){return c.Am.error(e.message,"Something went wrong!")})).finally((function(){return R(!1)}))}),[B]),(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("div",{className:d,children:[(0,D.jsxs)("section",{className:_,children:[(0,D.jsx)(i.rU,{className:v,to:null!==(e=null===F||void 0===F||null===(t=F.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Back"}),(0,D.jsxs)("div",{className:p,children:[(0,D.jsx)("img",{className:f,src:null!==Z&&void 0!==Z&&Z.poster_path?"https://image.tmdb.org/t/p/w300".concat(Z.poster_path):u,alt:""}),(0,D.jsxs)("div",{className:h,children:[(0,D.jsxs)("div",{className:m,children:[(0,D.jsx)("h2",{className:x,children:null!==Z&&void 0!==Z&&Z.original_title?Z.original_title:"Movie without a title"}),(0,D.jsxs)("p",{className:x,children:["(",null===Z||void 0===Z?void 0:Z.release_date.slice(0,4),")"]})]}),(0,D.jsxs)("p",{className:j,children:["Overview:",(0,D.jsx)("span",{className:k,children:null===Z||void 0===Z?void 0:Z.overview})]}),(0,D.jsxs)("p",{className:j,children:["User score:",(0,D.jsxs)("span",{className:k,children:[Math.round(10*(null===Z||void 0===Z?void 0:Z.vote_average))," %"]})]}),(0,D.jsxs)("ul",{className:g,children:[(0,D.jsx)("span",{className:j,children:"Genres:"}),(null===Z||void 0===Z||null===(n=Z.genres)||void 0===n?void 0:n.length)>0&&Z.genres.map((function(e,t){return(0,D.jsx)("li",{className:w,children:(0,D.jsx)("p",{children:e.name})},t)}))]})]})]})]}),(0,D.jsxs)("section",{className:y,children:[(0,D.jsx)("h2",{className:C,children:"Additional information"}),(0,D.jsxs)("ul",{className:N,children:[(0,D.jsx)("li",{children:(0,D.jsx)(i.OL,{className:E,to:"cast",state:null!==(U=null===F||void 0===F?void 0:F.state)&&void 0!==U?U:"/",children:"Cast"})}),(0,D.jsx)("li",{children:(0,D.jsx)(i.OL,{className:E,to:"reviews",state:null!==(A=null===F||void 0===F?void 0:F.state)&&void 0!==A?A:"/",children:"Reviews"})})]}),(0,D.jsx)(s.Suspense,{fallback:(0,D.jsx)(l.Z,{}),children:(0,D.jsx)(a.j3,{})})]}),O&&(0,D.jsx)(l.Z,{})]})})},A=function(){return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(U,{})})}},7433:function(e,t,n){function r(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function c(e){r(s,a,i,c,o,"next",e)}function o(e){r(s,a,i,c,o,"throw",e)}c(void 0)}))}}n.d(t,{y:function(){return p},Ny:function(){return _},Bt:function(){return h},Ai:function(){return x},Tg:function(){return u}});var i=n(7757),s=n.n(i),c="https://api.themoviedb.org/3/",o="a961e99727987689b5a0d0e9241df951&language=en-US&page=1",l="trending/movie/day";function u(){return d.apply(this,arguments)}function d(){return(d=a(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c).concat(l,"?api_key=").concat(o));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return v.apply(this,arguments)}function v(){return(v=a(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"movie/").concat(t,"?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=a(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=a(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=a(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3208:function(e,t,n){e.exports=n.p+"static/media/meh2.9d6aef3acf8e372c9aa3.png"}}]);
//# sourceMappingURL=298.5e20a4bd.chunk.js.map