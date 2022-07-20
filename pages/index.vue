<template>
  <a-card class="shadow">
    <h1>{{ $t("home") }}</h1>

    <a-row type="flex" align="bottom" justify="center">
      <apexchart type="pie" width="500" height="500" :options="chartOptions" :series="series"></apexchart>
    </a-row>
    <h1 class="mt-3">{{ $t("dashboard") }}</h1>
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
      <template slot="manufacture_date" slot-scope="text, record">{{
        $moment(record.manufacture_date).format("YYYY-MM-DD")
      }}</template>
      <template slot="expiration_date" slot-scope="text, record"
        >{{ $moment(record.expiration_date).format("YYYY-MM-DD") }}
      </template>
      <template slot="category_name" slot-scope="text, record">{{ record.category_name }}</template>
    </a-table>
  </a-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { columns } from "./const";
export default {
  data() {
    return {
      columns,
      chartOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: [this.$t("normal"), this.$t("expire_soon"), this.$t("expired")],
        colors: ["#40ff00", "#E91E63", "#ff3300"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      ...mapState({
        itemInfo: state => state.modules["dashboard"].itemInfo
      })
    }),
    ...mapGetters({
      filterExpiration: "modules/dashboard/filterExpiration"
    }),
    series() {
      let normal = this.filterExpiration.reduce((total, item) => (item.type == "normal" ? total + 1 : total), 0);
      let expire_soon = this.filterExpiration.reduce(
        (total, item) => (item.type == "expire_soon" ? total + 1 : total),
        0
      );
      let expired = this.filterExpiration.reduce((total, item) => (item.type == "expired" ? total + 1 : total), 0);
      return [normal, expire_soon, expired];
    },
    dataSource() {
      let clone = _.cloneDeep(this.itemInfo);
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllItem: "modules/dashboard/getAllItem"
    })
  },
  async created() {
    await this.getAllItem();
  }
};
</script>

<style></style>
