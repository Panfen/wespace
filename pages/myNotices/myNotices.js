// pages/myNotices/myNotices.js
Page({
  data:{
    scrollStyle:'',
    startX:0,
    lastX:0,
    btnWidth:190
  },
  onLoad:function(options){
    
  },
  touchS:function(e){
    if(e.touches.length==1){
      this.setData({
        startX:e.touches[0].clientX    ///记录触摸起始位置的X坐标
      });
    }
  },
  touchM:function(e){
    var that = this;
    if(e.touches.length==1){
      var moveX = e.touches[0].clientX;
      var disX = that.data.lastX + that.data.startX - moveX;
      disX = disX > that.data.btnWidth ? that.data.btnWidth : disX;
      that.data.lastX = disX
      that.setData({scrollStyle:'left:-'+disX+'rpx'});
    }
  },
  touchE:function(e){
    var that = this
    if(e.changedTouches.length==1){
      var endX = e.changedTouches[0].clientX;
      var disX = that.data.startX - endX;
      var btnWidth = that.data.btnWidth;
    }
  }
})