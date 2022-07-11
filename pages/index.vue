<template>
  <a-card class="shadow">
    <h1>{{ $t("dashboard") }}</h1>
  </a-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  async created() {
    await this.getAllItem();
  },
  computed: {
    ...mapState({
      itemInfo: state => state.modules["dashboard"].itemInfo
    }),
    dataSource() {
      let clone = _.cloneDeep(this.itemInfo);
      console.log(clone);
      return clone;
    }
  },
  methods: {
    ...mapActions({
      getAllItem: "modules/dashboard/getAllItem"
    })
  }
};
</script>

<style></style>
