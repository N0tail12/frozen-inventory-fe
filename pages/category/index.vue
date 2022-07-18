<template>
  <a-card class="shadow">
    <h1>{{ $t("category") }}</h1>
    <a-row type="flex" align="bottom" justify="space-between">
      <span class="text-bold">{{ $t("total_result") }} : {{ dataSource.length }}</span>
      <a-button type="primary" style="display: inline-block" @click="handleAdd">
        <i class="fas fa-plus mr-2"></i> <span>{{ $t("create") }}</span>
      </a-button>
    </a-row>
    <a-row type="flex" align="bottom" justify="center">
      <a-table
        class="mt-1"
        bordered
        style="width: 70%"
        :columns="columns"
        :dataSource="dataSource"
        :rowKey="(record, index) => index"
        :pagination="false"
      >
        <div slot="no" slot-scope="text, record, index">{{ index + 1 }}</div>
        <template v-for="column in columns" :slot="column.slots.title">
          <div :key="column.key">
            <span>{{ $t(column.slots.title) }}</span>
          </div>
        </template>
        <template slot="category_name" slot-scope="text, record">{{ record.category_name }}</template>
        <template slot="action" slot-scope="text, record">
          <a-tooltip :title="$t('detail')">
            <a-button icon="control" @click="handleDetail(record)"></a-button>
          </a-tooltip>

          <a-tooltip :title="$t('delete')">
            <a-popconfirm
              :title="$t('are_you_sure')"
              :oke-text="$t('yes')"
              :cancel-text="$t('no')"
              @confirm="handleDelete(record.category_code)"
            >
              <a-button type="danger" icon="delete"></a-button>
            </a-popconfirm>
          </a-tooltip>
        </template>
      </a-table>
      <a-modal :visible="showModal" @ok="handleOk(modalData)" @cancel="handleCancel" :title="$t('category_setting')">
        <a-form-item v-bind="layoutFormItem" :label="$t('category_name')">
          <a-input :value="modalData.category_name" v-model="modalData.category_name"></a-input>
        </a-form-item>
      </a-modal>
    </a-row>
  </a-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { columns } from "./const";
export default {
  data() {
    return {
      columns,
      modalData: {
        category_name: ""
      },
      showModal: false,
      isCreated: false,
      layoutFormItem: {
        labelCol: { span: 4 },
        wrapperCol: { span: 12 }
      }
    };
  },
  async created() {
    await this.getAllCategory();
  },
  computed: {
    ...mapState({
      category: state => state.modules["category"].category
    }),
    dataSource() {
      let clone = _.cloneDeep(this.category);
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllCategory: "modules/category/getAllCategory",
      addCategory: "modules/category/addCategory",
      updateCategory: "modules/category/updateCategory",
      deleteCategory: "modules/category/deleteCategory"
    }),
    async handleDelete(id) {
      let data = await this.deleteCategory(id);
      console.log(data);
      if (data) {
        this.$notification.success({
          message: "Delete Successfully",
          duration: 2.5
        });
        await this.getAllCategory();
      }
    },
    async handleOk(id) {
      if (this.isCreated) {
        let data = await this.addCategory(this.modalData);
        if (data) {
          this.$notification.success({
            message: "Add Successfully",
            duration: 2.5
          });
          await this.getAllCategory();
          this.showModal = false;
          this.isCreated = false;
        }
      } else {
        let data = await this.updateCategory(id);
        if (data) {
          this.$notification.success({
            message: "Update Successfully",
            duration: 2.5
          });
          await this.getAllCategory();
          this.showModal = false;
          this.isCreated = false;
        }
      }
    },
    handleCancel() {
      this.showModal = false;
      this.isCreated = false;
    },
    handleAdd() {
      this.showModal = true;
      this.isCreated = true;
      this.modalData.category_name = "";
    },
    handleDetail(data) {
      this.modalData = _.cloneDeep(data);
      this.showModal = true;
      this.isCreated = false;
      console.log(this.modalData);
    }
  }
};
</script>

<style></style>
