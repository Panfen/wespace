// pages/gallery/gallery.js
var app = getApp();
Page({
  data: {
    picsCount:'1/1',
    screenWidth:320,
    pics:[
      '../../images/pages/pic1.jpg',
      '../../images/pages/pic2.jpg',
      '../../images/pages/pic3.jpg',
      '../../images/pages/pic4.jpg',

    ],
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      });
    });
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenWidth:res.windowWidth
        });
      }
    });
    this.setData({
      picsCount:'1/' + this.data.pics.length
    });
  },
  scrollPics: function(e){
    var page = Math.ceil((e.detail.scrollLeft/(this.data.screenWidth/2)+1)/2);
    page = page == 0 ? 1:page;
    this.setData({
      picsCount: page +'/' + this.data.pics.length
    });
  }
})