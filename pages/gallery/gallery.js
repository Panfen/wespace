// pages/gallery/gallery.js
var app = getApp();
Page({
  data: {
    
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      });
    });
  },
  scrollPics: function(e){
    console.log('scrollLeft:'+e.detail.scrollLeft);
    console.log('deltaX:'+e.detail.deltaX);
    
  }
})