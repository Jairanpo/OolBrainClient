(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,t,n){"use strict";var o={name:"Up",props:["url"]},r=n(27),component=Object(r.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-row",[t("b-col",{staticClass:"mt-3"},[t("b-button",{attrs:{variant:"light",href:this.url}},[t("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}}),this._v(" Back\n      ")],1)],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},184:function(e,t,n){var content=n(188);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("e7474c3e",content,!0,{sourceMap:!1})},185:function(e,t,n){"use strict";var o={name:"InfoButton",props:["unfold"],data:function(){return{status:!1}},methods:{unfold_toggle:function(){this.status?(this.status=!1,this.$emit("status_toggle",!1)):(this.status=!0,this.$emit("status_toggle",!0))}}},r=n(27),component=Object(r.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-button",{attrs:{variant:"light"},on:{click:this.unfold_toggle}},[this._v("\n    Info\n    "),this.status?t("font-awesome-icon",{attrs:{icon:["fas","angle-up"]}}):t("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}})],1)],1)},[],!1,null,null,null);t.a=component.exports},186:function(e){e.exports=JSON.parse('{"Root":{"name":"Root","level":0,"description":{"show":false,"text":"Projects directory in the storage (Z:\\\\Projects)."},"subfolders":{"show":false,"children":{"brand":{"name":"Brand","link":""}}}},"Brand":{"name":"Brand","level":1,"description":{"show":false,"text":"Name of the brand that requested the project."},"subfolders":{"show":false,"children":{"assets_library":{"name":"Assets Library","link":""}},"projects":{"name":"Project","link":""}}},"assets_library":{"name":"Assets Library","level":2,"description":{"show":false,"text":"This is a special directory only for projects with episodic-like structure or projects that share assets between them.\\n In those cases, this directory will help us to avoid data duplication."},"subfolders":{"show":false,"children":{"characters":{"name":"Characters","link":""},"environments":{"name":"Environments","link":""},"fx":{"name":"FX","link":""},"graphics":{"name":"Graphics","link":""},"props":{"name":"Props","link":""},"setdressing":{"name":"SetDressing","link":""},"vehicles":{"name":"Vehicles","link":""},"more":{"name":"more +","link":"/pipeline/assets"}}}},"Campaign":{"name":"Campaign","level":2,"description":{"show":false,"text":"Campaign name that will comprehend one or many project to develop"},"subfolders":{"show":false,"children":{"assets":{"name":"Assets +","link":"/pipeline/assets"},"project":{"name":"Project","link":""},"sources":{"name":"Sources","link":""},"client":{"name":"Client","link":""},"creative":{"name":"Creative","link":""},"final":{"name":"Final","link":""},"production":{"name":"Production","link":""}}}},"assets":{"name":"Assets","level":3,"description":{"show":false,"text":"This directory will store the assets that are required for the project."},"subfolders":{"show":false,"children":{"characters":{"name":"Characters","link":""},"environments":{"name":"Environments","link":""},"fx":{"name":"FX","link":""},"graphics":{"name":"Graphics","link":""},"props":{"name":"Props","link":""},"setdressing":{"name":"SetDressing","link":""},"vehicles":{"name":"Vehicles","link":""},"more":{"name":"more +","link":"/pipeline/assets"}}}},"production":{"name":"Production","level":3,"description":{"show":false,"text":"Production and project manager documents and files, as part of the production department, this is the place where you can save your data."},"subfolders":{"show":false,"children":{"users":{"name":"Users","link":""}}}},"sources":{"name":"Sources","level":3,"description":{"show":false,"text":"Audio files required by the sequence"},"subfolders":{"show":false,"children":{"audio":{"name":"Audio","link":""},"footage":{"name":"Footage","link":""}}}},"client":{"name":"Client","level":3,"description":{"show":false,"text":"Files that the client provide."},"subfolders":{"show":false,"children":{"brief":{"name":"01_Brief","link":""},"ref":{"name":"02_References","link":""},"time":{"name":"03_Timetable","link":""},"src":{"name":"04_Sources","link":""},"feed":{"name":"05_Feedback","link":""},"meet":{"name":"06_Meetings","link":""}}}},"reviews":{"name":"Reviews","level":3,"description":{"show":false,"text":"Scheduled files to sent for client approval."},"subfolders":{"show":false,"children":{"project":{"name":"Project Name","link":""}}}},"Projects":{"name":"Projects","level":3,"description":{"show":false,"text":"Name of the project, this folder name should be unique and clear about what the project is about"},"subfolders":{"show":false,"children":{"audio":{"name":"Audio","link":""},"prep":{"name":"Pre-production","link":""},"sequence":{"name":"Sequence +","link":"/pipeline/sequence"}}}},"Project":{"name":"Project Name","level":4,"description":{"show":false,"text":"Name of the project, this folder name should be unique and clear about what the project is about"},"subfolders":{"show":false,"children":{"audio":{"name":"Audio","link":""},"sequence":{"name":"Sequence +","link":"/pipeline/sequence"}}}},"prep":{"name":"Pre-production","level":5,"description":{"show":false,"text":"Pre-production material"},"subfolders":{"show":false,"children":{"story":{"name":"Storyboard","link":""},"concept":{"name":"ConceptDesign","link":""},"mood":{"name":"MoodBoard","link":""},"anim":{"name":"Animatic","link":""}}}},"audio":{"name":"Audios","level":5,"description":{"show":false,"text":"Pre-production material"},"subfolders":{"show":false,"children":{"music":{"name":"Music","link":""},"locution":{"name":"Locution","link":""},"sfx":{"name":"SFX","link":""},"mix":{"name":"MASTER","link":""}}}},"sequence":{"name":"Sequence","level":5,"description":{"show":false,"text":"Shots data will be stored here"},"subfolders":{"show":false,"children":{"sequence":{"name":"more +","link":"/pipeline/sequence"}}}},"shots":{"name":"(Shots): SHT010, SHT020...","level":6,"description":{"show":false,"text":"Shots data will be stored here"},"subfolders":{"show":false,"children":{"shots":{"name":"more +","link":"/filesystem/shots"}}}}}')},187:function(e,t,n){"use strict";var o=n(184);n.n(o).a},188:function(e,t,n){(e.exports=n(36)(!1)).push([e.i,".subfolder:hover{background:#3dc2ff;color:#fff}.sub-grp{margin:0;padding:0}.col-centered{display:block;margin-left:auto;margin-right:auto;text-align:center}",""])},189:function(e,t,n){"use strict";n.r(t);var o=n(186),r=n(181),l=n(185),c={asyncData:function(e){e.params;return{folders:o}},components:{Back:r.a,InfoButton:l.a},methods:{set_margin:function(e){return"margin-left:"+String(2*e)+"vw"},show_info_toggle:function(e,t){t.description.show=e}}},d=(n(187),n(27)),component=Object(d.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("Back",{attrs:{url:"/home"}}),e._v(" "),n("b-row",[n("b-col",[n("h1",{staticClass:"mt-3"},[e._v("Filesystem:")]),e._v(" "),n("p",{staticClass:"mt-3 text-justify"},[e._v("\n          This document will aid you in finding your way around folders, so that you have a clear idea on\n          how to move inside the storage and correctly save your work in progress or published files.\n        ")])])],1),e._v(" "),n("b-row",{staticClass:"mb-5"},[n("b-col",[n("b-list-group",e._l(e.folders,function(t){return n("div",{key:t.id},[n("b-list-group-item",{style:e.set_margin(t.level)},[n("b-row",[n("b-col",[n("h4",[e._v(e._s(t.name))])]),e._v(" "),n("b-col",[n("InfoButton",{on:{status_toggle:function(n){return e.show_info_toggle(n,t)}}})],1)],1),e._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("b-list-group",[n("b-list-group-item",{directives:[{name:"show",rawName:"v-show",value:t.description.show,expression:"item.description.show"}],staticClass:"mx-3",attrs:{variant:"dark"}},[n("b-list-group-item",[n("p",{staticClass:"text-justify",domProps:{innerHTML:e._s(t.description.text)}}),e._v(" "),e._l(t.subfolders.children,function(t){return n("b-list-group",{key:t.id},[n("b-list-group-item",{staticClass:"mx-5 px-5"},[""==t.link?n("div",{staticClass:"text-left"},[e._v(e._s(t.name))]):n("div",[n("nuxt-link",{staticClass:"btn btn-info btn-block subfolder text-left",attrs:{to:t.link}},[e._v(e._s(t.name))])],1)])],1)})],2)],1)],1)],1)],1)],1)],1)}),0)],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);