(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(0),s=o(1),n=o.n(s),a=o(7),l=o.n(a),i=(o(14),o(3)),d=o(8),r=function(t){var e=t.inputText,o=t.setInputText,s=t.todos,n=t.setTodos,a=t.setStatus;return Object(c.jsxs)("form",{className:"todo-form",children:[Object(c.jsx)("input",{type:"text",value:e,className:"todo-input",onChange:function(t){o(t.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"todo-button",onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(s),[{id:1e3*Math.random(),text:e,completed:!1}])),o("")},children:Object(c.jsx)("i",{className:"fas fa-plus"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{name:"todos",className:"todo-select",onChange:function(t){a(t.target.value)},children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,s=t.todos,n=t.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(c.jsx)("button",{className:"complete-btn",onClick:function(){n(s.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(c.jsx)("i",{className:"far fa-laugh"})}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){n(s.filter((function(t){return t.id!==o.id})))},children:Object(c.jsx)("i",{className:"far fa-dizzy"})})]})},b=function(t){var e=t.todos,o=t.setTodos,s=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.map((function(t){return Object(c.jsx)(j,{text:t.text,todo:t,todos:e,setTodos:o},t.id)}))})})};o(15);var f=function(){var t=Object(s.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],a=Object(s.useState)([]),l=Object(i.a)(a,2),d=l[0],u=l[1],j=Object(s.useState)("all"),f=Object(i.a)(j,2),m=f[0],O=f[1],p=Object(s.useState)([]),x=Object(i.a)(p,2),h=x[0],N=x[1];Object(s.useEffect)((function(){S()}),[]),Object(s.useEffect)((function(){v(),g()}),[d,m]);var v=function(){switch(m){case"completed":N(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":N(d.filter((function(t){return!1===t.completed})));break;default:N(d)}},g=function(){localStorage.setItem("todos",JSON.stringify(d))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"todo-header",children:[Object(c.jsx)("h1",{className:"wanna",children:"Wanna-Do"}),Object(c.jsx)("h1",{className:"to-do",children:"To-Do"}),Object(c.jsx)("h1",{className:"list",children:"List"})]}),Object(c.jsx)(r,{setStatus:O,todos:d,setTodos:u,inputText:o,setInputText:n}),Object(c.jsx)(b,{todos:d,setTodos:u,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),s(t),n(t),a(t)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3e8fac1.chunk.js.map