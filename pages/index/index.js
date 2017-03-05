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
        rank:'4.8',
        distance:'12.8km',
        location:'杭州市西湖区黄龙路1号',
        price:'¥399/小时',
        tags:['满300减40','返30元券']
      },
      {
        pic:'../../images/pic6.jpg',
        title:'圣西罗大酒店会议厅',
        rank:'4.3',
        distance:'3.2km',
        location:'留下镇屏峰社区',
        price:'¥199/小时',
        tags:['今日特价','订','周年特惠']
      }
    ],
    sportsItems:[
      {
        pic:'../../images/pic7.jpg',
        title:'新体育馆室内羽毛球场',
        rank:'4.3',
        distance:'4.9km',
        location:'杭州市西湖区留和路318号',
        price:'¥60/小时',
      },
      {
        pic:'../../images/pic8.jpg',
        title:'室内篮球场',
        rank:'4.3',
        distance:'600m',
        location:'杭州市西湖区留和路288号',
        price:'¥40/小时',
      },
      {
        pic:'../../images/pic9.jpg',
        title:'室外网球场',
        rank:'4.3',
        distance:'500m',
        location:'杭州市西湖区留和路288号',
        price:'¥50/小时',
      }
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
