(this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]=this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]||[]).push([[0],{17:function(e,t,n){e.exports={button:"ContactsList_button__2sU_q",item:"ContactsList_item__7lITV"}},18:function(e,t,n){e.exports={label:"Label_label__1QMi_",input:"Label_input__3MTvk"}},19:function(e,t,n){e.exports={form:"Form_form__1tK0d",formButton:"Form_formButton__3XW1d"}},22:function(e,t,n){e.exports={input:"FilterInput_input__3QGov"}},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(12),o=n.n(i),u=n(24),b=n(5),l=n(7),s=n(8),m=n(25),j=n(6),O=n(26),d={ADD_TO_CONTACTS:"contacts/add",REMOVE_FROM_CONTACTS:"contacts/remove",SET_FILTER:"contacts/filter"},f=Object(l.b)(d.ADD_TO_CONTACTS),p=Object(l.b)(d.REMOVE_FROM_CONTACTS),_=Object(l.b)(d.SET_FILTER),v={items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},h=Object(l.c)(v.items,(a={},Object(s.a)(a,f,(function(e,t){var n=t.payload,a=Object(j.a)(Object(j.a)({},n),{},{id:Object(O.a)()});return[].concat(Object(m.a)(e),[a])})),Object(s.a)(a,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),x=Object(l.c)(v.filter,Object(s.a)({},_,(function(e,t){return t.payload}))),C=Object(l.a)({reducer:{items:h,filter:x}}),N=(n(36),n(14)),k=n(17),T=n.n(k),A=n(1),g=function(){var e=Object(b.b)(),t=Object(c.useState)([]),n=Object(N.a)(t,2),a=n[0],r=n[1],i=Object(b.c)((function(e){return e.items})),o=Object(b.c)((function(e){return e.filter}));Object(c.useEffect)((function(){var e=i.filter((function(e){var t=e.name.toLowerCase().includes(o.toLowerCase());return t||e.number.includes(o)}));r(e)}),[i,o]);if(0!==a.length){var u=a.map((function(t){var n=t.name,a=t.number;return Object(A.jsxs)("li",{className:T.a.item,children:[n,": ",a,Object(A.jsx)("button",{type:"button",className:T.a.button,id:t.id,onClick:function(){var n;n=t.id,e(p(n))},children:"Delete"},t.id)]},t.id)}));return Object(A.jsx)("ul",{children:u})}return Object(A.jsx)("p",{children:"Nothing found"})},E={name:{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},number:{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"},filter:{type:"tel",name:"filter"}},S=function(e){var t=e.content,n=e.callback,a=e.options,c=e.className;return Object(A.jsx)("input",Object(j.a)(Object(j.a)({},a),{},{value:t,className:c,onChange:n,required:!0}))};S.defaultProps={callback:function(){},options:{}};var y=S,F=n(18),L=n.n(F),M=function(e){var t=e.name,n=e.value,a=e.label,c=e.callback;return Object(A.jsxs)("label",{className:L.a.label,htmlFor:"",children:[a,Object(A.jsx)(y,{options:E[t],className:L.a.input,content:n,callback:c})]})};M.defaultProps={callback:function(){}};var R=M,w=n(19),D=n.n(w),B=function(){var e=Object(c.useState)({name:"",number:""}),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(b.c)((function(e){return e.items})),i=Object(b.b)(),o=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},n,c))}))};return Object(A.jsxs)("form",{className:D.a.form,onSubmit:function(e){var t,c;e.preventDefault(),t=n.name,c=n.number,r.find((function(e){return e.name===t||e.number===c}))?alert("Number is already in contacts"):i(f({name:t,number:c})),a({name:"",number:""})},children:[Object(A.jsx)(R,{label:"Name",name:"name",value:n.name,callback:o}),Object(A.jsx)(R,{label:"Number",name:"number",value:n.number,callback:o}),Object(A.jsx)("button",{className:D.a.formButton,type:"submit",children:"Add contact"})]})},I=n(22),z=n.n(I),J=function(){var e=Object(b.c)((function(e){return e.filter})),t=Object(b.b)();return Object(A.jsx)("input",{value:e,onChange:function(e){var n=e.target.value;t(_(n))},className:z.a.input})},P=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h2",{children:"Phonebook"}),Object(A.jsx)(B,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(J,{}),Object(A.jsx)(g,{})]})};var V=function(){return Object(A.jsx)(b.a,{store:C,children:Object(A.jsx)(u.a,{children:Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(P,{})})})})};o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.10cc7a85.chunk.js.map