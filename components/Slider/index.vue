<template>
  <a-sub-menu v-if="menuItemData.items && menuItemData.items.length" :ref="menuItemData.key" :key="menuItemData.key">
    <span slot="title" :class="{ 'mr-3': !parentNode, 'menu-title': true }">
      <a-icon v-if="menuItemData['a-icon']" :type="menuItemData['a-icon']" />
      <i v-else :class="menuItemData.icon"></i>
      <span :class="{ 'sider-text-header': parentNode }">
        <span>{{ $t(menuItemData.name) }}</span>
      </span>
    </span>

    <template v-for="item of menuItemData.items">
      <slider :menuItemData="item" :key="item.key" />
    </template>
  </a-sub-menu>
  <a-menu-item v-else :ref="menuItemData.key" :key="menuItemData.key">
    <nuxt-link class="menu-title" v-if="menuItemData.link" :to="menuItemData.link">
      <a-icon v-if="menuItemData['a-icon']" :type="menuItemData['a-icon']" />
      <i v-else :class="menuItemData.icon"></i>
      <span :class="{ 'sider-text-header': parentNode }">{{ $t(menuItemData.name) }}</span>
    </nuxt-link>
  </a-menu-item>
</template>

<script>
export default {
  name: "SiderNode",
  props: {
    menuItemData: Object
  },
  data() {
    return {
      parentNode: true
    };
  }
};
</script>

<style></style>
