(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50271940"],{"2cbf":function(t,e,a){"use strict";a("653b")},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var n=o(),i=t-n,s=20,u=0;e="undefined"===typeof e?500:e;var c=function(){u+=s;var t=Math.easeInOutQuad(u,n,i,e);l(t),u<e?r(c):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(a("2cbf"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"6af373ef",null);e["a"]=p.exports},6514:function(t,e,a){"use strict";a("cf35")},"653b":function(t,e,a){},6724:function(t,e,a){"use strict";a("8d41");var n="@@wavesContext";function i(t,e){function a(a){var n=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=a:t[n]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},l=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(l)),r.install=l;e["a"]=r},"7dd2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"230px"},attrs:{placeholder:"搜索表"},model:{value:t.listQuery.tableName,callback:function(e){t.$set(t.listQuery,"tableName",e)},expression:"listQuery.tableName"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"全部结果"},model:{value:t.listQuery.isCorrect,callback:function(e){t.$set(t.listQuery,"isCorrect",e)},expression:"listQuery.isCorrect"}},t._l(t.isCorrectList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"170px"},attrs:{placeholder:"源/目标端不存在的对象"},model:{value:t.listQuery.fastQue,callback:function(e){t.$set(t.listQuery,"fastQue",e)},expression:"listQuery.fastQue"}},t._l(t.fastQueList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"170px"},attrs:{placeholder:"对象类型",clearable:!0},model:{value:t.listQuery.metaTypeId,callback:function(e){t.$set(t.listQuery,"metaTypeId",e)},expression:"listQuery.metaTypeId"}},t._l(t.metaTypes,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchData}},[t._v("\n      搜索\n    ")])],1),t._v(" "),a("div",{staticClass:"result_content"},[a("i",{staticClass:"el-alert__icon el-icon-success"}),t._v(" "),a("span",{staticClass:"result_title"},[t._v("总计对比结果：源端 "+t._s(t.detailsCount.readertablecount)+" 个对象，目标端 "+t._s(t.detailsCount.writertablecount)+" 个对象，对比结果不一致的有 "+t._s(t.detailsCount.iscorrectcount)+" 个")])]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"对象类型",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.metaTypes.find((function(t){return t.id===e.row.metaTypeId})).name))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"源端对象",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[""!==e.row.readerTable?a("span",[t._v(t._s(e.row.readerTable))]):t._e(),t._v(" "),null===e.row.readerTable?a("span",{staticStyle:{color:"red"}},[t._v("源端对象不存在")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"目标端对象",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[""!==e.row.writerTable?a("span",[t._v(t._s(e.row.writerTable))]):t._e(),t._v(" "),null===e.row.writerTable?a("span",{staticStyle:{color:"red"}},[t._v("目标端对象不存在")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"对比结果",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isCorrect?a("el-tag",{attrs:{type:"primary"}},[t._v("一致")]):t._e(),t._v(" "),1===e.row.isCorrect?a("el-tag",{attrs:{type:"danger"}},[t._v("不一致")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.updateTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDetails(n)}}},[t._v("\n          详情\n        ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.fetchData}}),t._v(" "),a("el-drawer",{attrs:{title:"对比详情",visible:t.dataDiffDrawer,direction:t.direction,size:"80%"},on:{"update:visible":function(e){t.dataDiffDrawer=e}}},[a("div",[a("span",{staticStyle:{"font-size":"14px","padding-left":"20px",color:"#606266","font-weight":"bold"}},[t._v("该语句仅用于对比，并不是完整的语句。")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSql()}}},[t._v("切换语法")]),t._v(" "),a("el-form",{staticStyle:{"padding-left":"20px"}},[a("el-form-item",{attrs:{label:"显示方式"}},[a("el-radio-group",{model:{value:t.outputFormat,callback:function(e){t.outputFormat=e},expression:"outputFormat"}},[a("el-radio",{attrs:{label:"line-by-line"}},[a("span",[t._v("line-by-line 逐行显示")])]),t._v(" "),a("el-radio",{attrs:{label:"side-by-side"}},[a("span",[t._v("side-by-side 并行显示")])])],1)],1)],1),t._v(" "),a("code-diff",{staticStyle:{height:"520px",margin:"20px"},attrs:{"old-string":t.oldStrToCompare,"new-string":t.newStrToCompare,context:100,language:"sql","output-format":t.outputFormat}}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){t.dataDiffDrawer=!1}}},[t._v("取 消")])],1)])],1)},i=[],r=a("fe66"),l=a("6724"),o=a("333d"),s=a("7843"),u={name:"DataContrastDetails",components:{Pagination:o["a"],CodeDiff:s["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,taskId:0,tableName:"",metaTypeId:"",isCorrect:-1,fastQue:-1},pluginData:[],isCorrectList:[{value:-1,label:"全部结果"},{value:0,label:"一致"},{value:1,label:"不一致"}],fastQueList:[{value:-1,label:"快捷筛选"},{value:0,label:"源端不存在的对象"},{value:1,label:"目标端不存在的对象"}],metaTypes:[{id:"1",name:"自定义类型"},{id:"2",name:"表结构"},{id:"3",name:"约束"},{id:"4",name:"索引"},{id:"5",name:"函数"},{id:"6",name:"存储过程"},{id:"7",name:"视图"},{id:"8",name:"触发器"},{id:"9",name:"Package"},{id:"10",name:"序列"}],detailsCount:{readertablecount:0,writertablecount:0,iscorrectcount:0},dataDiffDrawer:!1,direction:"rtl",oldStrToCompare:"",newStrToCompare:"",mappingInfo:"",writerInfo:"",selectType:1,outputFormat:"side-by-side"}},created:function(){this.fetchData(),this.detailsCountData()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e=this.$route.query.taskId;this.listQuery.taskId=e,r["b"](this.listQuery).then((function(e){var a=e.content;t.total=a.recordsTotal,t.list=a.data,t.listLoading=!1})),this.detailsCountData()},detailsCountData:function(){var t=this;this.listLoading=!0,r["a"](this.listQuery).then((function(e){var a=e.content;t.detailsCount=a}))},handleDetails:function(t){this.dataDiffDrawer=!0,this.selectType=1,this.oldStrToCompare=null==t.readerInfo?"":t.readerInfo,this.newStrToCompare=null==t.mappingInfo?"":t.mappingInfo,this.mappingInfo=null==t.mappingInfo?"":t.mappingInfo,this.writerInfo=null==t.writerInfo?"":t.writerInfo,""===this.mappingInfo&&(this.newStrToCompare=this.writerInfo,this.selectType=0)},handleSql:function(){0===this.selectType?(this.newStrToCompare=this.mappingInfo,this.selectType=1):(this.newStrToCompare=this.writerInfo,this.selectType=0)}}},c=u,d=(a("6514"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"160b2616",null);e["default"]=p.exports},"8d41":function(t,e,a){},cf35:function(t,e,a){},fe66:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return u}));var n=a("b775");function i(t){return Object(n["a"])({url:"/api/dataContrast/createDataContrastTask",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/api/dataContrast/createStructureContrastTask",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/api/dataContrast/pageList",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/dataContrast/remove?id="+t,method:"post"})}function s(t){return Object(n["a"])({url:"/api/dataContrast/pageDetailsList",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/api/dataContrast/detailsCount",method:"get",params:t})}}}]);