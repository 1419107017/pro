//index.js
//获取应用实例
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({
  data: {
  
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.thzwx.cn/index.php/Kangshun/Api/index',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            lunbo: res.data.result.lunbo,
            name: res.data.result.content.name,
            avatar: res.data.result.content.avatar,
            area: res.data.result.content.practice_area,
            years: res.data.result.content.practice_years,
            title: res.data.result.content.title,
            introduce: res.data.result.content.introduce,
            certificate: res.data.result.content.certificate
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
