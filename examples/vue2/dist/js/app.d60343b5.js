(function(e){function t(t){for(var o,r,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({Page1:"Page1",Page2:"Page2",Page3:"Page3"}[e]||e)+"."+{Page1:"5735bdd9",Page2:"e3074e02",Page3:"8c4d1225"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Page1:1,Page3:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({Page1:"Page1",Page2:"Page2",Page3:"Page3"}[e]||e)+"."+{Page1:"21a941b0",Page2:"31d6cfe0",Page3:"71a230c8"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17bd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("acb8"),n("069c"),n("058e"),n("87b3"),n("7cf3"),n("e27a"),n("9525");var o,r=n("435b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[e._v("首页测试Vue2")]),e._v(" | "),n("router-link",{attrs:{to:"/dialog"}},[e._v("弹窗")]),e._v(" | "),n("router-link",{attrs:{to:"/location"}},[e._v("路由")]),e._v(" | "),n("router-link",{attrs:{to:"/communication"}},[e._v("通信")])],1),n("router-view")],1)},i=[],u=n("4834"),c={},l=Object(u["a"])(c,a,i,!1,null,null,null),s=l.exports,d=(n("94a9"),n("5cd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("HelloWorld",{attrs:{msg:"Vue2示例"}}),n("div",{staticClass:"content",staticStyle:{"text-align":"center"}},[n("p",[e._v(" 当前vue版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("2.6.11")])],1),n("p",[e._v(" 当前element版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("2.15.6")])],1),n("p",[e._v(" 当前ant-design-vue版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("1.7.8")])],1),n("p",[n("el-button",{on:{click:function(t){return e.open("https://github.com/Tencent/wujie/tree/master/examples/vue2")}}},[e._v("仓库地址")])],1)])],1)}),f=[],g=n("fdab"),p={data:function(){return{open:window.open}},components:{HelloWorld:g["a"]}},v=p,m=(n("c83e"),Object(u["a"])(v,d,f,!1,null,null,null)),h=m.exports,b=[{path:"/",redirect:"/home"},{path:"/home",component:h},{path:"/dialog",name:"dialog",component:function(){return n.e("Page1").then(n.bind(null,"a20a"))}},{path:"/communication",name:"communication",component:function(){return n.e("Page2").then(n.bind(null,"20fd"))}},{path:"/location",name:"location",component:function(){return n.e("Page3").then(n.bind(null,"8e3a"))}}],_=b,w=n("530e"),y=n("a218"),P=n.n(y),E=n("4da8"),O=n.n(E),x=n("78bf"),j=n.n(x),C=n("f1a5"),S=n.n(C),k=n("dc0e"),L=n.n(k),T=n("071e"),M=n.n(T),N=n("461d"),D=n("faa4"),U=n("653e"),W=n("b4fe"),A=(n("5ffe"),n("d002"),n("d129"),n("fa45"),n("5b8b"),n("68c5"),n("0784"),n("5d56"),n("dfe8"),n("4831"),n("3acc"),n("3fe0"),n("e7b3"),n("a766"),"/demo-vue2/");([P.a,O.a,j.a,S.a,L.a,M.a].forEach((function(e){return r["default"].use(e)})),[N["a"],D["a"],U["a"],W["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(w["a"]),r["default"].config.productionTip=!1,window.__POWERED_BY_WUJIE__)?(window.__WUJIE_MOUNT=function(){var e=new w["a"]({mode:"hash",base:A,routes:_});o=new r["default"]({router:e,render:function(e){return e(s)}}).$mount("#app")},window.__WUJIE_UNMOUNT=function(){o.$destroy()}):new r["default"]({router:new w["a"]({mode:"hash",base:A,routes:_}),render:function(e){return e(s)}}).$mount("#app")},"5ffe":function(e,t){document.addEventListener("DOMContentLoaded",(function(){console.log("vue2 document DOMContentLoaded trigger")})),window.addEventListener("DOMContentLoaded",(function(){console.log("vue2 window DOMContentLoaded trigger")})),document.onreadystatechange=function(){console.log("vue2 document onreadystatechange trigger")},document.addEventListener("readystatechange",(function(){console.log("vue2 document readystatechange trigger")})),window.onload=function(){return console.log("vue2 window onload trigger")},window.addEventListener("load",(function(){console.log("vue2 window load trigger")}))},a128:function(e,t,n){"use strict";n("c583")},a766:function(e,t,n){},c583:function(e,t,n){},c83e:function(e,t,n){"use strict";n("17bd")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fdab:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("h2",{staticClass:"vue-title"},[e._v(e._s(e.msg))])])},r=[],a={name:"HelloWorld",props:{msg:String}},i=a,u=(n("a128"),n("4834")),c=Object(u["a"])(i,o,r,!1,null,"e3bbe6f8",null);t["a"]=c.exports}});
//# sourceMappingURL=app.d60343b5.js.map