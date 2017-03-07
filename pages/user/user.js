// pages/user/user.js
var app = getApp();
Page({
  data:{
    
  },
  onLoad:function(options){
  },

  uploadFile:function(){
    var that = this;
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:3000/upload', 
          filePath: tempFilePaths[0],
          name: 'file',
          formData:{
            'logo': 'myLogo'
          },
          success: function(res){
            var data = JSON.parse(res.data)
            console.log(data);
          },
          fail:function(){
            console.log('upload fail');
          },
          complete:function(){
            console.log('request finished');
          }
        });
      }
    });
  }
})