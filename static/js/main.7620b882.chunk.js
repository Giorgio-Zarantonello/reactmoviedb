(this.webpackJsonpmovie_db=this.webpackJsonpmovie_db||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(4),i=c.n(a),o=(c(11),c(5)),j=c(3),d=function(e){var t,c=e.title,r=e.poster_path,s=e.overview,a=e.vote_average;return Object(n.jsxs)("div",{className:"movie",children:[r?Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+r,alt:c}):Object(n.jsx)("img",{src:"no-cover.png",alt:c}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsx)("span",{className:"tag ".concat((t=a,t>=8?"green":t>=6?"orange":"red")),children:a})]}),Object(n.jsxs)("div",{className:"movie-over",children:[Object(n.jsx)("h2",{children:"overview:"}),Object(n.jsx)("p",{children:s})]})]})};var b=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),b=i[0],h=i[1],l=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return s(e.results)}))};return Object(r.useEffect)((function(){l("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7dfb82eb457deebdc6787fda12875009")}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),b&&(l("".concat("https://api.themoviedb.org/3/search/movie?&api_key=7dfb82eb457deebdc6787fda12875009&query=").concat(b)),h(""))},children:Object(n.jsx)("input",{type:"search",className:"search",placeholder:"Search...",value:b,onChange:function(e){h(e.target.value)}})})}),Object(n.jsx)("div",{className:"movie-container",children:c.length>0&&c.map((function(e){return Object(n.jsx)(d,Object(o.a)({},e),e.id)}))}),");"]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7620b882.chunk.js.map