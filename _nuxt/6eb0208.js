(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{1109:function(t,e,n){"use strict";n.r(e),n.d(e,"columns",(function(){return r}));var r=[{slots:{title:"no_"},key:"no",scopedSlots:{customRender:"no"},align:"center",width:"5%"},{slots:{title:"category_name"},key:"category_name",scopedSlots:{customRender:"category_name"},align:"right"},{slots:{title:"action"},key:"action",dataIndex:"id",scopedSlots:{customRender:"action"},width:"5%",defaultChecked:!0}]},1118:function(t,e,n){"use strict";n.r(e);n(86),n(45),n(35),n(24),n(55);var r=n(37),o=(n(61),n(18)),c=n(34),l=n(1109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{columns:l.columns,modalData:{category_name:""},showModal:!1,isCreated:!1,layoutFormItem:{labelCol:{span:4},wrapperCol:{span:12}}}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllCategory();case 2:case"end":return e.stop()}}),e)})))()},computed:y(y({},Object(c.e)({category:function(t){return t.modules.category.category}})),{},{dataSource:function(){return _.cloneDeep(this.category)}}),methods:y(y({},Object(c.b)({getAllCategory:"modules/category/getAllCategory",addCategory:"modules/category/addCategory",updateCategory:"modules/category/updateCategory",deleteCategory:"modules/category/deleteCategory"})),{},{handleDelete:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.deleteCategory(t);case 2:if(!n.sent){n.next=7;break}return e.$notification.success({message:"Delete Successfully",duration:2.5}),n.next=7,e.getAllCategory();case 7:case"end":return n.stop()}}),n)})))()},handleOk:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isCreated){n.next=12;break}return n.next=3,e.addCategory(e.modalData);case 3:if(!n.sent){n.next=10;break}return e.$notification.success({message:"Add Successfully",duration:2.5}),n.next=8,e.getAllCategory();case 8:e.showModal=!1,e.isCreated=!1;case 10:n.next=21;break;case 12:return n.next=14,e.updateCategory(t);case 14:if(!n.sent){n.next=21;break}return e.$notification.success({message:"Update Successfully",duration:2.5}),n.next=19,e.getAllCategory();case 19:e.showModal=!1,e.isCreated=!1;case 21:case"end":return n.stop()}}),n)})))()},handleCancel:function(){this.showModal=!1,this.isCreated=!1},handleAdd:function(){this.showModal=!0,this.isCreated=!0,this.modalData.category_name=""},handleDetail:function(data){this.modalData=_.cloneDeep(data),this.showModal=!0,this.isCreated=!1}})},f=n(21),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"shadow"},[n("h1",[t._v(t._s(t.$t("category")))]),t._v(" "),n("a-row",{attrs:{type:"flex",align:"bottom",justify:"space-between"}},[n("span",{staticClass:"text-bold"},[t._v(t._s(t.$t("total_result"))+" : "+t._s(t.dataSource.length))]),t._v(" "),n("a-button",{staticStyle:{display:"inline-block"},attrs:{type:"primary"},on:{click:t.handleAdd}},[n("i",{staticClass:"fas fa-plus mr-2"}),t._v(" "),n("span",[t._v(t._s(t.$t("create")))])])],1),t._v(" "),n("a-row",{attrs:{type:"flex",align:"bottom",justify:"center"}},[n("a-table",{staticClass:"mt-1",staticStyle:{width:"70%"},attrs:{bordered:"",columns:t.columns,dataSource:t.dataSource,rowKey:function(t,e){return e},pagination:!1},scopedSlots:t._u([{key:"no",fn:function(text,e,r){return n("div",{},[t._v(t._s(r+1))])}},{key:"category_name",fn:function(text,e){return[t._v(t._s(e.category_name))]}},{key:"action",fn:function(text,e){return[n("a-tooltip",{attrs:{title:t.$t("detail")}},[n("a-button",{attrs:{icon:"control"},on:{click:function(n){return t.handleDetail(e)}}})],1),t._v(" "),n("a-tooltip",{attrs:{title:t.$t("delete")}},[n("a-popconfirm",{attrs:{title:t.$t("are_you_sure"),"oke-text":t.$t("yes"),"cancel-text":t.$t("no")},on:{confirm:function(n){return t.handleDelete(e.category_code)}}},[n("a-button",{attrs:{type:"danger",icon:"delete"}})],1)],1)]}}])},[t._v(" "),t._l(t.columns,(function(e){return n("template",{slot:e.slots.title},[n("div",{key:e.key},[n("span",[t._v(t._s(t.$t(e.slots.title)))])])])}))],2),t._v(" "),n("a-modal",{attrs:{visible:t.showModal,title:t.$t("category_setting")},on:{ok:function(e){return t.handleOk(t.modalData)},cancel:t.handleCancel}},[n("a-form-item",t._b({attrs:{label:t.$t("category_name")}},"a-form-item",t.layoutFormItem,!1),[n("a-input",{attrs:{value:t.modalData.category_name},model:{value:t.modalData.category_name,callback:function(e){t.$set(t.modalData,"category_name",e)},expression:"modalData.category_name"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);