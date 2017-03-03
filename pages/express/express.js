//logs.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    nu:'',
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log)       {
        return util.formatTime(new Date(log))
      })
    })
  },
  numInput:function(e){
    this.setData({
      nu:e.detail.value
    });
  },
  searchTap:function(){
    //550532965009
    var nu = this.data.nu 
    app.getExpressCom(nu,function(data){
      app.getExpressInfo(nu,data,function(detail){
        console.log(detail);
      });
    });
  },
})
