// pages/myNotices/myNotices.js
Page({
  data:{
    startX:0,
    lastX:0,
    btnWidth:190,
    news:[{
      index:0,
      type:'',
      title:'临近租期提醒',
      time:'今天 20:10',
      body:'尊敬的客户，您在恒生科技园13号楼418室的租用将在5天后到期，请及时续期。',
      scrollStyle:'',
    },{
      type:'system',
      title:'卡券到期提醒',
      time:'03.11 18:47',
      body:'尊敬的客户，您有一张价值50元卡券即将到期，点击使用。',
      scrollStyle:'',
    }]
  },
  onLoad:function(options){
    
  },
  touchS:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    if(e.touches.length==1){
      this.setData({
        startX:e.touches[0].clientX    ///记录触摸起始位置的X坐标
      });
    }
  },
  touchM:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var news = that.data.news;
    if(e.touches.length==1){
      var moveX = e.touches[0].clientX;
      var disX = that.data.lastX + that.data.startX - moveX;
      disX = disX > that.data.btnWidth ? that.data.btnWidth : disX;
      that.data.lastX = disX;
      var scrollStyle = 'left:-'+disX+'rpx';
      news[id].scrollStyle = scrollStyle
      that.setData({news:news});
    }
  },
  touchE:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    if(e.changedTouches.length==1){
      var endX = e.changedTouches[0].clientX;
      var disX = that.data.startX - endX;
      var btnWidth = that.data.btnWidth;
    }
  },
  delMessage:function(e){
    var id = e.currentTarget.dataset.id;
    var news = this.data.news;

    delete news[id];
    console.log(news)
    this.setData({
      news:news
    });
  }
})