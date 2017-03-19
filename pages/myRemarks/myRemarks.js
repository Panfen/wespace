// pages/myRemarks/myRemarks.js
Page({
  data:{
    animationData:{},
    menuOpen:false,
    remarks:[
      {
        img:'../../images/pages/pic7.jpg',
        title:'科院14号羽毛球场',
        cost:'¥120',
        time:'2017-03-12 21:28:43',
        score1:4.5,
        score2:4.5,
        score3:4.0,
        words:'这个体育馆是科院新建不久的，场地很新，打起来很舒服，价格60一小时还是有点贵。本校学生半价，外来人士可以找个学生一起打，这方法不错的。',
        show:true,
      }
    ],
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
  },

  appendRemark:function(){
    console.log('追加')
  },

  deleteRemark:function(e){
    var index = e.target.dataset.index
    var remarks = this.data.remarks;
    remarks[index].show = false;
    this.setData({
      remarks:remarks
    });
  }
})