const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./digu-tab",
  assetsDir: "./assets",
  lintOnSave: false, // 关闭语法检查
});
