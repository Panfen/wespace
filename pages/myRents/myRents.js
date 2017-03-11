// pages/myRents/myRents.js
Page({
  data:{
    addressList:[
      {"Contact":"钟诚","Mobile":13888888888,"Address":"江苏省苏州市工业园区创意产业园"},
      {"Contact":"杭州","Mobile":13666666666,"Address":"江苏省苏州市工业园区独墅湖体育馆"},
      {"Contact":"黄山","Mobile":13666666666,"Address":"江苏省苏州市工业园区独墅湖体育馆"}
    ],
    editIndex:0,
    delBtnWidth:150//删除按钮宽度单位（rpx）
  },
  onLoad:function(options){},

  touchS:function(e){
    console.log("touchS"+e);
    if(e.touches.length==1){
      this.setData({
        startX:e.touches[0].clientX    ///记录触摸起始位置的X坐标
      });
    }
  },

  touchM:function(e){
    console.log("touchM:"+e);
    var that = this
    if(e.touches.length==1){
      var moveX = e.touches[0].clientX;
      var disX = that.data.startX - moveX;
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = "";
      if(disX == 0 || disX < 0){
        txtStyle = "left:0px";
      }else if(disX > 0 ){
        txtStyle = "left:-"+disX+"px";
        if(disX>=delBtnWidth){
          txtStyle = "left:-"+delBtnWidth+"px";
        }
      }

      var index = e.currentTarget.dataset.index;
      var list = that.data.addressList;
      list[index].txtStyle = txtStyle; 
      this.setData({
        addressList:list
      });
    }
  },
  touchE:function(e){
    console.log("touchE"+e);
    var that = this
    if(e.changedTouches.length==1){
      var endX = e.changedTouches[0].clientX;
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = disX > delBtnWidth/2 ? "left:-"+delBtnWidth+"px":"left:0px"; //距离小于删除按钮的1/2，不显示删除按钮
      var index = e.currentTarget.dataset.index;
      var list = that.data.addressList;
      list[index].txtStyle = txtStyle; 
      that.setData({
       addressList:list
      });
    }
  }
});