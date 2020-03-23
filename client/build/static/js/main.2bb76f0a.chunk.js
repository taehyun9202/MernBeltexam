(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),s=(a(23),a(24),a(3)),i=a(1),o=a(4),m=a.n(o),p=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pets").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"columns",style:{padding:"40px"}},l.a.createElement("div",{className:"column"},l.a.createElement(s.a,{to:"/new",className:"subtitle"},l.a.createElement("a",null,"Add a pet to the Shelter!")),l.a.createElement("div",{class:"table-container"},l.a.createElement("table",{class:"table is-fullwidth"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),c.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(s.a,{to:"/info/"+e._id},"Details"),"\xa0|\xa0",l.a.createElement(s.a,{to:"/edit/"+e._id},"Edit")))}))))))},u=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),p=Object(i.a)(o,2),u=p[0],d=p[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),g=E[0],y=E[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),j=f[0],O=f[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),k=x[0],N=x[1],S=Object(n.useState)(""),B=Object(i.a)(S,2),w=B[0],C=B[1],_=Object(n.useState)(0),D=Object(i.a)(_,2),A=D[0],T=(D[1],Object(n.useState)({})),P=Object(i.a)(T,2),I=P[0],J=P[1];return l.a.createElement("article",{className:"message is-primary",style:{padding:"40px"}},l.a.createElement("h1",{className:"title"},"Know a pet needing a home?"),l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Add Pet")),l.a.createElement("div",{className:"message-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:c,type:u,description:g,skill1:j,skill2:k,skill3:w,like:A};m.a.post("http://localhost:8000/api/pets",t).then((function(e){e.data.errors?J(e.data.errors):Object(s.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Name",onChange:function(e){return r(e.target.value)}}),!I.name||l.a.createElement("p",{class:"help is-danger"},I.name.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Type",onChange:function(e){return d(e.target.value)}}),!I.type||l.a.createElement("p",{class:"help is-danger"},I.type.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Description",onChange:function(e){return y(e.target.value)}}),!I.description||l.a.createElement("p",{class:"help is-danger"},I.description.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 1",onChange:function(e){return O(e.target.value)}}),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 2",onChange:function(e){return N(e.target.value)}}),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 3",onChange:function(e){return C(e.target.value)}}),l.a.createElement("button",{type:"submit",style:{width:"100%"},className:"button is-primary"},"Add Pet"))))},d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),p=Object(i.a)(o,2),u=p[0],d=p[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),g=E[0],y=E[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),j=f[0],O=f[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),k=x[0],N=x[1],S=Object(n.useState)(""),B=Object(i.a)(S,2),w=B[0],C=B[1],_=Object(n.useState)(0),D=Object(i.a)(_,2),A=D[0],T=D[1],P=Object(n.useState)({}),I=Object(i.a)(P,2),J=I[0],L=I[1];Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e.data),r(e.data.name),d(e.data.type),y(e.data.description),O(e.data.skill1),N(e.data.skill2),C(e.data.skill3),T(e.data.like)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("article",{className:"message is-primary",style:{padding:"40px"}},l.a.createElement("h1",{className:"title"},"Edit Pet"),l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Update Pet Info")),l.a.createElement("div",{className:"message-body"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={name:c,type:u,description:g,skill1:j,skill2:k,skill3:w,like:A};m.a.put("http://localhost:8000/api/pets/".concat(e._id),a).then((function(e){e.data.errors?L(e.data.errors):Object(s.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Name",onChange:function(e){return r(e.target.value)},value:c}),!J.name||l.a.createElement("p",{class:"help is-danger"},J.name.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Type",onChange:function(e){return d(e.target.value)},value:u}),!J.type||l.a.createElement("p",{class:"help is-danger"},J.type.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Description",onChange:function(e){return y(e.target.value)},value:g}),!J.description||l.a.createElement("p",{class:"help is-danger"},J.description.message),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 1",onChange:function(e){return O(e.target.value)},value:j}),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 2",onChange:function(e){return N(e.target.value)},value:k}),l.a.createElement("input",{type:"text",className:"input is-primary",style:{marginBottom:"10px"},placeholder:"Enter Skill 3",onChange:function(e){return C(e.target.value)},value:w}),l.a.createElement("button",{type:"submit",style:{width:"100%"},className:"button is-primary"},"Update!"))))},h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),p=Object(i.a)(o,2),u=p[0],d=p[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),g=E[0],y=E[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),j=f[0],O=f[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),k=x[0],N=x[1],S=Object(n.useState)(""),B=Object(i.a)(S,2),w=B[0],C=B[1],_=Object(n.useState)(0),D=Object(i.a)(_,2),A=D[0],T=D[1];Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e.data),r(e.data.name),d(e.data.type),y(e.data.description),O(e.data.skill1),N(e.data.skill2),C(e.data.skill3),T(e.data.like)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("article",{className:"message is-primary",style:{padding:"40px"}},l.a.createElement("h1",{className:"title"},"Deatils about: ",c),l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,c," Info")),l.a.createElement("div",{className:"message-body"},l.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}},l.a.createElement("h1",{style:{paddingBottom:"10px"}},"Pet Type:"),l.a.createElement("h1",{style:{paddingBottom:"10px"}},"Descrption:"),l.a.createElement("h1",{style:{paddingBottom:"10px"}},"Skills:")),l.a.createElement("div",{style:{display:"inline-block",paddingLeft:"40px"}},l.a.createElement("h1",{style:{paddingBottom:"10px"}},u),l.a.createElement("h1",{style:{paddingBottom:"10px"}},g),l.a.createElement("div",{style:{paddingBottom:"10px"}},l.a.createElement("h1",null,j),l.a.createElement("h1",null,k),l.a.createElement("h1",null,w))),l.a.createElement("div",{style:{paddingTop:"20px"}},l.a.createElement("button",{onClick:function(t){return a=e._id,void m.a.delete("http://localhost:8000/api/pets/".concat(a)).then((function(e){Object(s.c)("/")})).catch((function(e){return console.log(e)}));var a},style:{marginRight:"20px"},className:"button is-primary is-outlined"},"Adopt ",c),l.a.createElement("button",{style:{marginRight:"20px"},onClick:function(t){return function(t){T(A+1);var a={name:c,type:u,description:g,skill1:j,skill2:k,skill3:w,like:A};m.a.put("http://localhost:8000/api/pets/".concat(e._id),a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))}()},className:"button is-primary is-outlined"},"Like ",c),l.a.createElement("h1",{style:{display:"inline-block",marginTop:"7px"}},A," like(s)"))))};var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"hero is-primary"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{to:"/"},l.a.createElement("a",{style:{textDecoration:"underline"},className:"title"},"Pet Shelter")),l.a.createElement("h2",{className:"subtitle"},"These pets are looking for a good home!")))),l.a.createElement(s.b,null,l.a.createElement(p,{path:"/"}),l.a.createElement(u,{path:"/new"}),l.a.createElement(d,{path:"/edit/:_id"}),l.a.createElement(h,{path:"/info/:_id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2bb76f0a.chunk.js.map