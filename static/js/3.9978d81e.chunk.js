(this.webpackJsonptest=this.webpackJsonptest||[]).push([[3],{51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u}));var a="https://jsonplaceholder.typicode.com/",c={id:999,username:"Custom username",name:"Custom full name",phone:"121212121212",email:"custom.user@mail.ru"},r=999,u=10},52:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(5),c=n(51),r=function(){return function(e){fetch("".concat(c.a,"posts")).then((function(e){return e.json()})).then((function(t){return e({type:a.c,payload:t})})).catch((function(t){return e({type:a.d,payload:t})}))}},u=function(e){return function(t){e===c.b.id?t({type:a.g,payload:c.b}):fetch("".concat(c.a,"users/").concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:a.g,payload:e})})).catch((function(e){return t({type:a.h,payload:e})}))}},o=function(e){return function(t){fetch("".concat(c.a,"comments?postId=").concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:a.e,payload:e})})).catch((function(e){return t({type:a.f,payload:e})}))}},l=function(e){var t=e.data;return{type:a.a,payload:t}},i=function(e){return{type:a.i,payload:{id:e}}},s=function(e){var t=e.data;return{type:a.b,payload:t}}},53:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(17);n(54);t.a=function(e){var t=e.color,n=e.text,a=e.to,u=e.className,o=e.onClick;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("button",{className:"custom-btn ".concat(u," ").concat(t)},c.a.createElement(r.b,{to:a},n)):c.a.createElement("button",{onClick:o,className:"custom-btn ".concat(t)},n))}},54:function(e,t,n){},55:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,c=!1,r=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},56:function(e,t,n){"use strict";var a=n(0),c=n.n(a);n(57);t.a=function(e){var t=e.data;return c.a.createElement("div",{className:"info"},c.a.createElement("h3",null,t.title),c.a.createElement("p",null,t.body),c.a.createElement("p",null,"#",t.id))}},57:function(e,t,n){},58:function(e,t,n){"use strict";var a=n(0),c=n.n(a);n(59);t.a=function(e){var t=e.onSubmit,n=e.handlerTitle,a=e.handlerBody,r=e.text;return c.a.createElement("form",{className:"form-edit",onSubmit:t},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{autoFocus:!0,onChange:n,id:"title",type:"text",placeholder:"Title...",required:!0})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"text"},"Text"),c.a.createElement("textarea",{onChange:a,id:"text",rows:"10",placeholder:"Text...",required:!0})),c.a.createElement("button",{type:"submit"},r))}},59:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(55),r=n(0),u=n.n(r),o=n(23),l=n(52),i=n(56),s=n(53),m=n(58),f=n(51);n(62);t.default=function(e){var t=e.history,n=e.match.params,d=Object(o.b)(),b=Object(r.useCallback)((function(e){d(Object(l.e)(e))}),[d]),p=Object(r.useCallback)((function(e){d(Object(l.d)(e))}),[d]),h=Object(r.useCallback)((function(e){d(Object(l.f)(e))}),[d]),E=Object(r.useCallback)((function(e){d(Object(l.b)(e))}),[d]),y=Object(o.c)((function(e){return e.posts.posts})),j=Object(o.c)((function(e){return e.users.users})),v=Object(o.c)((function(e){return e.comments.comments})),O=y.find((function(e){return e.id===+n.id})),k=j.find((function(e){return e.id===O.userId})),g=Object(r.useState)(!1),x=Object(c.a)(g,2),C=x[0],N=x[1],S=Object(r.useState)({title:"",body:"",id:+n.id}),T=Object(c.a)(S,2),w=T[0],I=T[1];Object(r.useEffect)((function(){p(n.id)}),[p,n.id]),Object(r.useEffect)((function(){O.userId!==f.c||k?!k&&b(O.userId):b(f.c)}),[b,O.userId,k]);return u.a.createElement("main",{className:"postpage"},u.a.createElement("div",{className:"heading"},u.a.createElement(s.a,{className:"go-back",to:"/posts",color:"black",text:"Go back"}),u.a.createElement("h1",null,"Post #",n.id)),k&&u.a.createElement("section",{className:"user-info"},u.a.createElement("h2",null,"Author"),u.a.createElement("h3",null,"Username - ",k.username),u.a.createElement("h4",null,"Real name - ",k.name),u.a.createElement("p",null,"Email - ",u.a.createElement("a",{href:"mailto:".concat(k.email)},k.email)),u.a.createElement("p",null,"Phone - ",u.a.createElement("a",{href:"tel:".concat(k.phone)},k.phone))),u.a.createElement("section",{className:"post-info"},u.a.createElement(i.a,{data:O}),u.a.createElement("div",{className:"buttons"},u.a.createElement(s.a,{onClick:function(){return N(!C)},color:"blue",text:"Edit"}),u.a.createElement(s.a,{onClick:function(){h(+n.id),t.push("/posts")},color:"red",text:"Delete"}))),C&&u.a.createElement(m.a,{text:"Save",onSubmit:function(e){e.preventDefault(),E({data:w}),N(!C)},handlerTitle:function(e){return I(Object(a.a)({},w,{title:e.target.value}))},handlerBody:function(e){return I(Object(a.a)({},w,{body:e.target.value}))}}),u.a.createElement("section",{className:"comments"},u.a.createElement("h3",null,"Comments"),u.a.createElement("ul",null,v.map((function(e,t){return u.a.createElement("li",{key:t},u.a.createElement("a",{href:"mailto:".concat(e.email)},e.email),u.a.createElement("h4",null,e.name),u.a.createElement("p",null,e.body))})))))}}}]);
//# sourceMappingURL=3.9978d81e.chunk.js.map