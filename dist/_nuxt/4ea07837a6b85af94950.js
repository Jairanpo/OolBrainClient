(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{email:"",pass_1:"",pass_2:"",passwords_show:!1,passwords_match:!1,password_status_message:""}},watch:{pass_1:function(){this.passwords_update()},pass_2:function(){this.passwords_update()}},methods:{passwords_update:function(){""===this.pass_1||""===this.pass_2?(this.passwords_show=!0,this.passwords_status_message="Please provide both passwords"):this.pass_1===this.pass_2?(this.passwords_status_message="Passwords match",this.passwords_match=!0):(this.passwords_status_message="Passwords do not match",this.passwords_match=!1)}}},_=o(27),component=Object(_.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"mt-5"},[o("h1",[t._v("Login:")]),t._v(" "),o("b-form",[o("b-form-input",{staticClass:"col-md-6 col-centered",attrs:{type:"email",required:"",placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("b-form-input",{staticClass:"col-md-6 col-centered",attrs:{type:"password",required:"",placeholder:"Type your password"},model:{value:t.pass_1,callback:function(e){t.pass_1=e},expression:"pass_1"}}),t._v(" "),o("b-form-input",{staticClass:"col-md-6 col-centered",attrs:{type:"password",required:"",placeholder:"Confirm your password"},on:{change:function(t){}},model:{value:t.pass_2,callback:function(e){t.pass_2=e},expression:"pass_2"}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.passwords_show,expression:"passwords_show"}],staticClass:"col-md-6 col-centered"},[t.passwords_match?o("div",{staticClass:"text-success"},[o("div",[t._v(t._s(t.passwords_status_message))])]):o("div",{staticClass:"text-danger"},[o("div",[t._v(t._s(t.passwords_status_message))])])]),t._v(" "),o("b-button",{staticClass:"col-md-6 col-centered"},[t._v("Submit")]),t._v(" "),o("pre",[t._v("      email: "+t._s(t.email)+"\n      pass_1: "+t._s(t.pass_1)+"\n      pass_2: "+t._s(t.pass_2)+"\n      password_show: "+t._s(t.passwords_show)+"\n      passwords_match: "+t._s(t.passwords_match)+"\n      passwords_status_message: "+t._s(t.passwords_status_message)+"\n  ")])],1)},[],!1,null,null,null);e.default=component.exports}}]);