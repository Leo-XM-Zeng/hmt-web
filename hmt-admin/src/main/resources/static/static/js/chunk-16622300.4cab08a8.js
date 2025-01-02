(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16622300"],{1270:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"i",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"f",(function(){return i})),r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return m}));var a=r("b775");function s(e){return Object(a["a"])({url:"/api/syncData/createJson",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/api/syncData/save",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/syncData/getConnectorsStatus?name="+e,method:"get"})}function i(e){return Object(a["a"])({url:"/api/syncData/pageList",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/syncData/remove?id="+e,method:"post"})}function c(e){return Object(a["a"])({url:"/api/syncData/getInfoById?id="+e,method:"post"})}function d(e){return Object(a["a"])({url:"/api/syncData/getStatusApiAddress?name="+e,method:"get"})}function u(e){return Object(a["a"])({url:"/api/syncData/batchSave",method:"post",data:e})}function m(e,t){return Object(a["a"])({url:"/api/syncData/batchDeleteTask?taskName="+e+"&projectIds="+t,method:"post"})}},"3b93":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-container",attrs:{"element-loading-text":"批量任务创建中, 请等待任务结果...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}},[r("el-divider",{attrs:{"content-position":"left"}},[r("h3",[e._v("任务信息")])]),e._v(" "),r("div",{staticStyle:{margin:"50px 0"}}),e._v(" "),r("el-form",{ref:"taskForm",attrs:{rules:e.rules,model:e.readerForm,"label-position":"right","label-width":"120px"}},[r("el-form-item",{attrs:{label:"所属项目：",prop:"projectId"}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"350px"},attrs:{placeholder:"所属项目"},model:{value:e.readerForm.projectId,callback:function(t){e.$set(e.readerForm,"projectId",t)},expression:"readerForm.projectId"}},e._l(e.jobProjectList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:50}},[r("el-col",{attrs:{span:12}},[r("div",{staticStyle:{margin:"50px 0"}}),e._v(" "),r("el-form",{ref:"readerForm",attrs:{rules:e.rules,model:e.readerForm,"label-position":"right","label-width":"120px"}},[r("el-divider",{attrs:{"content-position":"left"}},[r("h3",[e._v("数据库源端")])]),e._v(" "),r("div",{staticStyle:{margin:"50px 0"}}),e._v(" "),r("el-form-item",{staticClass:"redItem",attrs:{label:"数据库源端：",prop:"datasourceId"}},[r("el-select",{staticStyle:{width:"350px"},attrs:{filterable:""},on:{change:e.rDsChange},model:{value:e.readerForm.datasourceId,callback:function(t){e.$set(e.readerForm,"datasourceId",t)},expression:"readerForm.datasourceId"}},e._l(e.rDsList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.needSchema,expression:"needSchema"}],attrs:{label:"Schema：",prop:"tableSchema"}},[r("el-select",{staticStyle:{width:"350px"},attrs:{"allow-create":"","default-first-option":"",filterable:""},on:{change:e.schemaChange},model:{value:e.readerForm.tableSchema,callback:function(t){e.$set(e.readerForm,"tableSchema",t)},expression:"readerForm.tableSchema"}},e._l(e.schemaList,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),e.reMysqlModule?[r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1),e._v(" "),r("span",{staticClass:"colExplain"},[e._v("可通过配置文件my.cnf中查看server-id")]),e._v(" "),r("el-form-item",{attrs:{label:"server.id：",prop:"reServerId"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerId,callback:function(t){e.$set(e.readerForm,"reServerId",t)},expression:"readerForm.reServerId"}})],1)]:e._e(),e._v(" "),e.reOracleModule?[r("span",{staticClass:"colExplain"},[e._v("选择Oracle对应的版本")]),e._v(" "),r("el-form-item",{attrs:{label:"Oracle版本："}},[r("el-select",{staticClass:"filter-item",staticStyle:{width:"350px"},on:{change:function(t){return e.createSyncJson()}},model:{value:e.readerForm.oracleVersion,callback:function(t){e.$set(e.readerForm,"oracleVersion",t)},expression:"readerForm.oracleVersion"}},e._l(e.oracleVersions,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1),e._v(" "),r("span",{staticClass:"colExplain"},[e._v("19C要连接的PDB数据库名称(CDB不需要填写)")]),e._v(" "),r("el-form-item",{attrs:{label:"PDB：",prop:"rePdbName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.rePdbName,callback:function(t){e.$set(e.readerForm,"rePdbName",t)},expression:"readerForm.rePdbName"}})],1)]:e._e(),e._v(" "),e.rePostgreSqlModule?[r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1)]:e._e(),e._v(" "),e.reSqlServerModule?[r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1)]:e._e(),e._v(" "),e.reHaloModule?[r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1)]:e._e(),e._v(" "),e.reDb2Module?[r("span",{staticClass:"colExplain"},[e._v("需要和目标端的数据库名称一致")]),e._v(" "),r("el-form-item",{attrs:{label:"server.name：",prop:"reServerName"}},[r("el-input",{staticStyle:{width:"350px"},on:{input:function(t){return e.createSyncJson()}},model:{value:e.readerForm.reServerName,callback:function(t){e.$set(e.readerForm,"reServerName",t)},expression:"readerForm.reServerName"}})],1)]:e._e(),e._v(" "),r("el-form-item",{attrs:{label:"数据库表名："}},[r("div",{staticClass:"user-checkbox-panel"},[r("div",{staticClass:"user-checkbox-panel-header"},[r("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.checkAll,callback:function(t){e.$set(e.readerForm,"checkAll",t)},expression:"readerForm.checkAll"}},[e._v("全选\n              ")]),e._v(" "),r("span",{staticClass:"user-checkbox-panel-header-calculate"},[e._v(e._s(e.readerForm.tables.length)+"/"+e._s(e.rTbList.length))])],1),e._v(" "),r("div",{staticClass:"user-checkbox-panel-body"},[r("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.tables,callback:function(t){e.$set(e.readerForm,"tables",t)},expression:"readerForm.tables"}},e._l(e.rTbList,(function(t){return r("el-checkbox",{key:t,staticStyle:{display:"block"},attrs:{label:t}},[e._v(e._s(t))])})),1)],1)])]),e._v(" "),r("div",{staticStyle:{"margin-top":"10px"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveSyncJson()}}},[e._v("批量创建任务 "),r("i",{staticClass:"el-icon-tickets"})])],1)],2)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticStyle:{margin:"50px 0"}}),e._v(" "),r("el-form",{ref:"writerForm",attrs:{rules:e.rules,model:e.readerForm,"label-position":"right","label-width":"120px"}},[r("el-divider",{attrs:{"content-position":"left"}},[r("h3",[e._v("数据库目标端")])]),e._v(" "),r("div",{staticStyle:{margin:"50px 0"}}),e._v(" "),r("el-form-item",{staticClass:"redItem",attrs:{label:"数据库目标端：",prop:"datasourceId_2"}},[r("el-select",{staticStyle:{width:"350px"},attrs:{filterable:""},on:{change:e.rDsChange2},model:{value:e.readerForm.datasourceId_2,callback:function(t){e.$set(e.readerForm,"datasourceId_2",t)},expression:"readerForm.datasourceId_2"}},e._l(e.rDsList_2,(function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.needSchema_2,expression:"needSchema_2"}],attrs:{label:"Schema：",prop:"tableSchema_2"}},[r("el-select",{staticStyle:{width:"350px"},attrs:{"allow-create":"","default-first-option":"",filterable:""},on:{change:e.schemaChange2},model:{value:e.readerForm.tableSchema_2,callback:function(t){e.$set(e.readerForm,"tableSchema_2",t)},expression:"readerForm.tableSchema_2"}},e._l(e.schemaList_2,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"批量创建任务结果信息",visible:e.taskResultVisible},on:{"update:visible":function(t){e.taskResultVisible=t}}},[r("div",{staticStyle:{"font-weight":"bold"}},[r("span",{staticStyle:{color:"#67C23A"}},[e._v("总任务数: "+e._s(e.taskResultForm.allCount))]),e._v(" "),r("span",{staticStyle:{color:"#409EFF","margin-left":"10px"}},[e._v("成功数: "+e._s(e.taskResultForm.successCount))]),e._v(" "),r("span",{staticStyle:{color:"#F83535","margin-left":"10px"}},[e._v("失败数: "+e._s(e.taskResultForm.errorCount))])]),e._v(" "),r("el-form",{staticClass:"demo-form-inline",attrs:{model:e.taskResultForm,inline:!0,"label-position":"top"}},[r("el-form-item",{staticClass:"redItem",attrs:{label:"目标端不存在的表("+e.taskResultForm.ltablesCount+")"}},[r("el-input",{staticStyle:{width:"345px"},attrs:{type:"textarea",rows:15,placeholder:"暂无失败表"},model:{value:e.taskResultForm.ltables,callback:function(t){e.$set(e.taskResultForm,"ltables",t)},expression:"taskResultForm.ltables"}})],1),e._v(" "),r("el-form-item",{staticClass:"redItem",attrs:{label:"源端无主键的表("+e.taskResultForm.rtablesCount+")"}},[r("el-input",{staticStyle:{width:"345px"},attrs:{type:"textarea",rows:15,placeholder:"暂无特有表"},model:{value:e.taskResultForm.rtables,callback:function(t){e.$set(e.taskResultForm,"rtables",t)},expression:"taskResultForm.rtables"}})],1)],1)],1)],1)},s=[],o=(r("7514"),r("f352")),n=r("7e39"),i=r("1270"),l=r("a53d"),c={name:"SyncJsonBuild",data:function(){return{jdbcDsQuery:{current:1,size:200,ascs:"datasource_name"},rDsList:[],rDsList_2:[],rTbList:[],rTbList_2:[],schemaList:[],schemaList_2:[],rColumnList:[],loading:!1,active:1,customFields:"",customType:"",customValue:"",dataSource:"",dataSource_2:"",needSchema:!0,needSchema_2:!0,reMysqlModule:!1,reOracleModule:!1,rePostgreSqlModule:!1,reSqlServerModule:!1,reHaloModule:!1,jobProjectList:"",projectIds:"",readerForm:{datasourceId:void 0,tableName:"",tableSchema:"",datasourceId_2:void 0,tableName_2:"",tableSchema_2:"",taskName:"",reServerId:"",oracleVersion:"oracle11",rePdbName:"",reServerName:"",reKeyColumns:[],tables:[],checkAll:!1,isIndeterminate:!0,projectId:""},rules:{datasourceId:[{required:!0,message:"this is required",trigger:"change"}],tableName:[{required:!0,message:"请选择表名",trigger:"change"}],tableSchema:[{required:!0,message:"请选择Schema",trigger:"change"}],datasourceId_2:[{required:!0,message:"this is required",trigger:"change"}],tableName_2:[{required:!0,message:"请选择表名",trigger:"change"}],tableSchema_2:[{required:!0,message:"请选择Schema",trigger:"change"}],projectId:[{required:!0,message:"请选择所属项目",trigger:"change"}]},originText:"",formatedValue:"",syncJson_1:{},syncJson_2:{},taskId:0,taskResultVisible:!1,connectorTextColor:"red",tasksTextColor:"red",taskResultForm:{ltables:"",rtables:"",ltablesCount:0,rtablesCount:0,allCount:0,errorCount:0,successCount:0},oracleVersions:[{id:"oracle11",name:"oracle11"},{id:"oracle19",name:"oracle19"}]}},watch:{"readerForm.datasourceId":function(e,t){this.getSchema(),this.reMysqlModule=!1,this.reOracleModule=!1,this.rePostgreSqlModule=!1,this.reSqlServerModule=!1,this.reHaloModule=!1,this.reDb2Module=!1,"mysql"===this.dataSource?this.reMysqlModule=!0:"oracle"===this.dataSource?this.reOracleModule=!0:"postgresql"===this.dataSource?this.rePostgreSqlModule=!0:"sqlserver"===this.dataSource?this.reSqlServerModule=!0:"halo"===this.dataSource?this.reHaloModule=!0:"db2"===this.dataSource&&(this.reDb2Module=!0)},"readerForm.datasourceId_2":function(e,t){this.getSchema2()}},created:function(){this.getJdbcDs(),this.getJobProject()},methods:{getJdbcDs:function(e){var t=this;Object(n["e"])(this.jdbcDsQuery).then((function(e){var r=e.records;t.rDsList=r,t.rDsList_2=r,void 0!==t.$route.query.jobId?t.getInfoById(t.$route.query):(t.dataSource=t.rDsList[0].datasource,t.dataSource_2=t.rDsList_2[0].datasource,t.readerForm.datasourceId=t.rDsList[0].id,t.readerForm.datasourceId_2=t.rDsList_2[0].id)}))},getTables:function(e){var t=this;if("rdbmsReader"===e){var r={};r=this.needSchema?{datasourceId:this.readerForm.datasourceId,tableSchema:this.readerForm.tableSchema}:{datasourceId:this.readerForm.datasourceId},o["e"](r).then((function(e){e&&(t.rTbList=e)}))}},getSchema:function(){var e=this,t={datasourceId:this.readerForm.datasourceId};o["d"](t).then((function(t){e.schemaList=t}))},getSchema2:function(){var e=this,t={datasourceId:this.readerForm.datasourceId_2};o["d"](t).then((function(t){e.schemaList_2=t}))},schemaChange:function(e){this.readerForm.tableSchema=e,this.getTables("rdbmsReader"),this.readerForm.tables=[]},schemaChange2:function(e){this.readerForm.tableSchema_2=e},rDsChange:function(e){var t=this;this.readerForm.tableName="",this.readerForm.datasourceId=e,this.rDsList.find((function(r){r.id===e&&(t.dataSource=r.datasource)})),this.$emit("selectDataSource",this.dataSource),this.readerForm.tableSchema="",this.rTbList=[],this.readerForm.tables=[]},rDsChange2:function(e){var t=this;this.readerForm.tableName_2="",this.readerForm.datasourceId_2=e,this.rDsList_2.find((function(r){r.id===e&&(t.dataSource_2=r.datasource)})),this.$emit("selectDataSource",this.dataSource_2),this.readerForm.tableSchema_2="",this.rTbList_2=[]},rTbChange:function(e){this.readerForm.tableName=e,this.rColumnList=[],this.readerForm.columns=[],this.getColumns("reader")},getData:function(){return this.readerForm},rHandleCheckAllChange:function(e){this.readerForm.tables=e?this.rTbList:[],this.readerForm.isIndeterminate=!1},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.rTbList.length,this.readerForm.isIndeterminate=t>0&&t<this.rTbList.length},saveSyncJson:function(){var e=this,t=!1,r=!1,a=!1;if(this.$refs["taskForm"].validate((function(e){e&&(t=!0)})),this.$refs["readerForm"].validate((function(e){e&&(r=!0)})),this.$refs["writerForm"].validate((function(e){e&&(a=!0)})),r&&a&&t){this.loading=!0;var s={taskName:"",readerDatasourceId:this.readerForm.datasourceId,readerDatasource:this.dataSource,readerTableSchema:this.readerForm.tableSchema,readerTables:this.readerForm.tables,readerMysqlServerName:this.readerForm.mysqlServerName,readerMysqlServerId:this.readerForm.mysqlServerId,reServerName:this.readerForm.reServerName,reServerId:this.readerForm.reServerId,oracleVersion:this.readerForm.oracleVersion,reKeyColumns:"",rePdbName:this.readerForm.rePdbName,writerDatasourceId:this.readerForm.datasourceId_2,writerDatasource:this.dataSource_2,writerTableSchema:this.readerForm.tableSchema_2,projectId:this.readerForm.projectId};i["b"](s).then((function(t){var r=t.content;e.taskResultForm.ltables=r.noExistTables.join("\n"),e.taskResultForm.rtables=r.noKeyTables.join("\n"),e.taskResultForm.ltablesCount=r.noExistTables.length,e.taskResultForm.rtablesCount=r.noKeyTables.length,e.taskResultForm.allCount=r.allCount,e.taskResultForm.errorCount=r.errorCount,e.taskResultForm.successCount=r.successCount,e.loading=!1,e.taskResultVisible=!0}))}},getJobProject:function(){var e=this;l["c"]().then((function(t){e.jobProjectList=t}))}}},d=c,u=(r("bbc5"),r("2877")),m=Object(u["a"])(d,a,s,!1,null,"4fea10d4",null);t["default"]=m.exports},7514:function(e,t,r){"use strict";var a=r("5ca1"),s=r("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"7e39":function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"g",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"d",(function(){return d}));var a=r("b775");function s(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function n(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"put",data:e})}function i(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"delete",params:e})}function c(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/test",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/all",method:"get",params:e})}},a53d:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l}));var a=r("b775");function s(e){return Object(a["a"])({url:"/api/jobProject",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/jobProject",method:"put",data:e})}function n(e){return Object(a["a"])({url:"/api/jobProject",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/jobProject",method:"delete",params:e})}function l(e){return Object(a["a"])({url:"api/jobProject/list",method:"get",params:e})}},bbc5:function(e,t,r){"use strict";r("c9dc")},c9dc:function(e,t,r){},f352:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l}));var a=r("b775");function s(e){return Object(a["a"])({url:"/api/metadata/getTables",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/metadata/getDBSchema",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/api/metadata/getColumns",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/api/metadata/getColumnsByQuerySql",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/metadata/createTable",method:"post",params:e})}}}]);