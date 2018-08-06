// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  daohang: function () {
    var that = this
    that.setData({
      hidden: ''
    })
  },
  formSubmit: function(e){
    // console.log(e)
    if (e.detail.value.user_name == '') {
      wx.showToast({
        title: '姓名不能为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.phone.length != 11) {
      wx.showToast({
        title: '请填11位号码!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if(e.detail.value.content == '') {
      wx.showToast({
        title: '请输入您的问题!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else {
      wx.request({
        url: 'https://www.thzwx.cn/index.php/Kangshun/Api/onlineConsult',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          name: e.detail.value.user_name,
          phone: e.detail.value.phone,
          content: e.detail.value.content
        },
        success: function (res) {
          if (res.data.status == 1) {
            wx.showToast({
              title: "提交咨询成功",
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: "提交咨询失败",
              icon: 'fail',
              duration: 1000
            })
          }
        }
      })
    }
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