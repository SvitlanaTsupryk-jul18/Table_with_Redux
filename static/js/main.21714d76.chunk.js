(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(6),c=n.n(u),s=(n(25),n(2)),l=n(4),o=n.n(l),i=n(8),p=n(9),m=n(10),f=n(12),b=n(11),E=n(13),h=(n(31),function(){var e=Object(i.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://dev.frevend.com/json/users.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.users);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),g=function(e){var t=e.user;return a.a.createElement("tr",null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.surname),a.a.createElement("td",null,t.desc))},d=n(5),v=n(7),j=Object(v.b)(function(e,t){switch(t.type){case"SET_USERS":return Object(d.a)({},e,{users:t.users});case"CHANGE_PAGE":var n=t.currentPage;return"next"===n?e.currentPage<O-1?Object(d.a)({},e,{currentPage:e.currentPage+1}):e:"prev"===n?e.currentPage>1?Object(d.a)({},e,{currentPage:e.currentPage-1}):e:Object(d.a)({},e,{currentPage:+n});default:return e}},{users:[],currentPage:1}),O=5,P=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.changePage,n=e.users,r=e.currentPage,u=[],c=1;c<=Math.ceil(n.length/O);c++)u.push(c);return a.a.createElement("div",{className:"pagination"},a.a.createElement("button",{type:"button",name:"prev",value:"prev",onClick:function(){return t("prev")},className:"pagination__btn"}," ","<"),u.map(function(e){return a.a.createElement("button",{key:e,onClick:function(){return t(e)},className:e===r?"pagination__btn focused":"pagination__btn"},e)}),a.a.createElement("button",{type:"button",name:"next",value:"next",onClick:function(){return t("next")},className:"pagination__btn"},">"))}}]),t}(a.a.Component),y=Object(s.b)(function(e){return{users:e.users,currentPage:e.currentPage}},function(e){return{changePage:function(t){return e({type:"CHANGE_PAGE",currentPage:t})}}})(P),k=Object(s.b)(function(e){return{users:e.users,currentPage:e.currentPage}})(function(e){var t=e.users,n=void 0===t?[]:t,r=e.currentPage;return a.a.createElement("table",{className:"table-users"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Number"),a.a.createElement("th",null,"name"),a.a.createElement("th",null,"surname"),a.a.createElement("th",null,"description"))),a.a.createElement("tbody",null,n.filter(function(e,t){return t>=r*O-O&&t<r*O}).map(function(e){return a.a.createElement(g,{key:e.id,user:e})})))}),w=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setUsers,e.next=3,h();case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Table of ",a.a.createElement("span",null,this.props.count)," users"),a.a.createElement(k,null),a.a.createElement(y,null))}}]),t}(a.a.Component),_=Object(s.b)(function(e){return{count:e.users.length}},function(e){return{setUsers:function(t){return e({type:"SET_USERS",users:t})}}})(w);c.a.render(a.a.createElement(s.a,{store:j},a.a.createElement(_,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.21714d76.chunk.js.map