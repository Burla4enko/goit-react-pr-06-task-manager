(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{15:function(e,t,c){e.exports={btn:"Button_btn__3xaJM",isSelected:"Button_isSelected__2JVMn"}},16:function(e,t,c){e.exports={form:"TaskForm_form__1kzwH",field:"TaskForm_field__8trCg"}},17:function(e,t,c){e.exports={list:"TaskList_list__2xVr5",listItem:"TaskList_listItem__XeAAN"}},18:function(e,t,c){e.exports={text:"TaskCounter_text__3WbH2"}},27:function(e,t,c){e.exports={container:"Layout_container__1nNA4"}},31:function(e,t,c){e.exports={wrapper:"StatusFilter_wrapper__1VEdi"}},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(24),r=c.n(s),i=c(2),l=(c(49),c(27)),o=c.n(l),d=c(1),u=function(e){var t=e.children;return Object(d.jsx)("main",{className:o.a.container,children:t})},p=c(3),j=c(11),b=c(28),x=c(29),m=c(15),f=c.n(m),O=["selected","type","children"],h=function(e){var t=e.selected,c=void 0!==t&&t,a=e.type,n=void 0===a?"button":a,s=e.children,r=Object(b.a)(e,O);return Object(d.jsx)("button",Object(p.a)(Object(p.a)({className:Object(x.a)(f.a.btn,Object(j.a)({},f.a.isSelected,c)),type:n},r),{},{children:s}))},_=c(16),k=c.n(_),v=c(30),y=function(){var e=Object(i.b)();return Object(d.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var c,a=t.target;e((c=a.elements.text.value,{type:"tasks/addTask",payload:{id:Object(v.a)(),completed:!1,text:c}})),a.reset()},children:[Object(d.jsx)("input",{className:k.a.field,type:"text",name:"text",placeholder:"Enter task text..."}),Object(d.jsx)(h,{type:"submit",children:"Add task"})]})},N=c(35),w=c(8),T=c.n(w),g=function(e){var t=e.task,c=Object(i.b)();return Object(d.jsxs)("div",{className:T.a.wrapper,children:[Object(d.jsx)("input",{type:"checkbox",className:T.a.checkbox,checked:t.completed,onChange:function(){return c({type:"tasks/toggleCompleted",payload:t.id})}}),Object(d.jsx)("p",{className:T.a.text,children:t.text}),Object(d.jsx)("button",{type:"button",className:T.a.btn,onClick:function(){return c({type:"tasks/deleteTask",payload:t.id})},children:Object(d.jsx)(N.a,{size:24})})]})},C=c(17),S=c.n(C),A=Object.freeze({all:"all",active:"active",completed:"completed"}),B=function(e){return e.tasks},J=function(e){return e.filters.status},F=function(){var e=function(e,t){switch(t){case A.active:return e.filter((function(e){return!e.completed}));case A.completed:return e.filter((function(e){return e.completed}));default:return e}}(Object(i.c)(B),Object(i.c)(J));return Object(d.jsx)("ul",{className:S.a.list,children:e.map((function(e){return Object(d.jsx)("li",{className:S.a.listItem,children:Object(d.jsx)(g,{task:e})},e.id)}))})},z=c(31),I=c.n(z),L=function(){var e=Object(i.b)(),t=Object(i.c)(J),c=function(t){return e({type:"filters/setStatusFilter",payload:t})};return Object(d.jsxs)("div",{className:I.a.wrapper,children:[Object(d.jsx)(h,{selected:t===A.all,onClick:function(){return c(A.all)},children:"All"}),Object(d.jsx)(h,{selected:t===A.active,onClick:function(){return c(A.active)},children:"Active"}),Object(d.jsx)(h,{selected:t===A.completed,onClick:function(){return c(A.completed)},children:"Completed"})]})},M=c(18),H=c.n(M),E=function(){var e=Object(i.c)(B).reduce((function(e,t){return t.completed?e.completed+=1:e.active+=1,e}),{active:0,completed:0});return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:H.a.text,children:["Active: ",e.active]}),Object(d.jsxs)("p",{className:H.a.text,children:["Completed: ",e.completed]})]})},R=c(6),V=c.n(R),D=function(){return Object(d.jsxs)("header",{className:V.a.wrapper,children:[Object(d.jsxs)("section",{className:V.a.section,children:[Object(d.jsx)("h2",{className:V.a.title,children:"Tasks"}),Object(d.jsx)(E,{})]}),Object(d.jsxs)("section",{className:V.a.section,children:[Object(d.jsx)("h2",{className:V.a.title,children:"Filter by status"}),Object(d.jsx)(L,{})]})]})},q=function(){return Object(d.jsxs)(u,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(y,{}),Object(d.jsx)(F,{})]})},G=c(4),U=c(32),W=c(10),X=[{id:0,text:"Learn HTML and CSS",completed:!0},{id:1,text:"Get good at JavaScript",completed:!0},{id:2,text:"Master React",completed:!1},{id:3,text:"Discover Redux",completed:!1},{id:4,text:"Build amazing apps",completed:!1}],K={status:A.all},P=Object(G.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tasks/addTask":return[].concat(Object(W.a)(e),[t.payload]);case"tasks/deleteTask":return e.filter((function(e){return e.id!==t.payload}));case"tasks/toggleCompleted":return e.map((function(e){return e.id!==t.payload?e:Object(p.a)(Object(p.a)({},e),{},{completed:!e.completed})}));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return"filters/setStatusFilter"===t.type?Object(p.a)(Object(p.a)({},e),{},{status:t.payload}):e}}),Q=Object(U.a)(),Y=Object(G.c)(P,Q);c(55);r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(i.a,{store:Y,children:Object(d.jsx)(q,{})})}))},6:function(e,t,c){e.exports={wrapper:"AppBar_wrapper__21lfN",section:"AppBar_section__3Iy4s",title:"AppBar_title__JfHv9"}},8:function(e,t,c){e.exports={wrapper:"Task_wrapper__1Un4J",text:"Task_text__7szr-",btn:"Task_btn__2cnNo",checkbox:"Task_checkbox__1kBaq"}}},[[56,1,2]]]);
//# sourceMappingURL=main.0c7345c7.chunk.js.map