(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{1110:function(t,e,n){"use strict";n.r(e),n.d(e,"columns",(function(){return r}));var r=[{slots:{title:"no_"},key:"no",scopedSlots:{customRender:"no"},align:"center",width:"5%"},{slots:{title:"stock_name"},key:"stock_name",scopedSlots:{customRender:"stock_name"},align:"left"},{slots:{title:"manufacture_date"},key:"manufacture_date",scopedSlots:{customRender:"manufacture_date"},align:"left"},{slots:{title:"expiration_date"},key:"expiration_date",scopedSlots:{customRender:"expiration_date"},align:"left"},{slots:{title:"category_name"},key:"category_name",scopedSlots:{customRender:"category_name"},align:"left"}]},1121:function(t,e,n){"use strict";n.r(e);n(86),n(45),n(35),n(24),n(55),n(61);var r=n(18),o=n(37),c=n(34),l=n(1110);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{columns:l.columns,chartOptions:{chart:{width:380,type:"pie"},labels:[this.$t("normal"),this.$t("expiration_soon"),this.$t("expired")],colors:["#40ff00","#E91E63","#ff3300"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}},computed:d(d(d({},Object(c.e)(d({},Object(c.e)({itemInfo:function(t){return t.modules.dashboard.itemInfo}})))),Object(c.c)({filterExpiration:"modules/dashboard/filterExpiration"})),{},{series:function(){return[this.filterExpiration.reduce((function(t,e){return"normal"==e.type?t+1:t}),0),this.filterExpiration.reduce((function(t,e){return"expiration_soon"==e.type?t+1:t}),0),this.filterExpiration.reduce((function(t,e){return"expired"==e.type?t+1:t}),0)]},dataSource:function(){return _.cloneDeep(this.itemInfo)}}),methods:d({},Object(c.b)({getAllItem:"modules/dashboard/getAllItem"})),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllItem();case 2:case"end":return e.stop()}}),e)})))()}},y=n(21),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"shadow"},[n("h1",[t._v(t._s(t.$t("home")))]),t._v(" "),n("a-row",{attrs:{type:"flex",align:"bottom",justify:"center"}},[n("apexchart",{attrs:{type:"pie",width:"500",height:"500",options:t.chartOptions,series:t.series}})],1),t._v(" "),n("h1",{staticClass:"mt-3"},[t._v(t._s(t.$t("dashboard")))]),t._v(" "),n("a-table",{staticClass:"mt-1",attrs:{bordered:"",columns:t.columns,dataSource:t.dataSource,rowKey:function(t,e){return e},pagination:!1},scopedSlots:t._u([{key:"no",fn:function(text,e,r){return n("div",{},[t._v(t._s(r+1))])}},{key:"stock_name",fn:function(text,e){return[t._v(t._s(e.stock_name))]}},{key:"manufacture_date",fn:function(text,e){return[t._v(t._s(t.$moment(e.manufacture_date).format("YYYY-MM-DD")))]}},{key:"expiration_date",fn:function(text,e){return[t._v(t._s(t.$moment(e.expiration_date).format("YYYY-MM-DD"))+"\n    ")]}},{key:"category_name",fn:function(text,e){return[t._v(t._s(e.category_name))]}}])},[t._v(" "),t._l(t.columns,(function(e){return n("template",{slot:e.slots.title},[n("div",{key:e.key},[n("span",[t._v(t._s(t.$t(e.slots.title)))])])])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);