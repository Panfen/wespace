//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  appData:{
    userInfo:null
  },
  //由快递单号查询快递公司名称  
  getExpressCom:function(nu,callback){
    wx.request({
      url: 'https://ali-deliver.showapi.com/fetchCom?nu='+nu,
      header: {
          "Content-Type":"application/json",
          "Authorization":"APPCODE 17921ae4c1c146feac8f16240a47c25a"
      },
      success: function(res) {
        callback(res.data.showapi_res_body.data[1])
      }
    });
  },
  //由快递单号和快递公司名称查询物流信息  
  getExpressInfo:function(nu,com,callback){
    wx.request({
      url: 'https://ali-deliver.showapi.com/showapi_expInfo?com='+com+'&nu='+nu,
      header: {
          "Content-Type":"application/json",
          "Authorization":"APPCODE 17921ae4c1c146feac8f16240a47c25a"
      },
      success: function(res) {
        callback(res.data.showapi_res_body)
      }
    });
  }
})