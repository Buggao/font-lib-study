const subApps = [
    {
      name: 'sub-vue',
      entry: process.env.NODE_ENV.VUE_APP_SUB_VUE,
      activeRule: '/sub-vue'
    },
    // {
    //   name: 'sub-vue-ts',
    //   entry: process.env.NODE_ENV.VUE_APP_SUB_VUE_TS,
    //   activeRule: '/sub-vue-ts'
    // },
  ]
  
  const apps = subApps.map(item => {
    return {
      ...item,
      container: '#subapp-viewport', // 子应用挂载的div
      props: {
        routerBase: item.activeRule, // 下发基础路由
        // getGlobalState: store.getGlobalState // 下发getGlobalState方法
      }
    }
  })
  
  export default apps
