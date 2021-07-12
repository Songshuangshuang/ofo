App({
  onLaunch: function () {
    //小程序初始化完成时（全局只触发一次）
  },
  onShow() {
    // 小程序启动，或从后台进入前台显示时
  },
  onHide() {
    // 小程序从前台进入后台时
  },
  onError(msg) {
    // 小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
  },
  onPageNotFound() {
    // 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
    wx.redirectTo({
      url: 'pages/...'
    }) 
  },
  globalData: {
    //全局变量
    userInfo: null
  }
})