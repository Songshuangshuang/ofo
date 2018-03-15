// projects/billing/billing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seconds : 0,
    minutes : 0,
    hours : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  endRide : function () {
    clearInterval(this.timer);
    this.timer = undefined;
    this.setData({
      disabled : true
    })
  },
  moveToIndex : function () {
    if(this.timer) {
      wx.navigateTo({
        url: '../index/index?flag=true',
      })
    } else {
      wx.redirectTo({
        url: '../index/index',
      })
    }  
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      num : options.num
    })
    var s = 0;
    var m = 0;
    var h = 0;
    this.timer = setInterval(()=> {
      this.setData({
        seconds : s++
      })
      if(s == 60) {
        s = 0;
        this.setData({
          minutes : ++m
        })
      }
      if(m == 60) {
        m = 0;
        this.setData({
          hours : ++h
        })
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})