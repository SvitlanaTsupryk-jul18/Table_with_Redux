(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(6),c=n.n(u),l=(n(25),n(2)),s=n(4),o=n.n(s),i=n(8),m=n(15),p=n(16),b=n(18),E=n(17),f=n(19),v=(n(31),function(){var e=Object(i.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://dev.frevend.com/json/users.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.users);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),d=function(e){var t=e.user;return a.a.createElement("tr",null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.surname),a.a.createElement("td",null,t.desc))},h=Object(l.b)(null,function(e){return{changePage:function(t){return e({type:"CHANGE_PAGE",target:t.target,value:t.target.value})}}})(function(e){var t=e.changePage;return a.a.createElement("div",{className:"pagination",onClick:function(e){return t(e)}},a.a.createElement("button",{type:"button",name:"prev",value:"prev"},"<"),a.a.createElement("button",{type:"button",name:"1",value:"1"},"1"),a.a.createElement("button",{type:"button",name:"2",value:"2"},"2"),a.a.createElement("button",{type:"button",name:"3",value:"3"},"3"),a.a.createElement("button",{type:"button",name:"4",value:"4"},"4"),a.a.createElement("button",{type:"button",name:"next",value:"next"},">"))}),g=Object(l.b)(function(e){return{users:e.users,currentPage:e.currentPage}})(function(e){var t=e.users,n=void 0===t?[]:t,r=e.currentPage;return a.a.createElement("table",{className:"table-users"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Number"),a.a.createElement("th",null,"name"),a.a.createElement("th",null,"surname"),a.a.createElement("th",null,"description"))),a.a.createElement("tbody",null,n.filter(function(e){return e.id>5*r-5&&e.id<=5*r}).map(function(e){return a.a.createElement(d,{key:e.id,user:e})})))}),j=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setUsers,e.next=3,v();case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Table of ",a.a.createElement("span",null,this.props.count)," users"),a.a.createElement(g,null),a.a.createElement(h,null))}}]),t}(a.a.Component),y=Object(l.b)(function(e){return{count:e.users.length}},function(e){return{setUsers:function(t){return e({type:"SET_USERS",users:t})}}})(j),O=n(5),P=n(7),w=Object(P.b)(function(e,t){switch(t.type){case"SET_USERS":return Object(O.a)({},e,{users:t.users});case"CHANGE_PAGE":var n=t.value;return"button"===!t.target?e:"next"===n?e.currentPage<4?Object(O.a)({},e,{currentPage:e.currentPage+1}):e:"prev"===n?e.currentPage>1?Object(O.a)({},e,{currentPage:e.currentPage-1}):e:Object(O.a)({},e,{currentPage:+n});default:return e}},{users:[],currentPage:1});w.subscribe(function(){console.log(w.getState())});var k=w;c.a.render(a.a.createElement(l.a,{store:k},a.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a8d72a39.chunk.js.map