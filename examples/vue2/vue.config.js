const path = require("path");
module.exports = {
  transpileDependencies: ["element-ui", "ant-design-vue"],
  publicPath: "./",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "6100",
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src"),
        "@crud": resolve("src/components/Crud"),
      },
    },
    // externals: {
    //   "element-ui": "element-ui",
    // },
  },
};
function resolve(dir) {
  return path.join(__dirname, dir);
}
