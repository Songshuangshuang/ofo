// projects/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindInput:function(e){
    console.log(e);
    this.value = e.detail.value;
  },
  charge:function(){
    if (!isNaN(this.value) && parseInt(this.value)>0){
      console.log(111);
      wx.getStorage({
        key: 'money',
        success:(res)=>{
          wx.setStorage({
            key: 'money',
            data: res.data+parseInt(this.value),
            success:(res)=>{
              wx.redirectTo({
                url: '../wallet/wallet',
              })
            }
          })
        },

        fail:(res)=>{
          wx.setStorage({
            key: 'money',
            data:parseInt(this.value),
          })
        }
      })
    }else {
      wx.showModal({
        title: '警告',
        content: '请输入正确金额',
      })
    }
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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