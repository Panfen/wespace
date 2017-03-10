// pages/map/map.js
Page({
  data:{
    markers:[],
    height:667,
  },
  onLoad:function(options){
    var that = this;
    this.setData({
       markers:[{
         iconPath: "../../images/system/iconfont-marker.png",
         id: 0,
         latitude: options.latitude,
         longitude: options.longitude,
         width: 22,
         height: 22
       }],
    });
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height:res.windowHeight
        });
      }
    });
  },
})