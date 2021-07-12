Page({
  data: {},
  add: function () {},
  //1
  location: function () {
    this.map.moveToLocation();
  },
  // 2
  use: function () {
    if (this.flag) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.scanCode({
        success: (res) => {
          wx.showLoading({
            title: '正在玩命加载',
          })
          wx.request({
            url: "https://www.easy-mock.com/mock/5a8d258b0c6b1e53a16747e5/ofo/password#!method=get",
            success: (res) => {
              console.log(res);
              wx.redirectTo({
                url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`, //把数据传给下一个界面，自动接收到下一个界面的onload函数中的参数options中
              })
            }
          })
        }
      })
    }
  },
  // 3
  redirectToWarn: function () {
    wx.redirectTo({
      url: '../warn/warn',
    })
  },
  // 4
  redirectToMy: function() {
    wx.redirectTo({
      url: '../my/my',
    })
  },
  // 5
  // redirectTo


  control: function (e) {
    console.log(e.controlId);
    switch (e.controlId) {
      case 1:
        this.map.moveToLocation();
        break;
      case 2:
        if (this.flag) {
          wx.navigateBack({
            delta: 1
          })
        } else {
          wx.scanCode({
            success: (res) => {
              wx.showLoading({
                title: '正在玩命加载',
              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5a8d258b0c6b1e53a16747e5/ofo/password#!method=get",
                success: (res) => {
                  console.log(res);
                  wx.redirectTo({
                    url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`, //把数据传给下一个界面，自动接收到下一个界面的onload函数中的参数options中
                  })
                }
              })
            }
          })
        }
        break;
      case 3:
        wx.redirectTo({
          url: '../warn/warn',
        })
      case 4:
        wx.redirectTo({
          url: '../my/my',
        })

    }



  },
  onLoad: function (p) {
    this.flag = p.flag;
    wx.getLocation({
      success: (res) => { //自执行this指向window；箭头函数，this指向父集this 
        this.setData({
          a: res.latitude,
          b: res.longitude,
        })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        console.log('获取系统信息接口调用成功', res)
        this.setData({
          controls: [{
            id: 1,
            iconPath: "/images/location.png",
            position: {
              width: 100,
              height: 50,
              top: res.windowHeight - 100,
              left: 20
            },
            clickable: true
          }, {
            id: 2,
            iconPath: "/images/use.png",
            position: {
              width: 90,
              height: 90,
              top: res.windowHeight - 120,
              left: res.windowWidth / 2 - 45,
            },
            clickable: true
          }, {
            id: 3,
            iconPath: "/images/warn.png",
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: res.windowWidth - 70,
            },
            clickable: true
          }, {
            id: 4,
            iconPath: "/images/avatar.png",
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 180,
              left: res.windowWidth - 70,
            },
            clickable: true
          }, {
            id: 5,
            iconPath: "/images/marker.png",
            position: {
              width: 35,
              height: 50,
              top: res.windowHeight / 2 - 50,
              left: res.windowWidth / 2 - 18,
            }
          }]

        })
      },
      fail: (err) => {
        console.log('获取系统信息接口调用失败', err)
      }
    })
  },
  onShow: function () {
    this.map = wx.createMapContext("mapId", this);
    this.map.moveToLocation();
  },
  onReady: function () {

  }
})