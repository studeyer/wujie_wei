<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页测试Vue2</router-link> | <router-link to="/dialog">弹窗</router-link> |
      <router-link to="/location">路由</router-link> | <router-link to="/communication">通信</router-link> |
      <router-link to="/setHot">测试</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    // 在 vue3-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
    $route() {
      window.$wujie?.bus.$emit("sub-route-change", "vue2", this.$route.path);
    },
  },
  mounted() {
    window.$wujie?.bus.$on("vue2-router-change", (path) => this.$router.push(path));
  },
};
</script>
