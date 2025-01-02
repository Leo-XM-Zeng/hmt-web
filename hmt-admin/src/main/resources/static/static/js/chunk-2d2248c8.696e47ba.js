(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2248c8"],{e139:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingBody,expression:"loadingBody"}],staticClass:"build-container",attrs:{"element-loading-text":"迁移任务过多，正在拼命创建中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.7) !important"}},[a("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"步骤 1 (构建源端)",description:"构建reader"}},[e._v("1")]),e._v(" "),a("el-step",{attrs:{title:"步骤 2 (构建目标端)",description:"构建writer"}},[e._v("2")]),e._v(" "),a("el-step",{attrs:{title:"步骤 3",description:"表映射"}},[e._v("3")]),e._v(" "),a("el-step",{attrs:{title:"步骤 4",description:"批量创建"}},[e._v("4")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active===1"}],staticClass:"step1"},[a("Reader",{ref:"reader"})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active===2"}],staticClass:"step2"},[a("Writer",{ref:"writer"})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.active,expression:"active===3"}],staticClass:"step3"},[a("Mapper",{ref:"mapper"})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4===e.active,expression:"active===4"}],staticClass:"step4"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleJobTemplateSelectDrawer}},[e._v(e._s(e.jobTemplate?e.jobTemplate:"1.选择模板"))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createJob}},[e._v("2.批量创建任务")]),e._v("\n      (步骤：选择模板->批量创建任务)\n      "),a("el-drawer",{ref:"jobTemplateSelectDrawer",attrs:{title:"选择模板",visible:e.jobTemplateSelectDrawer,direction:"rtl",size:"50%"},on:{"update:visible":function(t){e.jobTemplateSelectDrawer=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","destroy-on-close":"true"},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{align:"center",label:"任务ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"任务描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属项目",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.projectName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Cron",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"路由策略",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}})],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}})],1),e._v(" "),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:1===e.active},on:{click:e.last}},[e._v("上一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:4!==e.active,expression:"active!==4"}],staticStyle:{"margin-top":"12px","margin-bottom":"12px"},attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")])],1)])},s=[],i=a("3a8d"),l=a("2b10"),o=a("333d"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("TableReader",{ref:"tablereader",on:{selectDataSource:e.showDataSource}})],1)},n=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{"label-position":"right","label-width":"120px",model:e.readerForm,rules:e.rules}},[a("el-form-item",{staticClass:"redItem",attrs:{label:"数据库源端：",prop:"datasourceId"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.rDsChange},model:{value:e.readerForm.datasourceId,callback:function(t){e.$set(e.readerForm,"datasourceId",t)},expression:"readerForm.datasourceId"}},e._l(e.rDsList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.needSchema,expression:"needSchema"}],attrs:{label:"Schema："}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.schemaChange},model:{value:e.readerForm.tableSchema,callback:function(t){e.$set(e.readerForm,"tableSchema",t)},expression:"readerForm.tableSchema"}},e._l(e.schemaList,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"切分字段："}},[a("el-input",{staticStyle:{width:"13%"},attrs:{placeholder:"切分主键"},model:{value:e.readerForm.splitPk,callback:function(t){e.$set(e.readerForm,"splitPk",t)},expression:"readerForm.splitPk"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据库表名："}},[a("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.checkAll,callback:function(t){e.$set(e.readerForm,"checkAll",t)},expression:"readerForm.checkAll"}},[e._v("全选\n      ")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.tables,callback:function(t){e.$set(e.readerForm,"tables",t)},expression:"readerForm.tables"}},e._l(e.rTbList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)},u=[],h=(a("7514"),a("f352")),m=a("7e39"),b=a("2b0e"),f=new b["default"]({data:function(){return{dataSourceId:""}}}),p={name:"TableReader",data:function(){return{jdbcDsQuery:{current:1,size:200,ascs:"datasource_name"},rDsList:[],rTbList:[],schemaList:[],loading:!1,active:1,customFields:"",customType:"",customValue:"",dataSource:"",needSchema:!1,readerForm:{datasourceId:void 0,tables:[],checkAll:!1,isIndeterminate:!0,splitPk:"",tableSchema:"",dataSource:""},rules:{datasourceId:[{required:!0,message:"this is required",trigger:"change"}],tableName:[{required:!0,message:"this is required",trigger:"change"}]},isFirstLoad:!0}},watch:{"readerForm.datasourceId":function(e,t){this.isFirstLoad||("postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource||"db2"===this.dataSource||"halo"===this.dataSource||"dm"===this.dataSource||"mysql"===this.dataSource?(this.getSchema(),this.needSchema=!0):(this.getTables("reader"),this.needSchema=!1)),this.isFirstLoad=!1}},created:function(){this.getJdbcDs()},methods:{getJdbcDs:function(){var e=this;this.loading=!0,Object(m["e"])(this.jdbcDsQuery).then((function(t){var a=t.records;e.rDsList=a,e.dataSource=e.rDsList[0].datasource,e.readerForm.datasourceId=e.rDsList[0].id,"postgresql"===e.dataSource||"oracle"===e.dataSource||"sqlserver"===e.dataSource||"db2"===e.dataSource||"halo"===e.dataSource||"dm"===e.dataSource?e.needSchema=!0:e.needSchema=!1,e.loading=!1}))},getTables:function(e){var t=this;if("reader"===e){var a={};a=this.needSchema?{datasourceId:this.readerForm.datasourceId,tableSchema:this.readerForm.tableSchema}:{datasourceId:this.readerForm.datasourceId},h["e"](a).then((function(e){e&&(t.rTbList=e)}))}},getSchema:function(){var e=this,t={datasourceId:this.readerForm.datasourceId};h["d"](t).then((function(t){e.schemaList=t}))},schemaChange:function(e){this.readerForm.tableSchema=e,this.getTables("reader")},rDsChange:function(e){var t=this;this.readerForm.tables=[],this.readerForm.datasourceId=e,this.rDsList.find((function(a){a.id===e&&(t.dataSource=a.datasource)})),f.dataSourceId=e,this.$emit("selectDataSource",this.dataSource),this.readerForm.tableSchema="",this.rTbList=[]},rHandleCheckAllChange:function(e){this.readerForm.tables=e?this.rTbList:[],this.readerForm.isIndeterminate=!1},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.rTbList.length,this.readerForm.isIndeterminate=t>0&&t<this.rTbList.length},getData:function(){return f.dataSourceId&&(this.readerForm.datasourceId=f.dataSourceId),this.readerForm.dataSource=this.dataSource,this.readerForm}}},v=p,g=a("2877"),S=Object(g["a"])(v,d,u,!1,null,null,null),w=S.exports,T={name:"Reader",components:{TableReader:w},data:function(){return{dataSource:""}},methods:{getData:function(){return this.$refs.tablereader.getData()},showDataSource:function(e){this.dataSource=e,this.getData()}}},F=T,k=Object(g["a"])(F,c,n,!1,null,null,null),_=k.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("TableWriter",{ref:"tablewriter",on:{selectDataSource:e.showDataSource}})],1)},D=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{"label-position":"right","label-width":"150px",model:e.writerForm,rules:e.rules}},[a("el-form-item",{staticClass:"redItem",attrs:{label:"数据库目标端：",prop:"datasourceId"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.wDsChange},model:{value:e.writerForm.datasourceId,callback:function(t){e.$set(e.writerForm,"datasourceId",t)},expression:"writerForm.datasourceId"}},e._l(e.wDsList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.needSchema,expression:"needSchema"}],attrs:{label:"Schema："}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.schemaChange},model:{value:e.writerForm.tableSchema,callback:function(t){e.$set(e.writerForm,"tableSchema",t)},expression:"writerForm.tableSchema"}},e._l(e.schemaList,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),a("div",{staticStyle:{margin:"5px 0"}}),e._v(" "),a("el-form-item",{attrs:{label:"数据库表名："}},[a("el-checkbox",{attrs:{indeterminate:e.writerForm.isIndeterminate},on:{change:e.wHandleCheckAllChange},model:{value:e.writerForm.checkAll,callback:function(t){e.$set(e.writerForm,"checkAll",t)},expression:"writerForm.checkAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.wHandleCheckedChange},model:{value:e.writerForm.tables,callback:function(t){e.$set(e.writerForm,"tables",t)},expression:"writerForm.tables"}},e._l(e.wTbList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)},C=[],y=new b["default"]({data:function(){return{dataSourceId:""}}}),L={name:"TableWriter",data:function(){return{jdbcDsQuery:{current:1,size:200,ascs:"datasource_name",type:"writer"},wDsList:[],schemaList:[],fromTableName:"",wTbList:[],dataSource:"",needSchema:!1,createTableName:"",writerForm:{datasourceId:void 0,tables:[],checkAll:!1,isIndeterminate:!0,tableSchema:"",dataSource:""},readerForm:this.getReaderData(),rules:{datasourceId:[{required:!0,message:"this is required",trigger:"change"}],tableName:[{required:!0,message:"this is required",trigger:"change"}]}}},watch:{"writerForm.datasourceId":function(e,t){"postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource||"db2"===this.dataSource||"halo"===this.dataSource||"dm"===this.dataSource||"mysql"===this.dataSource?(this.getSchema(),this.needSchema=!0):(this.getTables("writer"),this.needSchema=!1)}},created:function(){this.getJdbcDs()},methods:{getJdbcDs:function(){var e=this;this.loading=!0,Object(m["e"])(this.jdbcDsQuery).then((function(t){var a=t.records;e.wDsList=a,e.dataSource=e.wDsList[0].datasource,e.writerForm.datasourceId=e.wDsList[0].id,"postgresql"===e.dataSource||"oracle"===e.dataSource||"sqlserver"===e.dataSource||"db2"===e.dataSource||"halo"===e.dataSource||"dm"===e.dataSource?e.needSchema=!0:e.needSchema=!1,e.loading=!1}))},getTables:function(e){var t=this;if("writer"===e){var a={};a=this.needSchema?{datasourceId:this.writerForm.datasourceId,tableSchema:this.writerForm.tableSchema}:{datasourceId:this.writerForm.datasourceId},h["e"](a).then((function(e){t.wTbList=e}))}},getSchema:function(){var e=this,t={datasourceId:this.writerForm.datasourceId};h["d"](t).then((function(t){e.schemaList=t}))},schemaChange:function(e){this.writerForm.tableSchema=e,this.getTables("writer")},wDsChange:function(e){var t=this;this.writerForm.tables=[],this.writerForm.datasourceId=e,this.wDsList.find((function(a){a.id===e&&(t.dataSource=a.datasource)})),y.dataSourceId=e,this.$emit("selectDataSource",this.dataSource),this.writerForm.tableSchema="",this.wTbList=[]},wHandleCheckAllChange:function(e){this.writerForm.tables=e?this.wTbList:[],this.writerForm.isIndeterminate=!1},wHandleCheckedChange:function(e){var t=e.length;this.writerForm.checkAll=t===this.wTbList.length,this.writerForm.isIndeterminate=t>0&&t<this.wTbList.length},getData:function(){return y.dataSourceId&&(this.writerForm.datasourceId=y.dataSourceId),this.writerForm.dataSource=this.dataSource,this.writerForm},getReaderData:function(){return this.$parent.getReaderData()},getTableName:function(){return this.fromTableName},createTable:function(){var e=this,t={datasourceId:this.writerForm.datasourceId,tableName:this.createTableName};h["a"](t).then((function(t){e.$notify({title:"Success",message:"Create Table Successfully",type:"success",duration:2e3})})).catch((function(){return console.log("promise catch err")}))}}},$=L,A=Object(g["a"])($,x,C,!1,null,null,null),j=A.exports,N={name:"Writer",components:{TableWriter:j},data:function(){return{dataSource:""}},methods:{getData:function(){return this.$refs.tablewriter.getData()},getTableName:function(){return this.$refs.tablewriter.getTableName()},getReaderData:function(){return this.$parent.getReaderData()},showDataSource:function(e){this.dataSource=e,this.getData()},sendTableNameAndColumns:function(e,t){this.$refs.hivewriter.fromTableName=e,this.$refs.hivewriter.fromColumnList=t}}},R=N,E=Object(g["a"])(R,I,D,!1,null,null,null),H=E.exports,q=a("f71e"),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("TableMapper",{ref:"mapper"})],1)},O=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.readerForm}},[a("el-form-item",{attrs:{label:"源端表"}},[a("el-checkbox",{attrs:{indeterminate:e.readerForm.lIsIndeterminate},on:{change:e.lHandleCheckAllChange},model:{value:e.readerForm.lcheckAll,callback:function(t){e.$set(e.readerForm,"lcheckAll",t)},expression:"readerForm.lcheckAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.lHandleCheckedChange},model:{value:e.readerForm.ltables,callback:function(t){e.$set(e.readerForm,"ltables",t)},expression:"readerForm.ltables"}},e._l(e.fromTablesList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"目标表"}},[a("el-checkbox",{attrs:{indeterminate:e.readerForm.rIsIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.rcheckAll,callback:function(t){e.$set(e.readerForm,"rcheckAll",t)},expression:"readerForm.rcheckAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"20px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.rtables,callback:function(t){e.$set(e.readerForm,"rtables",t)},expression:"readerForm.rtables"}},e._l(e.toTablesList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-s-check"},on:{click:e.handlerShowCheckTable}},[e._v("差异校验")]),e._v(" "),a("el-dialog",{attrs:{title:"源端目标端特有表校验",visible:e.checkTableVisible},on:{"update:visible":function(t){e.checkTableVisible=t}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:e.checkTableForm,inline:!0,"label-position":"top"}},[a("el-form-item",{staticClass:"redItem",attrs:{label:"源端特有表("+e.checkTableForm.ltablescount+")"}},[a("el-input",{staticStyle:{width:"345px"},attrs:{type:"textarea",rows:15,placeholder:"暂无特有表"},model:{value:e.checkTableForm.ltables,callback:function(t){e.$set(e.checkTableForm,"ltables",t)},expression:"checkTableForm.ltables"}})],1),e._v(" "),a("el-form-item",{staticClass:"redItem",attrs:{label:"目标端特有表("+e.checkTableForm.rtablescount+")"}},[a("el-input",{staticStyle:{width:"345px"},attrs:{type:"textarea",rows:15,placeholder:"暂无特有表"},model:{value:e.checkTableForm.rtables,callback:function(t){e.$set(e.checkTableForm,"rtables",t)},expression:"checkTableForm.rtables"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.checkTableVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checkTableVisible=!1}}},[e._v("确 定")])],1)],1)],1)},Q=[],P=a("8235"),V={name:"TableMapper",data:function(){return{mapperJson:{},fromTablesList:[],toTablesList:[],schemaA:"",schemaB:"",readerForm:{ltables:[],rtables:[],lcheckAll:!1,rcheckAll:!1,lIsIndeterminate:!0,rIsIndeterminate:!0},checkTableVisible:!1,checkTableForm:{ltables:"",rtables:"",ltablescount:0,rtablescount:0}}},mounted:function(){},methods:{lHandleCheckAllChange:function(e){this.readerForm.ltables=e?this.fromTablesList:[],this.readerForm.lIsIndeterminate=!1},rHandleCheckAllChange:function(e){this.readerForm.rtables=e?this.toTablesList:[],this.readerForm.rIsIndeterminate=!1},lHandleCheckedChange:function(e){var t=e.length;this.readerForm.lcheckAll=t===this.fromTablesList.length,this.readerForm.lIsIndeterminate=t>0&&t<this.fromTablesList.length},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.rcheckAll=t===this.toTablesList.length,this.readerForm.rIsIndeterminate=t>0&&t<this.toTablesList.length},getLTables:function(){return this.readerForm.ltables},getRTables:function(){return this.readerForm.rtables},handlerShowCheckTable:function(){var e=this;this.checkTableVisible=!0;var t={readerTables:this.readerForm.ltables,writerTables:this.readerForm.rtables,readerSchema:this.schemaA,writerSchema:this.schemaB};P["b"](t).then((function(t){var a=t.content;e.checkTableForm.ltables=a.readerTables.join("\n"),e.checkTableForm.rtables=a.writerTables.join("\n"),e.checkTableForm.ltablescount=a.readerTables.length,e.checkTableForm.rtablescount=a.writerTables.length}))}}},M=V,W=Object(g["a"])(M,B,Q,!1,null,null,null),z=W.exports,U={name:"Mapper",components:{TableMapper:z},methods:{sendTables:function(e,t,a,r){this.$refs.mapper.fromTablesList=e,this.$refs.mapper.toTablesList=t,this.$refs.mapper.schemaA=a,this.$refs.mapper.schemaB=r},getLTables:function(){return this.$refs.mapper.getLTables()},getRTables:function(){return this.$refs.mapper.getRTables()}}},Y=U,G=Object(g["a"])(Y,J,O,!1,null,null,null),X=G.exports,K={name:"JsonBuildBatch",components:{Reader:_,Writer:H,Pagination:o["a"],Mapper:X},data:function(){return{configJson:"",active:1,jobTemplate:"",jobTemplateSelectDrawer:!1,list:null,currentRow:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",executorHandler:"",userId:0},blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],triggerNextTimes:"",registerNode:[],jobJson:"",temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",userId:0,jobConfigId:"",executorHandler:"executorJobHandler",glueType:"BEAN",jobJson:"",executorParam:"",replaceParam:"",jvmParam:"",incStartTime:"",templateId:0},loadingBody:!1}},created:function(){},methods:{next:function(){var e=this.$refs.reader.getData().tables,t=this.$refs.writer.getData().tables;1===this.active?this.active++:(2===this.active&&this.$refs.mapper.sendTables(e,t,this.$refs.reader.getData().tableSchema,this.$refs.writer.getData().tableSchema),4!==this.active&&this.active++)},last:function(){this.active>1&&this.active--},createJob:function(){var e=this;this.loadingBody=!0;var t=this.$refs.reader.getData(),a=this.$refs.writer.getData(),r=this.$refs.mapper.getLTables(),s=this.$refs.mapper.getRTables(),i={readerSplitPk:t.splitPk},o={},c={readerDatasourceId:t.datasourceId,readerDataSource:t.dataSource,readerSchema:t.tableSchema,readerTables:r,writerDatasourceId:a.datasourceId,writeDataSource:a.dataSource,writerSchema:a.tableSchema,writerTables:s,rdbmsReader:i,rdbmsWriter:o,templateId:this.temp.templateId};l["a"](c).then((function(t){e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),e.active=1,e.loadingBody=!1}))},handleCopy:function(e,t){Object(q["a"])(this.configJson,t),this.$message({message:"copy success",type:"success"})},handleJobTemplateSelectDrawer:function(){this.jobTemplateSelectDrawer=!this.jobTemplateSelectDrawer,this.jobTemplateSelectDrawer&&(this.fetchData(),this.getExecutor())},getReaderData:function(){return this.$refs.reader.getData()},getExecutor:function(){var e=this;i["b"]().then((function(t){var a=t.content;e.executorList=a}))},fetchData:function(){var e=this;this.listLoading=!0,i["c"](this.listQuery).then((function(t){var a=t.content;e.total=a.recordsTotal,e.list=a.data,e.listLoading=!1}))},handleCurrentChange:function(e){this.temp=Object.assign({},e),this.temp.id=void 0,this.temp.jobDesc=this.getReaderData().tableName,this.$refs.jobTemplateSelectDrawer.closeDrawer(),this.jobTemplate=e.id+"("+e.jobDesc+")",this.temp.templateId=e.id}}},Z=K,ee=Object(g["a"])(Z,r,s,!1,null,"acfe8f44",null);t["default"]=ee.exports}}]);