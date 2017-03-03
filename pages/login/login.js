// pages/login/login.js
var app = getApp();

Page({
  data:{
    username:'',
    password:'',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  usernameInput:function(e){
    this.setData({
      username:e.detail.value
    });
  },
  passwordInput:function(e){
    this.setData({
      password:e.detail.value
    });
  },
  loginTap:function(){
    app.appData.userInfo = {
      username:this.data.username,
      password:this.data.password
    }
    wx.switchTab({
      url: '../user/user',
      success: function(res){
        console.log('success')
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        console.log('complete')
      }
    })
  }
})