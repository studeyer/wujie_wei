<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->

  <!-- <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url"></WujieVue> -->
  <section class="app-main">
    测试
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url" :sync="true"></WujieVue>
      </keep-alive>
    </transition>
    <div v-if="$store.state.settings.showFooter" id="el-main-footer">
      <span v-html="$store.state.settings.footerTxt" />
      <span> ⋅ </span>
      <a href="http://www.beian.miit.gov.cn" target="_blank">{{ $store.state.settings.caseNumber }}</a>
    </div> -->
  </section>
</template>

<script>
import hostMap from "../../wujie-config/hostMap";

export default {
  computed: {
    vue2Url() {
      return hostMap("//localhost:6100/") + `#/${this.$route.params.path}`;
    },
  },
  methods: {
    jump(name) {
      console.log(name);
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped></style>
