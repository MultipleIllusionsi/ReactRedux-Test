(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(t,e,n){t.exports=n(45)},42:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=n(16),u=n(22),i=n(25),l=n(6),d=n(14),p=(n(39),n(26)),b=n(27),f=n.n(b),h=n(29),m=n(15),E=n(8),v={posts:[]},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case E.c:return{posts:a,length:a.length};case E.a:var r=a.title,c=a.body;return{posts:[].concat(Object(m.a)(t.posts),[{userId:999,id:++t.posts.length,title:r,body:c}])};case E.b:var o=a.title,s=a.body,u=a.id;return{posts:t.posts.map((function(t){return t.id===u?Object(h.a)({},t,{title:o,body:s}):t}))};case E.f:return{posts:t.posts.filter((function(t){return t.id!==a.id}))};default:return t}},O=[],g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case E.e:return[].concat(Object(m.a)(t),[a]);default:return t}},T=[],j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case E.d:return a;default:return t}},S={key:"99912",storage:f.a,whitelist:["posts"]},_=Object(l.c)({posts:y,users:g,comments:j}),w=Object(d.a)(S,_),k=[p.a];var x=Object(l.d)(w,l.a.apply(void 0,k)),A=Object(d.b)(x),C=(n(42),n(10)),D=(n(43),Object(a.lazy)((function(){return n.e(4).then(n.bind(null,60))}))),P=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,58))})),R=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,59))})),z=function(){return r.a.createElement(C.d,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(C.b,{exact:!0,path:"/",render:function(){return r.a.createElement(C.a,{to:"/posts"})}}),r.a.createElement(C.b,{exact:!0,path:"/posts",component:D}),r.a.createElement(C.b,{path:"/posts/:id",component:P}),r.a.createElement(C.b,{path:"/add/post",component:R})))};o.a.render(r.a.createElement(u.a,{store:x},r.a.createElement(i.a,{persistor:A},r.a.createElement(s.a,{basename:"/ReactRedux-Test"},r.a.createElement(z,null)))),document.getElementById("root"))},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return u}));var a="ADD_POST",r="REMOVE_POST",c="EDIT_POST",o="FETCH_ALL_POSTS",s="FETCH_USERDATA",u="FETCH_COMMENTS"}},[[30,1,2]]]);
//# sourceMappingURL=main.818f50e1.chunk.js.map