(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1602:function(t,e,n){},"1c42":function(t,e,n){t.exports=n.p+"img/engieLogo.9e9d67b9.png"},5419:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("1da1"),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-layout"},[r("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900"}}),r("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Material+Icons"}}),r("v-app-bar",{attrs:{app:""}},[r("div",{staticClass:"d-flex align-center main-layout__bar"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("1c42"),transition:"scale-transition",width:"90",disabled:""}}),r("h2",{staticClass:"main-layout__title"},[t._v("Haystack")])],1),r("v-combobox",{staticClass:"main-layout__combobox",attrs:{items:t.getApiServers,label:"Add or Remove a targeted Endpoint API",dense:"",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAPI()}},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("div",{staticClass:"main-layout__combobox-row"},[r("span",{staticClass:"circle",style:t.circleApiClass(n)}),r("span",{staticClass:"pr-2 main-layout__combobox-api-text"},[t._v("\n            "+t._s(n)+"\n          ")]),r("v-icon",{staticClass:"material-icons main-layout__combobox-image",attrs:{size:"28"},on:{click:function(e){return t.changeApiServers(n)}}},[t._v("delete")])],1)]}}]),model:{value:t.comboboxInput,callback:function(e){t.comboboxInput=e},expression:"comboboxInput"}}),r("v-text-field",{staticClass:"summary-content__text-field",attrs:{label:"Filter",outlined:"",dense:"","background-color":"white"},on:{change:function(e){return t.updateFilter(e)}},model:{value:t.filterApi,callback:function(e){t.filterApi=e},expression:"filterApi"}}),r("v-spacer")],1),r("main",[r("router-view",{staticClass:"router-view"})],1)],1)},s=[],c=(n("7db0"),n("c740"),n("d81d"),n("fb6a"),n("4e827"),n("0d03"),n("a9e3"),n("ac1f"),n("1276"),{formatDate:function(t){var e=new Date(t.substring(2).split(" ")[0]);return e.getTime()},formatVal:function(t){return t.split(" ").length>1?Number(t.split(" ")[0].substring(2)):Number(t.substring(2))},sortChartDataByDate:function(t){var e=t.slice();return e.map((function(t){return t.sort((function(t,e){return e[0]-t[0]}))}))}}),u=c,l=(n("99af"),n("4de4"),n("a15b"),n("13d5"),n("7a82"),n("e439"),n("b64b"),n("5530")),p={formatIdEntity:function(t){return t.split(" ")[0].substring(2)},isRef:function(t){return"r:"===t.substring(0,2)},isEntityFromSource:function(t,e){var n=!1;return t.map((function(t){t.map((function(t){t.id.val!==e&&t.id.val.split(" ")[0]!==e.split(" ")[0]||(n=!0)}))})),n},formatEntityName:function(t){var e=t.id.val,n=e.substring(2).split(" ");return 1===n.length?t.dis?t.dis.val.substring(2):"@".concat(n[0]):(n.shift(),n.join(" "))},idToNameEntity:function(t){var e={};return t.map((function(t){t.map((function(t){var n=p.formatIdEntity(t.id.val),r=p.formatEntityName(t);e[n]=r}))})),e},formatXAxis:function(t){return t.map((function(t){return u.formatDate(t.ts).date}))},formatCharts:function(t){return t.map((function(t){return[u.formatDate(t.ts),u.formatVal(t.val)]}))},formatYAxis:function(t){return t.map((function(t){return u.formatVal(t.val)}))},renameObjectKey:function(t,e,n){return Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(t,e)),delete t[e],t},findSimilarObjectsKeyWithSameValues:function(t,e){var n=[];return Object.keys(t).map((function(r){e.hasOwnProperty(r)&&e[r].val===t[r].val&&"id"!==r&&n.push(r)})),n},findSimilarObjectsKeyWithDifferentsValues:function(t,e){var n=[];return Object.keys(t).map((function(r){e.hasOwnProperty(r)&&e[r].val!==t[r].val&&n.push(r)})),n},addApiSourceInformationToEntity:function(t,e){return t.map((function(t){Object.keys(t).map((function(n){if("string"===typeof t[n]){var r={val:t[n],apiSource:e};t[n]=r}}))})),t},addApiSourceInformation:function(t){return t.slice().map((function(t,e){t.map((function(t){Object.keys(t).map((function(n){if("string"===typeof t[n]){var r={val:t[n],apiSource:e};t[n]=r}}))}))})),t},getKeyAlreadyDuplicated:function(t,e){var n=Object.keys(t).map((function(t){var e=t.split("_");if(e.length>1&&Number(e[1])){var n={};return n[e[0]]=t,n}})).filter((function(t){return t}));return Object.keys(e).map((function(r){var i=n.filter((function(t){return t[r]}));i.length>0&&(0===i.filter((function(n){return t[n[r]].val===e[r].val})).length?e=p.renameObjectKey(e,r,"".concat(r,"_").concat(e[r].apiSource)):delete e[r])})),e},copyArrayOfArrayWithObject:function(t){var e=[];return t.map((function(t){var n=[];t.map((function(t){n.push(Object(l["a"])({},t))})),e.push(n)})),e},groupAllEntitiesById:function(t){var e=p.copyArrayOfArrayWithObject(t),n=e.shift();return e.reduce((function(t,e){return p.groupTwoEntitiesById(t,e)}),n)},groupTwoEntitiesById:function(t,e){var n=[];return t.map((function(r){var i=p.formatIdEntity(r.id.val);e.map((function(a){var o=p.formatIdEntity(a.id.val);if(i===o){var s=p.findSimilarObjectsKeyWithSameValues(r,a);s.map((function(t){a[t]=r[t]})),a["id"]=r["id"],a=p.getKeyAlreadyDuplicated(r,a);var c=p.findSimilarObjectsKeyWithDifferentsValues(r,a);c.map((function(t){"id"===t?a[t]=r[t]:(r=p.renameObjectKey(r,t,"".concat(t,"_").concat(r[t].apiSource)),a=p.renameObjectKey(a,t,"".concat(t,"_").concat(a[t].apiSource)),delete r[t],delete a[t])})),n.push(Object(l["a"])(Object(l["a"])({},r),a)),e=e.filter((function(t){return p.formatIdEntity(t.id.val)!==i})),t=t.filter((function(t){return p.formatIdEntity(t.id.val)!==i}))}}))})),n.concat(t.concat(e))},getLinkBetweenEntities:function(t){var e={fromSource:["#dc143c","#0000ff","#00a86b","#cc5500","#6A0DAD","#805A46"],outFromSource:"#c1e1ec"},n={fromSource:10,outFromSource:5},r=[],i=p.idToNameEntity(t),a=[];return t.map((function(o){o.map((function(o){var s=i[p.formatIdEntity(o.id.val)];Object.keys(o).map((function(c){if(p.isRef(o[c].val)&&"id"!==c){var u=i[p.formatIdEntity(o[c].val)]?i[p.formatIdEntity(o[c].val)]:p.formatIdEntity(o[c].val),l=[s,u];p.isEntityFromSource(t,o[c].val)?a.push({id:u,color:e.fromSource[o.id.apiSource-1],marker:{radius:n.fromSource}}):a.push({id:u,color:e.outFromSource,marker:{radius:n.outFromSource}}),r.push(l)}})),a.push({id:s,color:e.fromSource[o.id.apiSource-1],dis:o.dis?o.dis.val.substring(2):s,marker:{radius:n.fromSource}})}))})),[r,a,i]}},f=p,d=["#dc143c","#0000ff","#00a86b","#cc5500","#6A0DAD","#805A46"],h={name:"VMainLayout",data:function(){return{comboboxInput:""}},computed:{filterApi:function(){return this.$store.getters.filterApi},getApiServers:function(){return this.$store.getters.apiServers.map((function(t){return t.haystackApiHost}))}},methods:{isApiServerAlreadyExists:function(t){return Boolean(this.$store.getters.apiServers.find((function(e){return e.haystackApiHost===t})))},changeApiServers:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$store.commit("DELETE_HAYSTACK_API",{haystackApiHost:t}),n.next=3,e.$store.dispatch("reloadAllData",{entity:e.$store.getters.filterApi});case 3:e.comboboxInput="";case 4:case"end":return n.stop()}}),n)})))()},updateAPI:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.comboboxInput,t.isApiServerAlreadyExists(n)){e.next=6;break}return t.$store.dispatch("createApiServer",{haystackApiHost:n}),e.next=5,t.$store.dispatch("reloadAllData",{entity:t.$store.getters.filterApi});case 5:t.comboboxInput="";case 6:case"end":return e.stop()}}),e)})))()},updateFilter:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t===e.$store.getters.filterApi){n.next=4;break}return e.$store.commit("SET_FILTER_API",{filterApi:t}),n.next=4,e.$store.dispatch("reloadAllData",{entity:t});case 4:case"end":return n.stop()}}),n)})))()},circleApiClass:function(t){var e=this.$store.getters.apiServers.findIndex((function(e){return e.haystackApiHost===t}));return"background: ".concat(d[e],";")}}},m=h,v=(n("c351"),n("2877")),y=n("6544"),g=n.n(y),b=n("40dc"),w=n("2b5d"),E=n("132d"),S=n("adda"),_=n("2fa4"),A=n("8654"),k=Object(v["a"])(m,o,s,!1,null,null,null),x=k.exports;g()(k,{VAppBar:b["a"],VCombobox:w["a"],VIcon:E["a"],VImg:S["a"],VSpacer:_["a"],VTextField:A["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"summary-content"},[n("div",{staticClass:"summary-content__graph"},[t.isDataLoaded?n("c-graph",{attrs:{dataEntities:t.getRelationGraphEntity(t.entities),id:"graph-entities",title:"Entities links"},on:{pointClicked:t.onGraphClick}}):t._e()],1),t.isDataLoaded?n("div",t._l(t.entitiesGroupedById,(function(e){return n("c-entity-row",{key:e.id.val,ref:t.getEntityName(e),refInFor:!0,staticClass:"summary-content__entity-row",attrs:{id:e.id.val,dataEntity:e,his:t.getHistories(e.id.val),isDataLoaded:t.isDataLoaded}})})),1):t._e()])},I=[],j=(n("caad"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entity-row__container"},[n("h2",{staticClass:"entity-row__title",attrs:{"data-test-entity-title":""}},[t._v(t._s(t.entityName))]),n("div",{staticClass:"content-container"},[n("div",{staticClass:"entity-row__table"},[n("v-data-table",{attrs:{headers:t.headers,items:t.tableValues,"hide-default-footer":!0,"disable-pagination":!0,"custom-sort":t.customSort,dense:!0,"item-class":"row_class"},scopedSlots:t._u([{key:"item.value",fn:function(e){var r=e.item;return[t.isCoordinate(r.value)?n("div",[n("a",{attrs:{href:t.getUrlCoordinate(r.value),target:"_blank"}},[t._v(t._s(r.value.substring(2)))]),t.isDuplicateKey(r.tag)?n("v-icon",{staticClass:"material-icons entity-row__click-button"},[t._v("warning")]):t._e()],1):t.isRef(r.value)?n("div",[n("span",[t._v(t._s(t.getRefName(r)))]),n("v-icon",{staticClass:"material-icons entity-row__click-button",on:{click:function(e){return t.copyText(r)}}},[t._v("content_copy")])],1):t.isDuplicateKey(r.tag)?n("div",[n("span",[t._v(t._s(r.value))]),t.hisUri(r.tag)?n("v-icon",{staticClass:"material-icons entity-row__click-button"},[t._v("warning")]):t._e()],1):n("span",[t._v(t._s(r.value))])]}}],null,!0)})],1),n("div",{staticClass:"entity-row__chart"},[t.displayChart?n("c-chart",{attrs:{"data-test-history-chart":"",id:t.chartId,data:t.sortDataChart(t.data),unit:t.unit,title:"Historical values"}}):t._e()],1)])])}),C=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-chart__chart",attrs:{id:t.id}})},D=[],T=n("ea7f"),H=n.n(T),M={name:"CChart.vue",props:{id:{type:String,default:""},title:{type:String,default:""},yLabel:{type:String,default:""},xLabel:{type:String,default:""},data:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{colors:["#dc143c","#0000ff","#00a86b","#cc5500"]}},mounted:function(){var t=this;this.chart=H.a.chart(this.id,{title:{text:this.title},chart:{width:"700",height:"400"},xAxis:{type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{valueSuffix:this.unit},series:this.data.map((function(e,n){return{data:t.data[n],color:d[n]}}))})}},L=M,N=Object(v["a"])(L,R,D,!1,null,null,null),$=N.exports,P={name:"CEntityRow",components:{CChart:$},props:{id:{type:String,default:""},his:{type:Array,default:function(){return[]}},dataEntity:{type:Object,default:function(){}},isFromExternalSource:{type:Boolean,default:!1},isDataLoaded:{type:Boolean,default:!1}},data:function(){return{headers:[{text:"Tag",align:"start",sortable:!1,value:"tag"},{text:"Value",value:"value",sortable:!1}]}},computed:{tableValues:function(){var t=this;return Object.keys(this.dataEntity).map((function(e){var n=t.getEntityValue(e);return{tag:e.split("_")[0],value:n.val,row_class:["✓"===n.val?"".concat(e," haystack-marker"):e,"apiSource_".concat(n.apiSource)]}}))},entityId:function(){return this.id.split(" ")[0]},displayChart:function(){return this.his.filter((function(t){return t?t.length>0:t})).length>0&&this.isDataLoaded},chartId:function(){return this.isFromExternalSource?"".concat(this.id,"-external"):this.id},entityName:function(){return f.formatEntityName(this.dataEntity)},data:function(){return this.his.map((function(t){return t?f.formatCharts(t):null}))},dataEntityKeys:function(){return Object.keys(this.dataEntity)},unit:function(){return this.dataEntity.unit?this.dataEntity.unit.val.substring(2):""}},methods:{sortDataChart:function(t){return u.sortChartDataByDate(t)},getRefName:function(t){if("id"===t.tag){var e=t.value.substring(2).split(" ");return 1===e.length?this.dataEntity.dis?this.dataEntity.dis.val.substring(2):"@".concat(e[0]):(e.shift(),e.join(" "))}var n=t.value.substring(2).split(" ");return 1===n.length?"@".concat(n[0]):(n.shift(),n.join(" "))},hisUri:function(t){return"hisURI"!==t},isRef:function(t){return"string"===typeof t&&"r:"===t.substring(0,2)},isDuplicateKey:function(t){var e=Object.keys(this.dataEntity).filter((function(e){return e.split("_")[0]===t}));return e.length>1},isCoordinate:function(t){return"string"===typeof t&&"c:"===t.substring(0,2)},customSort:function(t){var e=t.slice(),n=e.sort((function(t,e){return t.tag.localeCompare(e.tag)})).sort((function(t,e){return"id"===t.tag?-1:"id"===e.tag?1:0}));return n},copyText:function(t){var e="@".concat(t.value.split(" ")[0].substring(2)),n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n)},getNumberValue:function(t){var e=this.dataEntity[t].val.substring(2).split(" "),n=e.length>1?"".concat(Number(e[0])," ").concat(e[1]):Number(e[0]);return{val:n,apiSource:this.dataEntity[t].apiSource}},getUrlCoordinate:function(t){return"http://www.google.com/maps/place/".concat(t.substring(2))},getEntityValue:function(t){var e=this.dataEntity[t].val;return"m:"===e?{val:"✓",apiSource:this.dataEntity[t].apiSource}:"c:"===e.substring(0,2)||"r:"===e.substring(0,2)?{val:e,apiSource:this.dataEntity[t].apiSource}:"n:"===e.substring(0,2)?this.getNumberValue(t):"r:"===e.substring(0,2)?{val:e,apiSource:this.dataEntity[t].apiSource}:""===e?{val:"",apiSource:this.dataEntity[t].apiSource}:{val:e.substring(2),apiSource:this.dataEntity[t].apiSource}}}},V=P,F=(n("f33a"),n("8fea")),Y=Object(v["a"])(V,j,C,!1,null,null,null),B=Y.exports;g()(Y,{VDataTable:F["a"],VIcon:E["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-chart__chart",attrs:{id:t.id}})},X=[];n("c0b6"),n("d3b7"),n("ddb0");n("2888")(H.a);var G={name:"CGraph.vue",props:{id:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},keys:{type:Array,default:function(){return["from","to"]}},dataEntities:{type:Array,default:function(){return[]}}},mounted:function(){(function(t){t.wrap(t.seriesTypes.networkgraph.prototype.pointClass.prototype,"getLinkPath",(function(t){var e=this.fromNode,n=this.toNode,r=Math.atan((e.plotX-n.plotX)/(e.plotY-n.plotY));if(r){var i=["M",e.plotX,e.plotY,n.plotX,n.plotY],a=n,o=40,s=5,c=5;return e.plotY<n.plotY?(i.push(a.plotX-o*Math.sin(r),a.plotY-o*Math.cos(r)),i.push(a.plotX-o*Math.sin(r)-s*Math.sin(r)-c*Math.cos(r),a.plotY-o*Math.cos(r)-s*Math.cos(r)+c*Math.sin(r)),i.push(a.plotX-o*Math.sin(r),a.plotY-o*Math.cos(r)),i.push(a.plotX-o*Math.sin(r)-s*Math.sin(r)+c*Math.cos(r),a.plotY-o*Math.cos(r)-s*Math.cos(r)-c*Math.sin(r))):(i.push(a.plotX+o*Math.sin(r),a.plotY+o*Math.cos(r)),i.push(a.plotX+o*Math.sin(r)+s*Math.sin(r)-c*Math.cos(r),a.plotY+o*Math.cos(r)+s*Math.cos(r)+c*Math.sin(r)),i.push(a.plotX+o*Math.sin(r),a.plotY+o*Math.cos(r)),i.push(a.plotX+o*Math.sin(r)+s*Math.sin(r)+c*Math.cos(r),a.plotY+o*Math.cos(r)+s*Math.cos(r)-c*Math.sin(r))),i}return[["M",e.plotX||0,e.plotY||0],["L",n.plotX||0,n.plotY||0]]}))})(H.a),this.chart=H.a.chart(this.id,{title:{text:this.title},chart:{type:"networkgraph",width:"1400",height:"600"},plotOptions:{networkgraph:{keys:this.keys,layoutAlgorithm:{enableSimulation:!1,friction:1,linkLength:70},point:{events:{click:function(t){this.$emit("pointClicked",t.point.id)}.bind(this)}}}},credits:{enabled:!1},tooltip:{enabled:!0,formatter:function(){return"<div> <span> ".concat(this.point.dis," </span> </div>")}},series:[{dataLabels:{enabled:!0,linkFormat:""},id:"lang-tree",data:this.dataEntities[0],nodes:this.dataEntities[1]}]})}},W=G,U=Object(v["a"])(W,K,X,!1,null,null,null),J=U.exports,z={name:"VSummaryContent",components:{CEntityRow:B,CGraph:J},computed:{filterApi:function(){return this.$store.getters.filterApi},isDataLoaded:function(){return this.$store.getters.isDataLoaded},entities:function(){return this.$store.getters.entities},idsWithHis:function(){return this.entitiesGroupedById.filter((function(t){return t.his})).map((function(t){return f.formatIdEntity(t.id.val)}))},histories:function(){return this.$store.getters.histories},getDefaultApiHost:function(){return this.$store.getters.apiServers[0].haystackApiHost},entitiesGroupedById:function(){var t=this.entities.slice();return 1===t.length?t[0]:this.groupByIdEntities(t)}},methods:{isPointFromSource:function(t,e){return e.find((function(e){return e.id===t&&["#dc143c","#0000ff","#00a86b","#cc5500"].includes(e.color)}))},onGraphClick:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.getRelationGraphEntity(e.entities),i=r[1],a=r[2],e.isPointFromSource(t,i)){n.next=10;break}return o="id==@".concat(a[t]||t),n.next=7,e.$store.dispatch("reloadAllData",{entity:o});case 7:e.$store.commit("SET_FILTER_API",{filterApi:o}),n.next=12;break;case 10:e.$refs[t][0].$el.scrollIntoView(),window.scrollBy(0,-90);case 12:case"end":return n.stop()}}),n)})))()},getEntityName:function(t){return f.formatEntityName(t)},groupByIdEntities:function(t){return f.groupAllEntitiesById(t)},getHistory:function(t,e){var n=f.formatIdEntity(t);return this.histories[e][n]?this.histories[e][n]:null},getHistories:function(t){var e=this;return 1===this.histories.length?[this.getHistory(t,0)]:this.histories.map((function(n,r){return e.getHistory(t,r)}))},updateFilter:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t===e.$store.getters.filterApi){n.next=4;break}return e.$store.commit("SET_FILTER_API",{filterApi:t}),n.next=4,e.$store.dispatch("reloadAllData",{entity:t});case 4:case"end":return n.stop()}}),n)})))()},getRelationGraphEntity:function(t){return f.getLinkBetweenEntities(t)}},beforeMount:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("reloadAllData",{entity:""});case 2:case"end":return e.stop()}}),e)})))()}},q=z,Q=(n("64dd"),Object(v["a"])(q,O,I,!1,null,null,null)),Z=Q.exports;i["a"].use(a["a"]);var tt=new a["a"]({routes:[{path:"",component:x,children:[{path:"/",name:"summary",component:Z}]}]});tt.beforeEach((function(t,e,n){return n()}));var et=tt,nt=(n("4160"),n("3ca3"),n("159b"),n("2f62")),rt=n("d4ec"),it=n("bee2"),at=n("bc3a"),ot=n.n(at),st=function(){function t(e){var n=e.haystackApiHost;Object(rt["a"])(this,t),this.haystackApiHost=n}return Object(it["a"])(t,[{key:"api",get:function(){return ot.a.create({baseURL:"".concat(this.haystackApiHost),timeout:2e4,withCredentials:!1,headers:{"Content-Type":"application/json"}})}},{key:"getEntity",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.api.get("/read?filter=".concat(e,"&limit=40"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getHistory",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"today",t.prev=1,t.next=4,this.api.get("/hisRead?id=@".concat(e,"&range=").concat(n));case 4:return r=t.sent,t.abrupt("return",r.data.rows);case 8:return t.prev=8,t.t0=t["catch"](1),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),ct=st;i["a"].use(nt["a"]),window.env=window.env||{};var ut={entities:[[]],histories:[{}],apiServers:[new ct({haystackApiHost:"".concat(window.location.origin).concat(window.location.pathname)})],isDataLoaded:!1,filterApi:""},lt={SET_ENTITIES:function(t,e){var n=e.entities,r=e.apiNumber,i=t.entities.slice();i.length<r+1?i.push(n):i[r]=n,t.entities=i},SET_HISTORIES:function(t,e){var n=e.idHistories,r=e.apiNumber,i=t.histories.slice();i.length<r+1?i.push(n):i[r]=n,t.histories=i},DELETE_HAYSTACK_API:function(t,e){var n=e.haystackApiHost,r=t.apiServers.slice(),i=t.histories.slice(),a=t.entities.slice(),o=t.apiServers.findIndex((function(t){return t.haystackApiHost===n}));t.histories=i.slice(o,o),t.entities=a.slice(o,o),t.apiServers=r.filter((function(t){return t.haystackApiHost!==n}))},SET_IS_DATA_LOADED:function(t,e){var n=e.isDataLoaded;t.isDataLoaded=n},SET_API_SERVERS:function(t,e){var n=e.apiServers,r=[];n.map((function(t){r.push(new ct({haystackApiHost:t}))})),t.apiServers=n},SET_HAYSTACK_API:function(t,e){var n=e.haystackApiHost,r=t.apiServers.slice();r.push(new ct({haystackApiHost:n})),t.apiServers=r},SET_FILTER_API:function(t,e){var n=e.filterApi;t.filterApi=n}},pt={apiServers:function(t){return t.apiServers},entities:function(t){return t.entities},histories:function(t){return t.histories},apiNumber:function(t){return t.apiServers.length},isDataLoaded:function(t){return t.isDataLoaded},filterApi:function(t){return t.filterApi}},ft={createApiServer:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.haystackApiHost,n.next=3,t.commit("SET_HAYSTACK_API",{haystackApiHost:r});case 3:case"end":return n.stop()}}),n)})))()},commitNewEntities:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.entities,i=e.apiNumber,n.next=3,t.commit("SET_ENTITIES",{entities:r,apiNumber:i});case 3:case"end":return n.stop()}}),n)})))()},fetchEntity:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.entity,i=e.apiNumber,n.next=3,ut.apiServers[i].getEntity(r);case 3:return a=n.sent,n.next=6,t.dispatch("commitNewEntities",{entities:f.addApiSourceInformationToEntity(a.rows,i+1),apiNumber:i});case 6:case"end":return n.stop()}}),n)})))()},fetchHistories:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.idsEntityWithHis,a=e.apiNumber,n.next=3,Promise.all(i.map(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",ut.apiServers[a].getHistory(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:return o=n.sent,s={},i.forEach((function(t,e){return s[t]=o[e]})),n.next=8,t.commit("SET_HISTORIES",{idHistories:s,apiNumber:a});case 8:case"end":return n.stop()}}),n)})))()},fetchAllEntity:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.entity,a=t.getters.apiServers,n.t0=Promise,n.next=5,a.map(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("fetchEntity",{entity:i,apiNumber:r});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 5:return n.t1=n.sent,n.next=8,n.t0.all.call(n.t0,n.t1);case 8:case"end":return n.stop()}}),n)})))()},fetchAllHistories:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getters.apiServers,i=ut.entities.slice(),a=1===i.length?i[0]:f.groupAllEntitiesById(i),o=a.filter((function(t){return t.his})).map((function(t){return f.formatIdEntity(t.id.val)})),e.t0=Promise,e.next=7,n.map(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("fetchHistories",{idsEntityWithHis:o,apiNumber:r});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return e.t1=e.sent,e.next=10,e.t0.all.call(e.t0,e.t1);case 10:case"end":return e.stop()}}),e)})))()},reloadAllData:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.entity,t.commit("SET_IS_DATA_LOADED",{isDataLoaded:!1}),n.t0=Promise,n.next=5,t.dispatch("fetchAllEntity",{entity:i});case 5:return n.t1=n.sent,n.t2=[n.t1],n.next=9,n.t0.all.call(n.t0,n.t2)["finally"](Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("fetchAllHistories");case 2:case"end":return e.stop()}}),e)}))));case 9:t.commit("SET_IS_DATA_LOADED",{isDataLoaded:!0});case 10:case"end":return n.stop()}}),n)})))()}},dt=new nt["a"].Store({actions:ft,getters:pt,mutations:lt,state:ut}),ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},mt=[],vt={name:"App",data:function(){return{}}},yt=vt,gt=n("7496"),bt=n("f6c4"),wt=Object(v["a"])(yt,ht,mt,!1,null,null,null),Et=wt.exports;g()(wt,{VApp:gt["a"],VMain:bt["a"]});var St=n("f309");n("5363");i["a"].use(St["a"],{iconfont:"mdi"});var _t=new St["a"]({});function At(){return kt.apply(this,arguments)}function kt(){return kt=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:new i["a"]({router:et,store:dt,vuetify:_t,render:function(t){return t(Et)}}).$mount("#app");case 1:case"end":return t.stop()}}),t)}))),kt.apply(this,arguments)}i["a"].config.productionTip=!1,At()},"64dd":function(t,e,n){"use strict";n("1602")},"9c03":function(t,e,n){},c351:function(t,e,n){"use strict";n("5419")},f33a:function(t,e,n){"use strict";n("9c03")}});
//# sourceMappingURL=app.bb95df9c.js.map