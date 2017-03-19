// pages/myCollects/myCollects.js
var app = getApp();
Page({
  data:{
    collects:[
      {
        img:'../../images/pages/pic7.jpg',
        title:'科院14号羽毛球场',
        location:'杭州市西湖区留和路318号',
        distance:'1.5km',
        cost:'¥60/小时',
        show:true
      }
    ],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  viewSimilar:function(){
    wx.navigateTo({url: '../allRents/allRents'});
  },
  removeCollect:function(e){
    var index = e.target.dataset.index
    var collects = this.data.collects;
    collects[index].show = false;
    this.setData({
      collects:collects
    });
  }

})