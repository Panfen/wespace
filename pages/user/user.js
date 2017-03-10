// pages/user/user.js
var app = getApp();
Page({
  data:{
    bgPic:'../../images/pages/bg.jpg',
    userInfo:{}
  },
  onLoad:function(options){
    var that = this;
    app.getUserInfo(function(info){
      that.setData({userInfo:info});
    });
  },
  chooseHeader:function(){
    //
  }
})