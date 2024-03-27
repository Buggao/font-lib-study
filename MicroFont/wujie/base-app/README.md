# webpack初始化
npm init -y 使用默认配置初始化项目

npm install webpack webpack-cli -d 安装webpack和webpack-cli webpack4.0 后的版本 cli和webpack分离了，所以要分开下载 
    -d是指将包作为开发依赖项，生产中该包即非必须。

npm install html-webpack-plugin -d  安装html-webpack-plugin包 用来可以自动生成一个或多个HTML文件，
    并将构建生成的 bundle 文件（通常是 JavaScript、CSS 或其他资源文件）自动插入到生成的 HTML 文件中。
    安装完 需要在webpack配置文件中添加对应内容
npm install clean-webpack-plugin -d 引入清除打包文件插件

新建 webpack.config.js 文件 添加配置 并在package.json中添加 start/dev 启动命令
新建 html文件 添加默认内容

# 引入vue3
npm install vue -S 引入vue的最新版本，-s是指开发环境和生产环境都会用到这个包
npm install vue-loader@next @vue/compiler-sfc -d 引入解析.vue文件的插件，同时也要在webpack的rules中配置如何处理 .vue文件

npm install style-loader css-loader -d 引入解析css文件的插件，同时在webpack的rules中添加相应配置
npm install sass sass-loader -d 安装sass预处理包并添加配置  test: /\.s[ac]ss$/i,

# 完善webpack 配置
npm install webpack-dev-server -D 引入webpack自启动服务，进行webpack配置时需要主义版本，版本不同，配置内容也不同。

添加了 cross-env 用来在Windows下指定环境变量 以及 vue的环境变量设置，

