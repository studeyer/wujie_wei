import "core-js/modules/es.array.find";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/routers";
import AButton from "ant-design-vue/es/button";
import ASelect from "ant-design-vue/es/select";
import AModal from "ant-design-vue/es/modal";
import APopover from "ant-design-vue/es/popover";
import "./pageLifeTest";
import "element-ui/lib/theme-chalk/base.css";
import "element-ui/lib/theme-chalk/tag.css";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/select.css";
import "element-ui/lib/theme-chalk/option.css";
import "element-ui/lib/theme-chalk/popover.css";
import "element-ui/lib/theme-chalk/dialog.css";
import "ant-design-vue/es/style/index.css";
import "ant-design-vue/es/button/style/index.css";
import "ant-design-vue/es/select/style/index.css";
import "ant-design-vue/es/modal/style/index.css";
import "ant-design-vue/es/popover/style/index.css";
import "./index.css";
import Element from "element-ui";
import store from "./store";

const base = process.env.NODE_ENV === "production" ? "/demo-vue2/" : "";

[AButton, ASelect, AModal, APopover].forEach((element) => Vue.use(element));
Vue.use(Element);
Vue.config.productionTip = false;
if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = new Vue({ router, render: (h) => h(App), store }).$mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy();
  };
} else {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}
