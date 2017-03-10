// pages/item/item.js
Page({
  data:{
    name:'',
    coverPic:'../../images/pages/pic1.jpg',
    remarks:239,
    rentItmes:[
      {
        title:'100平精装办公室',
        special:'会议厅，阳台',
        notice:'3个月起租',
        price:'¥3999',
        tags:['返50券','满减'],
      },
      {
        title:'150平精装办公室',
        special:'会议厅，阳台，独立卫生间',
        notice:'3个月起租',
        price:'¥4999',
        tags:['返80券','满减'],
      }
    ],
    collected:'',
    markers: [{
      iconPath: "../../images/system/iconfont-marker.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 22,
      height: 22
    }],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      name:options.name
    });
  }, 
  showPics:function(){
    wx.navigateTo({url: '../gallery/gallery'});
  },
  collectOffice:function(){
    if(this.data.collected == ''){
      this.setData({collected:'collected'});
    }else{
      this.setData({collected:''});
    }
  }
})