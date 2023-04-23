const { ModuleFederationPlugin } = require("webpack").container;
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "vue_app",
        filename: "remoteEntry.js",
        exposes: {
          VueAppLoader: "./src/loader.js",
        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
          },
        },
      }),
    ],
  },
});
