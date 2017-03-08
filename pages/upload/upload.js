// pages/upload/upload.js
var app = getApp();
Page({
  data:{
    message:''
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
            var data = JSON.stringify(res.data)
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
  },

  connectSocket:function(){
    console.log('请求建立连接');
    wx.connectSocket({
      url: 'http://localhost:3000/connectSocket',
      data:{
        name:'connect socket request'
      },
      header:{ 
        'content-type': 'application/json'
      },
      method:'GET',
      success:function(res){
        console.log('res:'+res);
      },
      fail:function(){
        console.log('connect socket failed')
      },
      complete:function(){
        console.log('request done')        
      }
    });
    wx.onSocketOpen(function(res) {
      console.log('WebSocket连接已打开！')
    });
    wx.onSocketError(function(res){
      console.log('WebSocket连接打开失败，请检查！')
    });
    wx.onSocketMessage(function(res) {
      console.log('收到服务器内容：' + res.data)
    })
  },

  closeSocket:function(){
    //
  },

  testConnect:function(){
    wx.request({
      url: 'http://localhost:3000/testConnect',
      success:function(res){
        console.log('res:'+JSON.stringify(res));
      },
      fail:function(){
        console.log('connect failed');
      },
      complete:function(){
        console.log('request done');      
      }
    });
  }
});