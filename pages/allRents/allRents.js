// pages/allRents/allRents.js
Page({
  data:{
    conditionMenu:{
      showPlaceBox:true,
      showPriceBox:false,
      showOrderBox:false,
      showOtherBox:false
    },
    allPlace:[
      ['1km','2km','3km','4km','5km'],
      ['西湖区','滨江区','上城区','江干区','下城区','拱墅区','萧山区','余杭区'],
      ['小和山','留下','西溪','老余杭'],
      ['浙江工业大学','浙江科技学院','浙江外国语学院','浙江大学','浙江工商大学','杭州电子科技大学','中国美术学院'],
      ['西溪湿地','西湖','雷峰塔','灵隐寺','曲院风荷','柳浪闻莺','河坊街'],
      ['吴山广场','运河广场','武林广场','黄龙世纪广场','西城广场','庆春广场','时代广场','西城广场','中大广场','市心广场'],
      ['西溪印象城','城西银泰','西湖银泰','世纪联华','好又多','物美','华润万家','大润发','万象城'],
      ['汽车西站','汽车北站','汽车南站','汽车东站','东站','城站','九堡客运中心'],
      ['随便1','随便2','随便3','随便4','随便5','随便6','随便7']
    ],
    selectedPlace:[],
  },
  onLoad:function(options){
    this.setData({
      selectedPlace : this.data.allPlace[0]
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
  chooseOther:function(){
    this.showConditionMenu('showOtherBox');
  },

  placeChoose:function(e){
    this.setData({
      selectedPlace : this.data.allPlace[Number(e.target.dataset.id)]
    });
  },

  priceSlider:function(e){
    
  },

  showConditionMenu:function(menu){
    var conditionMenu = this.data.conditionMenu;
    for(var item in conditionMenu){
      conditionMenu[item] = menu == item ? true:false;
    };
    this.setData({conditionMenu:conditionMenu});
  },

})