// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require("path");
module.exports = {
  outputDir: "dist", // 输出文件目录
  publicPath: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: process.env.NODE_ENV === "development",
    port: "8000",
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "api",
        },
      },
      "/auth": {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          "^/auth": "auth",
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src"),
        "@crud": resolve("src/components/Crud"),
      },
    },
  },
  lintOnSave: false,
};
function resolve(dir) {
  return path.join(__dirname, dir);
}
