// pages/myRents/myRents.js
Page({
  data:{
    showRemarkBox:false,
    btnText:'评论',
    words:''
  },

  writeRemark:function(){
    this.setData({showRemarkBox:true});
  },

  textareaInput:function(e){
    var words = e.detail.value.trim();
  },
  submitRemark:function(){
    this.setData({
      btnText:'已评论',
      showRemarkBox:false
    });
  },
  cancelRemark:function(){
    this.setData({showRemarkBox:false});
  }

});