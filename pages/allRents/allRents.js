// pages/allRents/allRents.js
Page({
  data:{
    conditionMenu:{
      showPlaceBox:false,
      showPriceBox:false,
      showOrderBox:false,
      showFilterBox:false
    },
    conditionMenus:['全城','价格','排序','筛选'],
    allReas:['附近','城区','郊区','高校','景区','广场','商城','车站','不限'],
    allPlace:[
      ['1km','2km','3km','4km','5km'],
      ['西湖区','滨江区','上城区','江干区','下城区','拱墅区','萧山区','余杭区'],
      ['小和山','留下','西溪','老余杭'],
      ['浙江工业大学','浙江科技学院','浙江外国语学院','浙江大学','浙江工商大学','杭州电子科技大学','中国美术学院'],
      ['西溪湿地','西湖','雷峰塔','灵隐寺','曲院风荷','柳浪闻莺','河坊街'],
      ['吴山广场','运河广场','武林广场','黄龙世纪广场','西城广场','庆春广场','时代广场','西城广场','中大广场','市心广场'],
      ['西溪印象城','城西银泰','西湖银泰','世纪联华','好又多','物美','华润万家','大润发','万象城'],
      ['汽车西站','汽车北站','汽车南站','汽车东站','东站','城站','九堡客运中心'],
      ['广知楼','健行楼','语林楼','博易楼','仁和楼','畅远楼','郁文楼','理学楼','法学楼','家和东苑','家和西苑','图书馆','体育馆','操场','家和食堂','养贤府','生活区大门','正大门','后山']
    ],
    selectedId:0,
    selectedPlace:[],
    sliderPrice:60,
    radios1:[{item:'价格',checked:true},{item:'距离',checked:false},{item:'评分',checked:false},{item:'有停车场',checked:false},{item:'有餐饮',checked:false},
    ],
    radios2:[{item:'价格',checked:true},{item:'距离',checked:false},{item:'评分',checked:false},{item:'有停车场',checked:false},{item:'有餐饮',checked:false},
    ],
    filters:[{item:'满减',checked:true},{item:'支持预约',checked:false},{item:'优惠券',checked:false},{item:'纸质发票',checked:false},{item:'团购优惠',checked:false},{item:'周末优惠',checked:false},{item:'会员卡',checked:false}
    ],
    rents:[
      {
        name:'东看台足球场',
        img:'../../images/pages/pic12.jpg',
        score:4.8,
        location:'杭州市西湖区留和路288号',
        distance:'600m',
        cost:'¥60/h',
        tags:['工作日半价','满减']
      },
      {
        name:'室内篮球场',
        img:'../../images/pages/pic8.jpg',
        score:4.8,
        location:'杭州市西湖区留和路288号',
        distance:'600m',
        cost:'¥40/h',
        tags:['会员卡','优惠券']
      },
      {
        name:'少年兵乓球室',
        img:'../../images/pages/pic10.jpg',
        score:4.2,
        location:'杭州市西湖区留和路288号',
        distance:'710km',
        cost:'¥20/h',
        tags:['陪练','满2减1']
      },
      {
        name:'屏峰网球场',
        img:'../../images/pages/pic9.jpg',
        score:4.7,
        location:'杭州市西湖区留和路288号',
        distance:'970m',
        cost:'¥30/h',
        tags:['会员卡85折']
      },
      {
        name:'科院新羽毛球场',
        img:'../../images/pages/pic7.jpg',
        score:4.6,
        location:'杭州市西湖区留和路318号',
        distance:'950m',
        cost:'¥30/h',
        tags:['满5减1']
      },
      {
        name:'朝晖游泳馆',
        img:'../../images/pages/pic11.jpg',
        score:4.7,
        location:'杭州市下城区潮王路18号',
        distance:'18.17km',
        cost:'¥50/h',
        tags:['会员卡85折','满减']
      },
    ]
  },
  onLoad:function(options){
    this.setData({
      selectedPlace : this.data.allPlace[0],
    });
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  choosePlace:function(){
    this.showConditionMenu('showPlaceBox');
  },
  choosePrice:function(){
    this.showConditionMenu('showPriceBox');
  },
  chooseOrder:function(){
    this.showConditionMenu('showOrderBox');
  },
  chooseFilter:function(){
    this.showConditionMenu('showFilterBox');
  },

  placeChoose:function(e){
    this.setData({
      selectedId : e.target.dataset.id,
      selectedPlace : this.data.allPlace[Number(e.target.dataset.id)]
    });
  },
  placeDetailChoose:function(e){
    this.setSelectItem(0,e.target.dataset.item);
  },

  priceSlider:function(e){
    this.setData({sliderPrice:e.detail.value});
  },
  priceChoose:function(e){
    this.setSelectItem(1,e.target.dataset.price);
  },

  orderChoose:function(e){
    var index = e.target.dataset.index;
    var type = e.target.dataset.type;
    var radios1 = this.data.radios1;
    var radios2 = this.data.radios2;
    if(type == 1){
      for(var item in radios1){
        radios1[item].checked = false;
      };
      radios1[index].checked = true;
    }else{
      for(var item in radios2){
        radios2[item].checked = false;
      };
      radios2[index].checked = true;
    }
    this.setData({
      radios1 : radios1,
      radios2 : radios2
    })
  },
  ensureOrder:function(){
    this.setSelectItem(2,'已排序');
  },

  filterChoose:function(e){
    var index = e.target.dataset.index;
    var filters = this.data.filters;
    filters[index].checked = !filters[index].checked;
    this.setData({filters:filters});
  },
  ensureFilter:function(){
    this.setSelectItem(3,'已筛选');
  },

  //tools
  showConditionMenu:function(menu){
    var conditionMenu = this.data.conditionMenu;
    for(var item in conditionMenu){
      conditionMenu[item] = (menu == item && menu != false) ? true:false;
    };
    this.setData({conditionMenu:conditionMenu});
  },

  setSelectItem:function(menuIndex,item){
    this.showConditionMenu(false);
    var conditionMenus = this.data.conditionMenus;
    conditionMenus[menuIndex] = item;
    this.setData({
      conditionMenus : conditionMenus
    });
  }
})