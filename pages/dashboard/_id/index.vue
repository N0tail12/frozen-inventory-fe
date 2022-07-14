<template>
  <div>
    <a-card class="shadow">
      <a-row class="category-header">
        <a-col :span="12">
          <span class="h1" style="display: inline-block">
            <template v-if="routeId == 'add'">
              {{ $t("create_item") }}
            </template>
            <template v-else>{{ $t("detail") }} : {{ itemData.stock_name }} </template>
          </span>
        </a-col>
      </a-row>
      <div class="mt-3">
        <a-spin :tip="`${$t('loading')}...`" :spinning="loading" class="w-100 h-100"></a-spin>
        <a-row>
          <a-col v-bind="wrapperContainerCol">
            <a-form v-bind="formLayout" v-if="!loading" @submit.prevent="handleOk">
              <a-form-item :label="$t('stock_name')">
                <a-input v-model="itemData.stock_name"></a-input>
              </a-form-item>
              <a-form-item :label="$t('stock_price')">
                <a-input v-model="itemData.stock_price"></a-input>
              </a-form-item>
              <a-form-item :label="$t('stock_lot_number')">
                <a-input v-model="itemData.stock_lot_number"></a-input>
              </a-form-item>
              <a-form-item :label="$t('duration')" :label-col="labelCol" :wrapper-col="wrapperCol" :colon="false">
                <a-row>
                  <a-col class="pr-1" :span="12">
                    <a-date-picker
                      class="w-100"
                      :format="dateFormat"
                      :allowClear="true"
                      v-model="itemData.manufacture_date"
                    />
                  </a-col>
                  <a-col class="pl-1" :span="12">
                    <a-date-picker
                      class="w-100"
                      :format="dateFormat"
                      :allowClear="true"
                      v-model="itemData.expiration_date"
                    />
                  </a-col>
                </a-row>
              </a-form-item>
              <a-form-item :label="$t('category')">
                <a-select style="width: 100%" mode="single" v-model="itemData.category_id">
                  <a-select-option v-for="cate in category" :key="cate.category_code" :value="cate.category_code">{{
                    cate.category_name
                  }}</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :wrapper-col="actionCol" class="text-center" :colon="false">
                <a-button type="primary" html-type="submit" :loading="loading">
                  <i class="fas fa-save mr-1"></i>
                  {{ $t("save") }}
                </a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as CONST from "@/constants/index.js";
export default {
  data() {
    return {
      routeId: null,
      formLayout: {
        labelCol: CONST.LABEL_COLUMN_SINGLE,
        wrapperCol: CONST.WRAPPER_COLUMN_SINGLE
      },
      dateFormat: CONST.DATE_FORMAT,
      labelCol: CONST.LABEL_COLUMN_SINGLE,
      wrapperCol: CONST.WRAPPER_COLUMN_SINGLE,
      actionCol: CONST.ACTION_COLUMN_SINGLE,
      wrapperContainerCol: {
        xs: { span: 24 },
        md: { span: 24 },
        lg: { span: 16, offset: 4 },
        xl: { span: 14, offset: 4 },
        xxl: { span: 10, offset: 7 }
      },
      itemData: {
        stock_name: "",
        stock_code: "",
        stock_price: "",
        stock_lot_number: "",
        manufacture_date: this.$moment(),
        expiration_date: this.$moment().add(1, "year"),
        category_id: ""
      },
      loading: true
    };
  },
  computed: {
    ...mapState({
      category: state => state.modules["category"].category
    })
  },
  async created() {
    this.loading = true;
    this.routeId = this.$route.params.id;
    if (this.routeId != "add") {
      let { data } = await this.getItemByID(this.routeId);
      this.itemData = data[0];
      if (this.itemData.stock_code) {
        this.itemData.manufacture_date = this.$moment(this.itemData.manufacture_date).local();
        this.itemData.expiration_date = this.$moment(this.itemData.expiration_date).local();
        this.loading = false;
      }
    } else this.loading = false;
    await this.getAllCategory();
  },
  methods: {
    ...mapActions({
      getItemByID: "modules/dashboard/getItemByID",
      getAllCategory: "modules/category/getAllCategory",
      addItem: "modules/dashboard/addItem",
      updateItem: "modules/dashboard/updateItem"
    }),
    async handleOk() {
      if (this.routeId == "add") {
        let { data } = await this.addItem(this.itemData);
        if (data) {
          this.$notification.success({
            message: "Add Successfully",
            duration: 2.5
          });
          this.$router.push("/");
        } else {
          this.$notification.error({
            message: "Something went wrong",
            duration: 2.5
          });
        }
      } else {
        let { data } = await this.updateItem(this.itemData);
        if (data) {
          this.$notification.success({
            message: "Update Successfully",
            duration: 2.5
          });
          this.$router.push("/");
        } else {
          this.$notification.error({
            message: "Something went wrong",
            duration: 2.5
          });
        }
      }
    }
  }
};
</script>

<style></style>
