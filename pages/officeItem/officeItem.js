// pages/item/item.js
Page({
  data:{
    name:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      name:options.name
    });
  },  
})