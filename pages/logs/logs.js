//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    default: "点我呀",
    hello:"say hello",
    news:['aaa','bbb','ccc']
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log)       {
        return util.formatTime(new Date(log))
      })
    })
  },
  defaultButton:function(){
    this.setData({
      hello:'toooooo'
    });
  }
})
