import Vue from "vue";
import lodash from "lodash";
import Print from "vue-print-nb";
import CKEditor from "ckeditor4-vue";
import { Network } from "vue-vis-network";

export default () => {
  Vue.component("network", Network);
  Vue.use(lodash);
  Vue.use(Print);
  Vue.use(CKEditor);
};
