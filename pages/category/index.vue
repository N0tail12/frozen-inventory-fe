<template>
  <a-card class="shadow">
    <h1>{{ $t("category") }}</h1>
    <a-row type="flex" align="bottom" justify="space-between">
      <span class="text-bold">{{ $t("total_result") }} : {{ dataSource.length }}</span>
      <a-button type="primary" style="display: inline-block">
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
            <a-button icon="control" @click="gotoDetail(record.stock_code)"></a-button>
          </a-tooltip>

          <a-tooltip :title="$t('delete')">
            <a-popconfirm
              :title="$t('are_you_sure')"
              :oke-text="$t('yes')"
              :cancel-text="$t('no')"
              @confirm="handleDelete(record.stock_code)"
            >
              <a-button type="danger" icon="delete"></a-button>
            </a-popconfirm>
          </a-tooltip>
        </template>
      </a-table>
    </a-row>
  </a-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { columns } from "./const";
export default {
  data() {
    return {
      columns
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
      getAllCategory: "modules/category/getAllCategory"
    }),
    async handleDelete(id) {
      let data = await this.deleteItem(id);
      if (data) {
        this.$notification.success({
          message: "Delete Successfully",
          duration: 2.5
        });
        await this.getAllItem();
      }
    }
  }
};
</script>

<style></style>
