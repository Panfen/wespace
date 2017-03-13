// pages/myRemarks/myRemarks.js
Page({
  data:{
    animationData:{},
    menuOpen:false,
  },
  onLoad:function(options){
    //
  },
  createAnimation:function(e){
    
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    });

    this.animation = animation;


    this.data.menuOpen != true ? animation.rotate(180).step() : animation.rotate(0).step();

    this.setData({
      animationData:animation.export(),
      menuOpen:!this.data.menuOpen
    })
  }
})