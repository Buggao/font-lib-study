//对于不好处理的复杂页面，使用component来构造，不同点在于 方法需要写入methods中
Component({
    data: {
      text: "This is page data."
    },
    methods: {
      onLoad: function(options) {
        // 页面创建时执行
      },
      onPullDownRefresh: function() {
        // 下拉刷新时执行
      },
      // 事件响应函数
      viewTap: function() {
        // ...
      }
    }
  })