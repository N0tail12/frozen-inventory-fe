<template>
  <a-row class="header-content">
    <div class="ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-19 ant-col-xl-19 ant-col-xxl-20">
      <a-menu mode="horizontal" class="w-100">
        <Slider v-for="menu of siders" :menuItemData="menu" :key="menu.key" />
      </a-menu>
    </div>
    <div
      class="
        ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4
        header-left
        right-tool-bar
      "
    >
      <a-dropdown class="mt-2 mr-2">
        <a-menu slot="overlay" @click="onChangeLanguage">
          <a-menu-item key="ja"> <a-icon :component="Ja" />日本語 </a-menu-item>
          <a-menu-item key="vi"> <a-icon :component="Vi" />Tiếng Việt </a-menu-item>
          <a-menu-item key="en"> <a-icon :component="En" />English </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> {{ $t("language") }} </a-button>
      </a-dropdown>

      <a-menu @click="onClickMenu" mode="horizontal">
        <template v-for="menu of headers">
          <template v-if="menu.items && menu.items.length">
            <a-sub-menu :style="menu.position ? { float: 'right' } : {}" :key="menu.key">
              <span slot="title">
                {{ userName }}
              </span>
              <template v-for="item of menu.items">
                <template>
                  <a-menu-item :key="item.key">
                    <nuxt-link :to="item.link">
                      <i :class="item.icon"></i>
                      {{ $t(item.name) }}
                    </nuxt-link>
                  </a-menu-item>
                </template>
              </template>
            </a-sub-menu>
          </template>

          <template v-else>
            <a-menu-item :style="menu.position ? { float: 'right' } : {}" :key="menu.key">
              <nuxt-link :to="menu.link">
                <i :class="menu.icon"></i>
                {{ $t(menu.name) }}
              </nuxt-link>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>
  </a-row>
</template>

<script>
import Slider from "@/components/Slider";
import headers from "@/utils/header";
import siders from "@/utils/sider";
import Vi from "@/components/Language/vi.vue";
import En from "@/components/Language/en.vue";
import Ja from "@/components/Language/ja.vue";
import { localize } from "vee-validate";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      headers,
      siders,
      Vi,
      En,
      Ja
    };
  },
  components: { Slider },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    }),
    userName() {
      return this.userInfo && this.userInfo.name;
    }
  },
  methods: {
    ...mapMutations({
      setLanguage: "setLanguage"
    }),
    ...mapActions({
      logout: "modules/author/logout"
    }),
    onChangeLanguage(e) {
      let lang = e.key;
      this.lang = lang;
      this.$i18n.locale = lang;
      localize(lang);
      this.$moment.locale(lang);
      this.setLanguage(lang);
      localStorage.setItem("lang", lang);
    },
    onClickMenu({ item, key, keyPath }) {
      switch (key) {
        case "logout":
          this.logout();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header-content {
  padding-top: 5px;
  .right-tool-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
