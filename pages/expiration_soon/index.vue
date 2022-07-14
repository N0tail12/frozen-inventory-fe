<template>
  <a-card class="shadow">
    <h1>{{ $t("expiration_soon") }}</h1>
    <a-row type="flex" align="bottom" justify="space-between">
      <span class="text-bold">{{ $t("total_result") }} : {{ dataSource.length }}</span>
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
        <div :key="column.key">
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
        <a-tag color="orange">
          {{ $t("expiration_soon") }} :
          {{
            $moment(record.expiration_date)
              .local()
              .diff($moment().local(), "days")
          }}
          days
        </a-tag>
      </template>
      <template slot="category_name" slot-scope="text, record">{{ record.category_name }}</template>
      <template slot="action" slot-scope="text, record">
        <a-tooltip :title="$t('detail')">
          <a-button icon="control" @click="gotoDetail(record.stock_code)"></a-button>
        </a-tooltip>

        <!-- <a-tooltip :title="$t('delete')">
          <a-popconfirm
            :title="$t('are_you_sure')"
            :oke-text="$t('yes')"
            :cancel-text="$t('no')"
            @confirm="handleDelete(record.stock_code)"
          >
            <a-button type="danger" icon="delete"></a-button>
          </a-popconfirm>
        </a-tooltip> -->
      </template>
    </a-table>
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
    await this.getAllItem();
  },
  computed: {
    ...mapState({
      itemInfo: state => state.modules["dashboard"].itemInfo
    }),
    ...mapGetters({
      filterExpiration: "modules/dashboard/filterExpiration"
    }),
    dataSource() {
      let clone = _.cloneDeep(this.filterExpiration);
      clone = clone.filter(item => item.type === "expiration_soon");
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllItem: "modules/dashboard/getAllItem",
      deleteItem: "modules/dashboard/deleteItem"
    }),
    gotoDetail(id) {
      this.$router.push(`/dashboard/${id}`);
    }
  }
};
</script>

<style></style>
