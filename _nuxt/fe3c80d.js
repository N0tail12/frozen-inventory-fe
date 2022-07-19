(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{1111:function(t,e,n){"use strict";n.r(e),n.d(e,"columns",(function(){return o}));var o=[{slots:{title:"no_"},key:"no",scopedSlots:{customRender:"no"},align:"center",width:"5%"},{slots:{title:"stock_name"},key:"stock_name",scopedSlots:{customRender:"stock_name"},align:"left"},{slots:{title:"stock_price"},key:"stock_price",scopedSlots:{customRender:"stock_price"},align:"left"},{slots:{title:"stock_lot_number"},key:"stock_lot_number",scopedSlots:{customRender:"stock_lot_number"},align:"left"},{slots:{title:"manufacture_date"},key:"manufacture_date",scopedSlots:{customRender:"manufacture_date"},align:"left"},{slots:{title:"expiration_date"},key:"expiration_date",scopedSlots:{customRender:"expiration_date"},align:"left"},{slots:{title:"category_name"},key:"category_name",scopedSlots:{customRender:"category_name"},align:"left"},{slots:{title:"action"},key:"action",dataIndex:"id",scopedSlots:{customRender:"action"},width:"5%",defaultChecked:!0}]},1118:function(t,e,n){"use strict";n.r(e);n(86),n(45),n(35),n(24),n(55);var o=n(37),r=(n(61),n(18)),c=n(34),l=n(1111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{columns:l.columns}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllItem();case 2:case"end":return e.stop()}}),e)})))()},computed:f(f({},Object(c.e)({itemInfo:function(t){return t.modules.dashboard.itemInfo}})),{},{dataSource:function(){return _.cloneDeep(this.itemInfo)}}),methods:f(f({},Object(c.b)({getAllItem:"modules/dashboard/getAllItem",deleteItem:"modules/dashboard/deleteItem"})),{},{gotoDetail:function(t){this.$router.push("/dashboard/".concat(t))},handleDelete:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.deleteItem(t);case 2:if(!n.sent){n.next=7;break}return e.$notification.success({message:"Delete Successfully",duration:2.5}),n.next=7,e.getAllItem();case 7:case"end":return n.stop()}}),n)})))()}})},k=n(21),component=Object(k.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"shadow"},[n("h1",[t._v(t._s(t.$t("dashboard")))]),t._v(" "),n("a-row",{attrs:{type:"flex",align:"bottom",justify:"space-between"}},[n("span",{staticClass:"text-bold"},[t._v(t._s(t.$t("total_result"))+" : "+t._s(t.dataSource.length))]),t._v(" "),n("a-button",{staticStyle:{display:"inline-block"},attrs:{type:"primary"},on:{click:function(e){return t.gotoDetail("add")}}},[n("i",{staticClass:"fas fa-plus mr-2"}),t._v(" "),n("span",[t._v(t._s(t.$t("create")))])])],1),t._v(" "),n("a-table",{staticClass:"mt-1",attrs:{bordered:"",columns:t.columns,dataSource:t.dataSource,rowKey:function(t,e){return e},pagination:!1},scopedSlots:t._u([{key:"no",fn:function(text,e,o){return n("div",{},[t._v(t._s(o+1))])}},{key:"stock_name",fn:function(text,e){return[t._v(t._s(e.stock_name))]}},{key:"stock_price",fn:function(text,e){return[t._v(t._s(e.stock_price))]}},{key:"stock_lot_number",fn:function(text,e){return[t._v(t._s(e.stock_lot_number))]}},{key:"manufacture_date",fn:function(text,e){return[t._v(t._s(t.$moment(e.manufacture_date).format("YYYY-MM-DD")))]}},{key:"expiration_date",fn:function(text,e){return[t._v(t._s(t.$moment(e.expiration_date).format("YYYY-MM-DD"))+"\n    ")]}},{key:"category_name",fn:function(text,e){return[t._v(t._s(e.category_name))]}},{key:"action",fn:function(text,e){return[n("a-tooltip",{attrs:{title:t.$t("detail")}},[n("a-button",{attrs:{icon:"control"},on:{click:function(n){return t.gotoDetail(e.stock_code)}}})],1),t._v(" "),n("a-tooltip",{attrs:{title:t.$t("delete")}},[n("a-popconfirm",{attrs:{title:t.$t("are_you_sure"),"oke-text":t.$t("yes"),"cancel-text":t.$t("no")},on:{confirm:function(n){return t.handleDelete(e.stock_code)}}},[n("a-button",{attrs:{type:"danger",icon:"delete"}})],1)],1)]}}])},[t._v(" "),t._l(t.columns,(function(e){return n("template",{slot:e.slots.title},[n("div",{key:e.key},[n("span",[t._v(t._s(t.$t(e.slots.title)))])])])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);