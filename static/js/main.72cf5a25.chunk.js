(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(9),r=n.n(i),o=(n(15),n(16),n(17),n(10)),a=n(6),l=n(0),u=function(t){return Object(l.jsxs)("li",{className:"border d-flex justify-content-between align-items-center p-2 m-2",children:[Object(l.jsx)("div",{className:"p-3",children:t.txt}),Object(l.jsx)("button",{onClick:function(){return t.delFunc(t.id)},className:"btn btn-danger p-2",children:"Supprimer"})]})},d=n(3),b=function(){var t=Object(c.useState)([{txt:"Se balader sur Paris",id:Object(d.v4)()},{txt:"Coder en React",id:Object(d.v4)()},{txt:"Faire du sport",id:Object(d.v4)()}]),e=Object(a.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(),r=Object(a.a)(i,2),b=r[0],j=r[1],m=function(t){var e=n.filter((function(e){return e.id!==t}));s(e)};return Object(l.jsxs)("div",{className:"m-auto px-4 col-12 col-sm-10 col-lg-6",children:[Object(l.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(t);var e=Object(o.a)(n),c={};c.txt=b,c.id=Object(d.v4)(),e.push(c),s(e),j("")}(t)},className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"todo",className:"form-label mt-3",children:"Choses \xe0 faire"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:b,id:"todo",onInput:function(t){return function(t){j(t)}(t.target.value)}}),Object(l.jsx)("button",{className:"mt-2 btn btn-primary d-block",children:"Envoyer"})]}),Object(l.jsx)("h2",{children:"Liste des choses \xe0 faire"}),Object(l.jsx)("ul",{className:"list-group",children:n.map((function(t){return Object(l.jsx)(u,{txt:t.txt,id:t.id,delFunc:m},t.id)}))})]})};var j=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"text-center mt-3",children:"ToDo-List"}),Object(l.jsx)(b,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.72cf5a25.chunk.js.map