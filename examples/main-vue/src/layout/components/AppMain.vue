<template>
  <section class="app-main">
    <div style="width: 100px; height: 100px">哈哈哈 {{ key }}</div>
    {{ this.$route.params.path }}
    <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url" :afterMount="afterMount"></WujieVue>
    <!-- <router-view :key="key" /> -->
    <!--<transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews"> 
      {{ key }}
      <router-view :key="key" />
       <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url" :afterMount="afterMount" :sync="true"></WujieVue> 
      </keep-alive>
    </transition> -->
    <div v-if="$store.state.settings.showFooter" id="el-main-footer">
      <span v-html="$store.state.settings.footerTxt" />
      <span> ⋅ </span>
      <a href="http://www.beian.miit.gov.cn" target="_blank">{{ $store.state.settings.caseNumber }}</a>
    </div>
  </section>
</template>

<script>
import hostMap from "../../../wujie-config/hostMap";
export default {
  name: "AppMain",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {
      vue2Url: hostMap("//localhost:6100/") + `#/${this.$route.params.path}`,
    };
  },

  methods: {
    jump(name) {
      console.log(name, "name");
      this.$router.push({ name });
    },
    afterMount() {
      console.log("1111");
      // bus.$emit("changeUser", toRaw(microData.value));
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
