(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{43:function(n,t,e){},52:function(n,t,e){"use strict";e.r(t);var i=e(2),a=e(0),r=e.n(a),s=e(12),c=e.n(s),o=(e(43),e(13)),b=e(14);function x(){var n=Object(o.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #535557;\n  height: 100vh;\n  width: calc(100vw - 80px);\n  margin-left: 80px;\n  h1 {\n    color: #fff;\n    font-size: 80px;\n    line-height: 0.9em;\n    display: flex;\n    flex-direction: column;\n    span:last-child {\n      margin-left: 70px;\n    }\n  }\n\n  .fade-enter {\n    opacity: 0;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 450ms ease-in;\n  }\n  .fade-exit {\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transition: opacity 300ms ease-in;\n  }\n"]);return x=function(){return n},n}var p=b.a.div(x()),d=e(29),u=e(30),h=e(35),f=e(34),l=e(11);function j(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  height: 45px;\n  width: 45px;\n  border-radius: 8px;\n  margin: 15px 0;\n  border-radius: 8px;\n  border-radius: 8px;\n  border-radius: 8px;\n  background: #333333;\n  box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;\n  animation-fill-mode: forwards;\n  animation-duration: .4s;\n  animation-iteration-count: 1;\n  \n  @keyframes shadowInset {\n    0% {\n      box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;     \n    }\n\n    50% {\n      box-shadow: 0px 0px 0px #2b2b2b, 0px 0px 0px #3b3b3b;\n    }\n\n    51% {\n      box-shadow: inset 0px 0px 0px #2b2b2b, inset 0px 0px 0px #3b3b3b;\n    }\n\n    100% {\n      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b;\n    }\n  }\n\n  @keyframes shadowOuter {\n    0% {\n      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b;\n    }\n\n    50% {\n      box-shadow: inset 0px 0px 0px #2b2b2b, inset 0px 0px 0px #3b3b3b;\n    }\n\n    51% {\n      box-shadow: 0px 0px 0px #2b2b2b, 0px 0px 0px #3b3b3b;\n    }\n\n    100% {\n      box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;\n    }\n  }\n"]);return j=function(){return n},n}function m(){var n=Object(o.a)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #333;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 80px;\n  box-shadow: 0 6px 12px #2b2b2b;\n    .active {\n      &>div {\n        box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b; \n        animation-play-state: paused;\n      }\n    }\n  }\n  a {\n    text-decoration: none;\n    width: fit-content;\n  }\n  "," {\n    &>div {\n      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b; \n      animation-name: shadowOuter;\n      animation-play-state:running;\n    }\n  }\n  ",".active {\n    &>div {\n      animation-name: shadowInset;\n      animation-play-state:running;\n    }\n  }\n\n"]);return m=function(){return n},n}var v=b.a.nav(m(),(function(n){var t=n.teste;n.current;return"#a".concat(t)}),(function(n){n.teste;var t=n.current;return"#a".concat(t)})),O=b.a.div(j()),y=e(31),w=e.n(y),g=e(32),k=e.n(g),S=e(33),F=e.n(S),L=function(n){Object(h.a)(e,n);var t=Object(f.a)(e);function e(n){var i;return Object(d.a)(this,e),(i=t.call(this,n)).state={before:"",current:"",teste:"",isFirstLoad:!0},i.references=Array(3).fill(0).map((function(){return r.a.createRef()})),i}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.state.current!==this.state.before&&(this.setState({teste:this.state.before}),this.setState({before:this.state.current})),this.references.map((function(t,e){t.current.classList.contains("active")&&n.setState({current:"".concat(e+1)})}))}},{key:"componentDidUpdate",value:function(){this.state.current!==this.state.before&&(this.setState({teste:this.state.before}),this.setState({before:this.state.current}))}},{key:"render",value:function(){var n=this;return Object(i.jsxs)(v,{teste:this.state.isFirstLoad?"":this.state.teste,current:this.state.isFirstLoad?"":this.state.current,children:[console.log(this.state.isFirstLoad),Object(i.jsx)(l.b,{to:"/",ref:this.references[0],activeClassName:"active",id:"a1",onClick:function(){return n.setState({current:"1",isFirstLoad:!1})},exact:!0,children:Object(i.jsx)(O,{children:Object(i.jsx)(w.a,{})})}),Object(i.jsx)(l.b,{to:"/teste",ref:this.references[1],activeClassName:"active",id:"a2",onClick:function(){return n.setState({current:"2",isFirstLoad:!1})},children:Object(i.jsx)(O,{children:Object(i.jsx)(k.a,{})})}),Object(i.jsx)(l.b,{to:"/projects",ref:this.references[2],activeClassName:"active",id:"a3",onClick:function(){return n.setState({current:"3",isFirstLoad:!1})},children:Object(i.jsx)(O,{children:Object(i.jsx)(F.a,{})})})]})}}]),e}(r.a.Component);function C(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]);return C=function(){return n},n}var N=b.a.div(C()),I=e(4);var J=function(n){return Object(I.f)(),Object(i.jsx)(N,{children:Object(i.jsx)("h1",{children:n.nome})})};var D=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h2",{children:"Teste"})})},M=e(66),z=e(65);var A=function(){return Object(i.jsx)(p,{children:Object(i.jsxs)(l.a,{basename:"/portfolio",children:[Object(i.jsx)(L,{}),Object(i.jsx)(I.a,{render:function(n){var t=n.location;return Object(i.jsx)(M.a,{children:Object(i.jsx)(z.a,{timeout:450,classNames:"fade",children:Object(i.jsxs)(I.c,{location:t,children:[Object(i.jsx)(I.a,{exact:!0,path:"/",children:Object(i.jsx)(J,{nome:"Jo\xe3o"})}),Object(i.jsx)(I.a,{exact:!0,path:"/teste",children:Object(i.jsx)(J,{nome:"teste"})}),Object(i.jsx)(I.a,{exact:!0,path:"/projects",component:D})]})},t.key)})}})]})})};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4e7b9c36.chunk.js.map