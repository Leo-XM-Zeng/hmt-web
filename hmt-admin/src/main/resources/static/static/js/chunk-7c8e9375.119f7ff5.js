(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c8e9375"],{"2cbf":function(e,t,a){"use strict";a("653b")},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var i=l(),n=e-i,s=20,u=0;t="undefined"===typeof t?500:t;var d=function(){u+=s;var e=Math.easeInOutQuad(u,i,n,t);r(e),u<t?o(d):a&&"function"===typeof a&&a()};d()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},d=u,c=(a("2cbf"),a("2877")),p=Object(c["a"])(d,i,n,!1,null,"6af373ef",null);t["a"]=p.exports},"39ed":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return s}));var i=a("b775");function n(){return Object(i["a"])({url:"/api/jobGroup/list",method:"get"})}function o(e){return Object(i["a"])({url:"/api/jobGroup/update",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/api/jobGroup/save",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/api/jobGroup/loadById?id="+e,method:"post"})}function s(e){return Object(i["a"])({url:"/api/jobGroup/remove?id="+e,method:"post"})}},"653b":function(e,t,a){},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=n.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),n.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=n.color,l.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var o={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,a){},e036:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"排序",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"名称",width:"120",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.title))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"分组标识",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.appName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"注册方式",width:"110",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.addressTypes.find((function(e){return e.value===t.row.addressType})).label))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线机器",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.addressList))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n          编辑\n        ")]),e._v(" "),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"AppName",prop:"appName"}},[a("el-input",{attrs:{placeholder:"AppName"},model:{value:e.temp.appName,callback:function(t){e.$set(e.temp,"appName",t)},expression:"temp.appName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入执行器名称"},model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"prop"}},[a("el-input",{attrs:{placeholder:"执行器序号"},model:{value:e.temp.order,callback:function(t){e.$set(e.temp,"order",t)},expression:"temp.order"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注册方式",prop:"addressType"}},[a("el-radio-group",{model:{value:e.temp.addressType,callback:function(t){e.$set(e.temp,"addressType",t)},expression:"temp.addressType"}},[a("el-radio",{attrs:{label:0}},[e._v("自动注册")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("手动录入")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"机器地址",prop:"addressList"}},[a("el-input",{attrs:{disabled:"create"!==e.dialogStatus,placeholder:"多个以逗号分隔"},model:{value:e.temp.addressList,callback:function(t){e.$set(e.temp,"addressList",t)},expression:"temp.addressList"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确定\n      ")])],1)],1)],1)},n=[],o=a("39ed"),r=a("6724"),l=a("333d"),s={name:"Executor",components:{Pagination:l["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,name:void 0,jobGroup:void 0},editJsonVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{appName:[{required:!0,message:"appName is required",trigger:"blur"}],title:[{required:!0,message:"title is required",trigger:"blur"}],order:[{required:!0,message:"title is required",trigger:"blur"}],addressType:[{required:!0,message:"title is required",trigger:"change"}]},temp:{id:void 0,appName:void 0,title:void 0,order:void 0,addressType:void 0,addressList:void 0},addressTypes:[{value:0,label:"自动注册"},{value:1,label:"手动录入"}]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,o["d"]().then((function(t){var a=t.content;e.list=a,e.listLoading=!1}))},resetTemp:function(){this.temp={id:void 0,appName:void 0,title:void 0,order:void 0,addressType:void 0,addressList:void 0}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&o["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);a.configJson=e.configJson,o["f"](a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(e){var t=this;o["b"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},handleFetchPv:function(e){var t=this;o["fetch"](e).then((function(e){t.pluginData=e,t.dialogPvVisible=!0}))}}},u=s,d=a("2877"),c=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=c.exports}}]);