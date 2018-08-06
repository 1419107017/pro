//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.thzwx.cn/index.php/Kangshun/Api/index',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        // console.log(res);
        if (res.data.status == 1) {
          that.setData({
            lunbo: res.data.result.lunbo,
            name: res.data.result.content.name
          })
        }
      }
    }),
      wx.request({
        url: 'https://www.thzwx.cn/index.php/Kangshun/Api/contactInfo',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res);
          if (res.data.status == 1) {
            that.setData({
              address: res.data.result.address,
              email: res.data.result.email,
              phone: res.data.result.phone,
              telphone: res.data.result.telphone,
              fax: res.data.result.fax,
              company: res.data.result.company                                        
            })
          }
        }
      })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13826553127', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  calling2: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-27750795', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  map: function () {
    wx.openLocation({
      latitude: 22.555614,
      longitude: 113.912524,
      scale: 28,
      name: '广东康顺律师事务所',
      //详细地址
      address: '广东省深圳市宝安区建安一路2号数字文化创业园6楼',
    })
  },
  addphone: function () {
    wx.addPhoneContact({
      firstName: '谢建平', //联系人姓名,
      organization: '广东康顺律师事务所', //公司名 
      mobilePhoneNumber: '13826553127', //联系人手机号  
    })
  },
  /**
* 转发
*/
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '广东康顺律师事务所小程序',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }
})
