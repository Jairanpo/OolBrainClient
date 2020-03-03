(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(e,t,n){"use strict";var o={name:"InfoButton",props:["unfold"],data:function(){return{status:!1}},methods:{unfold_toggle:function(){this.status?(this.status=!1,this.$emit("status_toggle",!1)):(this.status=!0,this.$emit("status_toggle",!0))}}},r=n(27),component=Object(r.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-button",{attrs:{variant:"light"},on:{click:this.unfold_toggle}},[this._v("\n    Info\n    "),this.status?t("font-awesome-icon",{attrs:{icon:["fas","angle-up"]}}):t("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}})],1)],1)},[],!1,null,null,null);t.a=component.exports},194:function(e,t,n){"use strict";n.r(t);var o={components:{InfoButton:n(185).a},data:function(){return{title:"Shots Directory",image:"/img/filesystem/shots.png",description:'\n            <div>\n            <p>\n                This folder holds the shots that compose a sequence, the name \n                of each shot is composed by a two character code and three digits, for example:\n                    - SH010<br>\n                    - WV030<br>\n                    - MT000<br>\n            <br>       \n                There is a special shot with the "000" digit sequence in its nomenclature, \n                this shot is a multiporpuse folder, here previs artist can work on a \n                sequence as a whole before splitting their work into individual shots.\n            <br><br>\n                Each shot contain pipeline steps subfolders. \n                Below, you can find more information about this folders, click on the dropdown to learn more about their contents.\n            </p>\n            </div>',subfolders:{audio:{info:!1,title:"00_Audio",link:"",description:"<p>\n                Required audio file for the shot.\n            </p>"},previs:{info:!1,title:"01_Previs",link:"/pipeline/sequence/previs",description:"<p>\n                Camera and staging. <br>\n                After pre-production is done, previs kickstart the production process.\n            </p>"},animation:{info:!1,title:"02_Animation",link:"/pipeline/sequence/animation",description:"<p>\n                Motion design for characters, props or graphics. <br>\n                - Usually require configured 3D objects for animation from the rigging department.\n            </p>"},vfx:{info:!1,title:"03_VFX",link:"/pipeline/sequence/vfx",description:"<p>\n                Simulations or effects that the product will require and that <br>\n                are hard to producte by regular keyframe animation.\n            </p>"},layout:{info:!1,title:"04_Layout",link:"/pipeline/sequence/layout",description:"<p>\n                Scene assembly, set dressing and light rigs.\n            </p>"},lighting:{info:!1,title:"05_Lighting",link:"/pipeline/sequence/lighting",description:"<p>\n                Scene lighting shot by shot.\n            </p>"},render:{info:!1,title:"06_Render",link:"/pipeline/sequence/render",description:"<p>\n                Render passes images processed in CPU or GPU.\n            </p>"},compositing:{info:!1,title:"07_Compositing",link:"/pipeline/sequence/compositing",description:"<p>\n                Render passes composition.\n            </p>"}},workarea:{playground:{info:!1,title:"Playground",description:"<p>\n                Area for work that is currently on progress, each artist have their own playground,\n                <b>this is a free space</b> where you can have files on your own terms, just be mindful of storage\n                usage and delete whatever deprecated data you have.\n              </p>"},publish:{info:!1,title:"Publish",description:"<p>\n                Publication of version for revision and pipeline flow.\n                <b>This is not a free space</b>, before putting data here, there are guidelines\n                to be aware of, if you have any doubt please refer to technical support for\n                information about how to save your work.\n              </p>"}}}},methods:{show_info_toggle:function(e,t){t.info=e}}},r=n(27),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"my-5"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("b-row",[n("b-col",{attrs:{sm:"12",xs:"12",md:"6"}},[n("div",{domProps:{innerHTML:e._s(e.description)}})]),e._v(" "),n("b-col",{attrs:{md:"6"}},[n("b-img",{staticClass:"d-none d-sm-block border border-dark",attrs:{fluid:"",alt:"Responsive image",src:e.image}})],1)],1),e._v(" "),n("b-row",{staticClass:"mt-5 mx-3"},[n("h2",[e._v("Subfolders:")]),e._v(" "),n("br")]),e._v(" "),n("b-row",{staticClass:"mx-3"},[n("p",[e._v("The following are the directories where each pipelie step is located for the Ool Digital pipeline.")])]),e._v(" "),n("b-row",{staticClass:"mx-3"},[n("b-col",e._l(e.subfolders,function(t){return n("b-list-group",{key:t.id},[n("b-list-group-item",[n("b-row",[n("b-col",[n("h4",[e._v(e._s(t.title))])]),e._v(" "),n("b-col",{staticClass:"float-left"},[n("InfoButton",{on:{status_toggle:function(n){return e.show_info_toggle(n,t)}}})],1)],1),e._v(" "),t.info?n("b-row",[n("b-col",{staticClass:"text-justify m-3",attrs:{lg:"8",md:"12",sm:"12"},domProps:{innerHTML:e._s(t.description)}})],1):e._e()],1)],1)}),1)],1),e._v(" "),n("b-row",{staticClass:"mx-3 mt-5"},[n("h3",[e._v("Workarea:")]),e._v(" "),n("br")]),e._v(" "),n("b-row",{staticClass:"m-3"},[n("b-col",{attrs:{lg:"8",md:"8"}},[n("p",[e._v('\n        Inside each pipeline step will be the "workarea", composed\n        by two folders: Playground and Publish.\n        This two spaces separate the work in progress from the\n        actual data that has to flow down the pipeline.\n      ')])]),e._v(" "),n("b-col",{attrs:{lg:"2",sm:"2"}},[n("b-img",{staticClass:"d-md-block d-none",attrs:{fluid:"",alt:"Responsive image",src:"https://cdn.shopify.com/s/files/1/0685/7915/products/WORK_AREA_AHEAD_O_4422eb82-e2ea-491f-ae78-27a9ca601aac_600x.png?v=1544472392"}})],1)],1),e._v(" "),n("b-row",{staticClass:"mx-3 mb-5"},[n("b-col",e._l(e.workarea,function(area){return n("b-list-group",{key:area.id},[n("b-list-group-item",[n("b-row",[n("b-col",[n("h4",[e._v(e._s(area.title))])]),e._v(" "),n("b-col",{staticClass:"float-left"},[n("InfoButton",{on:{status_toggle:function(t){return e.show_info_toggle(t,area)}}})],1)],1),e._v(" "),area.info?n("b-row",[n("b-col",{staticClass:"text-justify m-3",attrs:{lg:"8",md:"12",sm:"12"},domProps:{innerHTML:e._s(area.description)}})],1):e._e()],1)],1)}),1)],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);