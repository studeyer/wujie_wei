(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Page2"],{"20fd":function(e,l,n){"use strict";n.r(l);var t=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",[n("HelloWorld",{attrs:{msg:"通信处理"}}),n("div",{staticClass:"content"},[n("p",[e._v("应用可以有三种方式进行通信：")]),n("h3",[e._v("1、主应用通过 props 属性注入的方法")]),n("p",[e._v("主应用通过 props 注入 jump（跳转页面）方法，子应用通过 $wujie.props.jump(xxx) 来使用")]),n("p",[n("el-button",{on:{click:e.handleClick}},[e._v("点击跳转react17")])],1),n("h3",[e._v("2、通过 window.parent 方法拿到主应用的全局方法")]),n("p",[e._v("子应用调用 window.parent.alert 来调用主应用的 alert方法")]),n("p",[n("el-button",{on:{click:e.handleAlert}},[e._v("显示alert")])],1),n("h3",[e._v("3、通过 bus 方法发送去中心化的事件")]),n("p",[e._v('主应用 bus.$on("click", (msg) => window.alert(msg)) 监听子应用的 click 事件')]),n("p",[e._v("子应用点击按钮 $wujie.bus.$emit('click', 'vue2') 发送 click 事件")]),n("p",[n("el-button",{on:{click:e.handleEmit}},[e._v("点击emit")])],1)])],1)},i=[],o=n("fdab"),a={components:{HelloWorld:o["a"]},data:function(){return{dialogVisible:!1}},methods:{handleClick:function(){var e;null===(e=window)||void 0===e||e.$wujie.props.jump("react17")},handleAlert:function(){var e;null===(e=window)||void 0===e||e.parent.alert("主应用alert")},handleEmit:function(){var e;null===(e=window)||void 0===e||e.$wujie.bus.$emit("click","vue2")}}},c=a,r=n("4834"),u=Object(r["a"])(c,t,i,!1,null,null,null);l["default"]=u.exports}}]);
//# sourceMappingURL=Page2.e3074e02.js.map