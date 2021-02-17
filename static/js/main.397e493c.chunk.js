(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(12),a=c.n(r),l=(c(22),c(23),c(24),c.p,c(25),c(0));var i=function(e){return Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an employee",id:"search"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})};var o=function(e){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:"Image"}),Object(l.jsx)("div",{className:"col",children:"Name"}),Object(l.jsx)("div",{className:"col",children:"Phone"}),Object(l.jsx)("div",{className:"col",children:"Email"}),Object(l.jsx)("div",{className:"col",children:"DOB"})]})},h=c(13),u=c(14),j=c(17),m=c(16);var d=function(e){return Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}}),Object(l.jsxs)("h3",{children:["Image: ",e.image]}),Object(l.jsxs)("h3",{children:["Name: ",e.name]}),Object(l.jsxs)("h3",{children:["Phone: ",e.phone]}),Object(l.jsxs)("h3",{children:["Email: ",e.email]}),Object(l.jsxs)("h3",{children:["DOB: ",e.dob]})]})},b=c(15),O=c.n(b),x=function(){return O.a.get("https://randomuser.me/api/?results=100")},p=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={result:{},search:""},e.searchEmployee=function(){x().then((function(t){e.setState({result:t.data}),console.log(t.data)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.searchEmployee()}},{key:"renderEmployeeSearchResult",value:function(){return this.state.result.Name?Object(l.jsx)(d,{img:this.state.result.Image,name:this.state.result.Name,phone:this.state.result.Phone,email:this.state.result.Email,dob:this.state.result.DOB}):Object(l.jsx)("h3",{children:" No such employee was found."})}},{key:"render",value:function(){return""}}]),c}(n.Component);var f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"display-4 text-center mt-3",children:"Employee Directory"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{className:"lead text-center mt-3",children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})}),Object(l.jsx)(i,{}),Object(l.jsx)(o,{}),Object(l.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.397e493c.chunk.js.map