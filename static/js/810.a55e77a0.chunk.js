(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[810],{4254:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1087),i=n(2007),a=n.n(i),o=n(3208),s={movcard__list:"MovieCard_movcard__list__Nvqci",movcard__item:"MovieCard_movcard__item__BfRtc",film__name:"MovieCard_film__name__48e-E",film__poster:"MovieCard_film__poster__GccE3"},c=n(184),u=function(e){var t=e.id,n=e.original_title,i=e.poster_path,a=e.activeId,u=e.location;return(0,c.jsx)("section",{className:s.container,children:(0,c.jsx)("ul",{className:s.movcard__list,children:(0,c.jsx)("li",{className:s.movcard__item,children:(0,c.jsxs)(r.rU,{to:"/movies/".concat(a),state:{from:u},children:[(0,c.jsx)("img",{className:s.film__poster,src:i?"https://image.tmdb.org/t/p/w500/".concat(i):o,alt:n}),(0,c.jsx)("p",{className:s.film__name,children:n||(0,c.jsx)("span",{className:s.non__title,children:"Movie without a title"})})]})},t)})})};u.prototype={id:a().number,title:a().string,poster_path:a().string,activeId:a().number.isRequired,location:a().shape({state:a().string})};var p=u},6810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(3433),i=n(9439),a=n(2791),o=n(7596),s=n(5861),c=n(7757),u=n.n(c),p="https://api.themoviedb.org/3/",l="a961e99727987689b5a0d0e9241df951&language=en-US&page=1",f="trending/movie/day";function m(){return(m=(0,s.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p).concat(f,"?api_key=").concat(l));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var _=function(){return m.apply(this,arguments)},d=n(7689),v=n(2007),h=n.n(v),g=n(4254),y="MoviesList_movies__list__omDb8",x=n(184),b=function(e){var t=e.movies,n=(0,d.TH)();return(0,x.jsx)("ul",{className:y,children:null===t||void 0===t?void 0:t.map((function(e,t){var r=e.id,i=e.original_title,a=e.poster_path;return(0,x.jsx)(g.Z,{location:n,id:r,original_title:i,poster_path:a,activeId:r},t)}))})};b.propType={movies:h().arrayOf(h().shape).isRequired};var j=b,w=n(8809),T=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],s=t[1],c=(0,a.useState)(!1),u=(0,i.Z)(c,2),p=u[0],l=u[1];return(0,a.useEffect)((function(){l(!0),_().then((function(e){var t=e.results;s((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))}))})).catch((function(e){return o.Am.error(e.message,"Something went wrong!")})).finally((function(){return l(!1)}))}),[]),(0,x.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"30px"},children:[(0,x.jsx)("h1",{style:{marginLeft:"100px",textTransform:"uppercase",fontWeight:"500",fontSize:"30px",color:"rgb(64, 63, 153)"},children:"Trending today"}),n&&(0,x.jsx)(j,{movies:n}),p&&(0,x.jsx)(w.Z,{})]})}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3208:function(e,t,n){"use strict";e.exports=n.p+"static/media/meh2.9d6aef3acf8e372c9aa3.png"},5861:function(e,t,n){"use strict";function r(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,c,"next",e)}function c(e){r(o,i,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=810.a55e77a0.chunk.js.map