const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { DefinePlugin } = require("webpack");

//webpack server 端口
const port = "8899";

module.exports = {
  mode: process.env.MODE === "development" ? "development" : "production", // 环境模式
  entry: path.resolve(__dirname, "./src/main.js"), // 打包入口
  //错误log
  stats: {
    errorDetails: "auto",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 打包出口
    filename: "js/[name].js", // 打包完的静态资源文件名
  },
  resolve: {
    alias : {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      //vue文件处理方法
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"), // 使用的 html 模板地址
      filename: "index.html", // 打包后输出的文件名
      title: "base-app", // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),
    // vue的默认值设置
    new DefinePlugin({
      // vue环境变量修改
      __VUE_PROD_DEVTOOLS__: true, //开发者工具支持
      __VUE_OPTIONS_API__: false, //选项式 API 支持,第三方库若依赖选项式api，则可能
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true, //生产环境构建下激活 (hydration) 不匹配的详细警告
    }),
  ],
  devServer: {
    open: true,
    port,
    compress: true,
    static: {
      directory: path.join(__dirname, "./"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  performance: {
    hints: false,
  },
};
