(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(8),a=n.n(c),r=(n(14),n(2)),o=n(3),d=n(5),l=n(4),h=n(0),u=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return!(this.props.data===t.data)}},{key:"render",value:function(){for(var t=[],e=this.props.data,n=0;n<e.length;n++)t.push(Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/content/"+e[n].id,"data-id":e[n].id,onClick:function(t){t.preventDefault(),this.props.onChangePage(t.target.dataset.id)}.bind(this),children:e[n].title})},e[n].id));return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:t})})}}]),n}(i.Component),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),this.props.onChangePage()}.bind(this),children:this.props.title})}),this.props.sub]})}}]),n}(i.Component),p=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h1",{children:this.props.title}),this.props.desc]})}}]),n}(i.Component),b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h1",{children:"Create"}),Object(h.jsxs)("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),this.props.onSubmit(t.target.title.value,t.target.desc.value)}.bind(this),children:[Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",name:"title",placeholder:"title"})}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{name:"desc",placeholder:"description"})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit"})})]})]})}}]),n}(i.Component),f=n(9),O=n(6),m=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={id:i.props.data.id,title:i.props.data.title,desc:i.props.data.desc},i.inputFormHandler=i.inputFormHandler.bind(Object(O.a)(i)),i}return Object(o.a)(n,[{key:"inputFormHandler",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h1",{children:"Update"}),Object(h.jsxs)("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc)}.bind(this),children:[Object(h.jsx)("input",{type:"hidden",name:"id",value:this.state.id}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:this.inputFormHandler})}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{onChange:this.inputFormHandler,name:"desc",placeholder:"description",value:this.state.desc})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit"})})]})]})}}]),n}(i.Component),x=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/create",onClick:function(t){t.preventDefault(),this.props.onChangeMode("create")}.bind(this),children:"create"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/update",onClick:function(t){t.preventDefault(),this.props.onChangeMode("update")}.bind(this),children:"update"})}),Object(h.jsx)("li",{children:Object(h.jsx)("input",{onClick:function(t){t.preventDefault(),this.props.onChangeMode("delete")}.bind(this),type:"button",value:"delete"})})]})}}]),n}(i.Component),v=(n(16),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).max_content_id=3,i.state={mode:"welcome",selected_content_id:2,subject:{title:"WEB",sub:"World Wide Web!"},welcome:{title:"Welcome",desc:"Hello, React!!"},contents:[{id:1,title:"HTML",desc:"HTML is for information"},{id:2,title:"CSS",desc:"CSS is for design"},{id:3,title:"JavaScript",desc:"JavaScript is for interactive"}]},i}return Object(o.a)(n,[{key:"getReadContent",value:function(){var t=this;return this.state.contents.find((function(e){return e.id===t.state.selected_content_id}))}},{key:"getContent",value:function(){var t=null,e=null,n=null;if("welcome"===this.state.mode)t=this.state.welcome.title,e=this.state.welcome.desc,n=Object(h.jsx)(p,{title:t,desc:e});else if("read"===this.state.mode){var i=this.getReadContent();n=Object(h.jsx)(p,{title:i.title,desc:i.desc})}else if("create"===this.state.mode)n=Object(h.jsx)(b,{onSubmit:function(t,e){this.max_content_id++;var n=Array.from(this.state.contents);n.push({id:this.max_content_id,title:t,desc:e}),this.setState({contents:n,mode:"read",selected_content_id:this.max_content_id})}.bind(this)});else if("update"===this.state.mode){var s=this.getReadContent();n=Object(h.jsx)(m,{data:s,onSubmit:function(t,e,n){for(var i=Array.from(this.state.contents),s=0;s<i.length;s++)if(i[s].id===t){i[s]={id:t,title:e,desc:n};break}console.log(i),this.setState({contents:i,mode:"read"})}.bind(this)})}return n}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),Object(h.jsx)(u,{onChangePage:function(t){this.setState({mode:"read",selected_content_id:Number(t)})}.bind(this),data:this.state.contents}),Object(h.jsx)(x,{onChangeMode:function(t){if("delete"===t){if(window.confirm("really?")){for(var e=Array.from(this.state.contents),n=0;n<this.state.contents.length;n++)if(e[n].id===this.state.selected_content_id){e.splice(n,1);break}console.log(this.state.mode),this.setState({mode:"welcome",contents:e}),console.log(this.state.mode),alert("deleted!")}}else this.setState({mode:t})}.bind(this)}),this.getContent()]})}}]),n}(i.Component)),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.a981237a.chunk.js.map