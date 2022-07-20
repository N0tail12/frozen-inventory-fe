<template>
  <a-card class="shadow">
    <h1>{{ $t("dashboard") }}</h1>
    <a-row type="flex" align="bottom" justify="space-between">
      <span class="text-bold">{{ $t("total_result") }} : {{ dataSource.length }}</span>
      <a-button type="primary" @click="gotoDetail('add')" style="display: inline-block">
        <i class="fas fa-plus mr-2"></i> <span>{{ $t("create") }}</span>
      </a-button>
    </a-row>
    <a-table
      class="mt-1"
      bordered
      :columns="columns"
      :dataSource="dataSource"
      :rowKey="(record, index) => index"
      :pagination="false"
    >
      <div slot="no" slot-scope="text, record, index">{{ index + 1 }}</div>
      <template v-for="column in columns" :slot="column.slots.title">
        <div :key="column.key" v-if="column.key == 'category_name'">
          <span>{{ $t(column.slots.title) }}</span>
          <br />
          <a-select v-model="dataFilter.category_name" mode="multiple" alowClear style="width: 200px">
            <a-select-option v-for="item in category" :key="item.category_code" :values="item.category_code">{{
              item.category_name
            }}</a-select-option>
          </a-select>
        </div>
        <div :key="column.key" v-else>
          <span>{{ $t(column.slots.title) }}</span>
        </div>
      </template>
      <template slot="stock_name" slot-scope="text, record">{{ record.stock_name }}</template>
      <template slot="stock_price" slot-scope="text, record">{{ record.stock_price }}</template>
      <template slot="stock_lot_number" slot-scope="text, record">{{ record.stock_lot_number }}</template>
      <template slot="manufacture_date" slot-scope="text, record">{{
        $moment(record.manufacture_date).format("YYYY-MM-DD")
      }}</template>
      <template slot="expiration_date" slot-scope="text, record"
        >{{ $moment(record.expiration_date).format("YYYY-MM-DD") }}
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
  </a-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { removeVietnameseTones } from "@/utils/skillSet/skillSet.utils.js";
import { columns } from "./const";
export default {
  data() {
    return {
      columns,
      dataFilter: {
        category_name: []
      }
    };
  },
  async created() {
    await this.getAllItem();
    await this.getAllCategory();
  },
  computed: {
    ...mapState({
      itemInfo: state => state.modules["dashboard"].itemInfo,
      category: state => state.modules["category"].category
    }),
    dataSource() {
      let clone = _.cloneDeep(this.itemInfo);
      clone = this.filerDataByName(clone);
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllItem: "modules/dashboard/getAllItem",
      deleteItem: "modules/dashboard/deleteItem",
      getAllCategory: "modules/category/getAllCategory"
    }),
    gotoDetail(id) {
      this.$router.push(`/dashboard/${id}`);
    },
    async handleDelete(id) {
      let data = await this.deleteItem(id);
      if (data) {
        this.$notification.success({
          message: "Delete Successfully",
          duration: 2.5
        });
        await this.getAllItem();
      }
    },
    filerDataByName(clone) {
      if (!this.dataFilter.category_name.length) {
        return clone;
      }
      clone = clone.filter(item => {
        for (let i = 0; i < this.dataFilter.category_name.length; ++i) {
          if (item.category_id == this.dataFilter.category_name[i]) {
            return true;
          }
        }
        return false;
      });
      return clone;
    }
  }
};
</script>

<style></style>
