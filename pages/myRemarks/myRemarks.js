// pages/myRemarks/myRemarks.js
Page({
  data:{
    animationData:{}
  },
  onLoad:function(options){
    //
  },
  createAnimation:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });

    this.animation = animation;

    animation.height(0).step();

    this.setData({
      animationData:animation.export()
    })
  }
  
})