// pages/user/user.js
var app = getApp();
Page({
  data:{
    username:'Panfen',
    showConfirmBox:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    /*
    if(app.appData.userInfo == null){
      wx.redirectTo({url: '../login/login'});
    }else{
      this.setData({username:app.appData.userInfo.username});
    }
    */
  },
  showBox:function(){
    this.setData({
      showConfirmBox:false
    });
  },
  confirmBox:function(){
    var that = this;
    wx.request({
      url: 'https://ongdghewxx.localtunnel.me/upload',
      success: function(res) {
        console.log(res.data.msg)
      },
      fail:function(res){
        console.log('request fail!');
      },
      complete:function(){
        that.setData({
          showConfirmBox:true
        });
      }
    });
  },
  cancelBox:function(){
    console.log(0)
    this.setData({
      showConfirmBox:true
    });
  },
})