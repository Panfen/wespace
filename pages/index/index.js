//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: '共享创造价值',
    userInfo: {},
    imgUrls: [
      '../../images/swiper1.jpg',
      '../../images/swiper2.jpg',
      '../../images/swiper3.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    officeItems:[
      {
        pic:'../../images/pic1.jpg',
        text:'精品办公室'
      },
      {
        pic:'../../images/pic2.jpg',
        text:'服务式办公室-新趋势'
      },
      {
        pic:'../../images/pic3.jpg',
        text:'办公室设计效果'
      },
      {
        pic:'../../images/pic4.jpg',
        text:'简洁办公室'
      }
    ],
    meetingItems:[
      {
        pic:'../../images/pic5.jpg',
        title:'黄龙体育中心高级会议场所',
        rank:'5',
        location:'黄龙体育中心',
        price:'¥399/小时'
      },
      {
        pic:'../../images/pic6.jpg',
        title:'圣西罗大酒店会议厅',
        rank:'4',
        location:'留下镇屏峰社区',
        price:'¥199/小时'
      },

    ],
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      });
    });
  },
});
