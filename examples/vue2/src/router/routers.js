import Vue from "vue";
import Home from "../views/Home.vue";
import Layout from "@/layout/index";
import hot from "@/views/shop/set/hot.vue";
console.log(hot);
import VueRouter from "vue-router";
Vue.use(VueRouter);
const base = process.env.NODE_ENV === "production" ? "/demo-vue2/" : "";
export const constantRouterMap = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  // {
  //   path: "/Layout",
  //   component: Layout,
  // },
  {
    path: "/setHot",
    component: () => import(/* webpackChunkName: "Page4" */ "../views/shop/set/hot.vue"),
  },
  {
    path: "/storeset",
    component: () => import(/* webpackChunkName: "Page4" */ "../views/shop/store/index.vue"),
  },
  {
    path: "/d/dialog",
    name: "dialog",
    component: () => import(/* webpackChunkName: "Page1" */ "../views/Dialog.vue"),
  },
  {
    path: "/communication",
    name: "communication",
    component: () => import(/* webpackChunkName: "Page2" */ "../views/Communication.vue"),
  },
  {
    path: "/location",
    name: "location",
    component: () => import(/* webpackChunkName: "Page3" */ "../views/Location.vue"),
  },
];
export default new VueRouter({
  mode: "hash",
  base: base,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
