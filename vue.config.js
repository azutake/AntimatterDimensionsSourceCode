/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

const DEV = process.env.VUE_APP_DEV === "true";
const STEAM = process.env.VUE_APP_STEAM === "true";

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  outputDir: STEAM ? "../AppFiles" : "dist",
  configureWebpack: {
    devtool: DEV ? "eval-source-map" : "source-map",
  },
  devServer: {
    allowedHosts: "all",
    port: 10288,
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws"
    },
  }
};
