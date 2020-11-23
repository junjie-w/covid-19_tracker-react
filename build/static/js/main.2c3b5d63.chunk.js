(this["webpackJsonpcovid-19_tracker-react-firebase"]=this["webpackJsonpcovid-19_tracker-react-firebase"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},105:function(e,t,c){},202:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(23)),l=c.n(i),u=c(38),d=c(11),j=(c(100),c(239)),f=c(240),h=c(241),b=c(231),v=c(235),p=c(21),O=c(236),x=(c(101),function(e){var t=e.title,c=e.cases,a=e.total,s=e.active,r=e.isRed,o=Object(p.a)(e,["title","cases","total","active","isRed"]);return Object(n.jsx)(b.a,{onClick:o.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(r&&"infoBox--red"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(O.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})}),m=c(238),g=c(243),y=(c(105),c(86)),C=c(12),_=c.n(C),w=c(242),N=c(237),k={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},S=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},I=function(e){return e?"+".concat(_()(e).format("0.0a")):"+0"},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:k[t].hex,fillColor:k[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(n.jsx)(N.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",_()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",_()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",_()(e.deaths).format("0,0")]})]})})})}))},B=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(m.a,{center:a,zoom:s,children:[Object(n.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),R(t,c)]})})},T=c(85),D={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return _()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return _()(e).format("0a")}}}]}},E=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n},F=function(e){var t=e.casesType,c=Object(a.useState)({}),s=Object(d.a)(c,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=E(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(n.jsx)(T.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:D})})},L=(c(202),function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:_()(e.cases).format("0,0")})})]})}))})});c(203);var M=function(){var e=Object(a.useState)("worldwide"),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],p=o[1],O=Object(a.useState)([]),m=Object(d.a)(O,2),g=m[0],y=m[1],C=Object(a.useState)([]),w=Object(d.a)(C,2),N=w[0],k=w[1],R=Object(a.useState)([]),T=Object(d.a)(R,2),D=T[0],E=T[1],M=Object(a.useState)("cases"),z=Object(d.a)(M,2),A=z[0],J=z[1],P=Object(a.useState)({lat:34.80746,lng:-40.4796}),W=Object(d.a)(P,2),Y=W[0],q=W[1],K=Object(a.useState)(3),V=Object(d.a)(K,2),G=V[0],H=V[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return p(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));y(t);var c=S(e);k(e),E(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("casesType >>>",A);var Q=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){s(c),p(e),q([e.countryInfo.lat,e.countryInfo.long]),H(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:c,onChange:Q,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===A,cases:I(i.todayCases),total:_()(i.cases).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===A,cases:I(i.todayRecovered),total:_()(i.recovered).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("deaths")},title:"Deaths",isRed:!0,active:"deaths"===A,cases:I(i.todayDeaths),total:_()(i.deaths).format("0.0a")})]}),Object(n.jsx)(B,{countries:N,casesType:A,center:Y,zoom:G})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(L,{countries:D}),Object(n.jsxs)("h3",{children:["Worldwide new ",A]}),Object(n.jsx)(F,{casesType:A})]})})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),z()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.2c3b5d63.chunk.js.map