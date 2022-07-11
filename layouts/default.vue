<template>
  <a-layout id="components-layout" style="min-height: 100vh">
    <a-back-top :visibilityHeight="10" />
    <!-- <a-layout-sider class="sider-qcd" v-model="collapsed">
        <Sider :collapsed="collapsed" @change-collapsed="collapsed = !collapsed" />
      </a-layout-sider> -->
    <a-layout>
      <a-layout-header class="shadow" style="background: #fff">
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <BreadCum />
        <nuxt style="minheight: calc(100vh - 170px)" />
      </a-layout-content>
      <a-layout-footer class="text-center text-base"> ©COPYRIGHT BY N0tail12 {{ $moment().year() }} </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "@/components/Header";
import BreadCum from "@/components/BreadCum";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  middleware: "author",
  components: { Header, BreadCum },
  mounted() {
    this.setUserInfo();
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo"
    })
  }
};
</script>
