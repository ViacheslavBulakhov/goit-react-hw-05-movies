"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{725:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(7689),a=n(1087),c=n(184),o=function(e){var t=e.films,n=(0,r.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,o=e.name;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:null!==r&&void 0!==r?r:o})},t)}))})}},5415:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(3433),a=n(5861),c=n(9439),o=n(7757),i=n.n(o),s=n(2791),u=n(1243),l=n(3639),f=n(725),p=n(184);function d(){var e=(0,s.useState)(null),t=(0,c.Z)(e,2),n=t[0],o=t[1];return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get((0,l.Z)({type:"homePageUrl"}));case 3:t=e.sent,o((0,r.Z)(t.data.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),n&&(0,p.jsx)(f.s,{films:n})]})}},3639:function(e,t,n){n.d(t,{Z:function(){return a}});var r="663a9254ccdd905d0193e78c0f67091c";function a(e){var t=e.value;switch(e.type){case"homePageUrl":return"https://api.themoviedb.org/3/trending/".concat("all","/").concat("day","?api_key=").concat(r);case"filmDetailsPageUrl":return"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r);case"moviesUrl":return"https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t);default:console.log("type undefined")}}}}]);
//# sourceMappingURL=415.c15c65ae.chunk.js.map