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
        <div :key="column.key" v-if="column.key == 'category_name'">
          <span>{{ $t(column.slots.title) }}</span>
          <br />
          <a-select v-model="dataFilter.category_name" mode="multiple" alowClear style="width: 200px">
            <a-select-option v-for="item in category" :key="item.category_code" :values="item.category_code">{{
              item.category_name
            }}</a-select-option>
          </a-select>
        </div>
        <div :key="column.key" v-else-if="column.key == 'expiration_date'">
          <span>{{ $t(column.slots.title) }}</span>
          <br />
          <a-select v-model="dataFilter.type" mode="single" :alowClear="true" style="width: 200px">
            <a-select-option v-for="item in status" :key="item.id" :values="item.type">{{
              $t(item.type)
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
        <a-tag color="orange" v-if="record.type == 'expire_soon'">
          {{ $t("expire_soon") }} :
          {{
            $moment(record.expiration_date)
              .local()
              .diff($moment().local(), "days")
          }}
          days
        </a-tag>
        <a-tag color="red" v-if="record.type == 'expired'">
          {{ $t("expired") }}
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
      columns,
      dataFilter: {
        category_name: [],
        type: 3
      },
      status: [
        { type: "expire_soon", id: 1 },
        { type: "expired", id: 2 },
        { type: "all", id: 3 }
      ]
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
    ...mapGetters({
      filterExpiration: "modules/dashboard/filterExpiration"
    }),
    dataSource() {
      let clone = _.cloneDeep(this.filterExpiration);
      clone = clone.filter(item => item.type === "expire_soon" || item.type === "expired");
      clone = this.filerDataByName(clone);
      clone = this.filerDataByStatus(clone);
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllItem: "modules/dashboard/getAllItem",
      getAllCategory: "modules/category/getAllCategory"
    }),
    gotoDetail(id) {
      this.$router.push(`/dashboard/${id}`);
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
    },
    filerDataByStatus(clone) {
      console.log(this.dataFilter.type);
      if (!this.dataFilter.type || this.dataFilter.type == 3) {
        return clone;
      }
      let type = this.status.filter(item => item.id == this.dataFilter.type)[0].type;
      console.log(type);
      clone = clone.filter(item => item.type === type);
      return clone;
    }
  }
};
</script>

<style></style>
