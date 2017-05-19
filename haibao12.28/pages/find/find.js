var util = require('../../utils/util.js')
var img = require("../../base64/img_data.js")

Page({
  navigationBarTitleText: "发现",
  data: {
    //  img1: base64.bxym1,
    //  img2: base64.bxym4,
    //  img3: base64.bxym3,

    img_data: [
      {
        find: img.data.find_1,
        click: 'shop',
      },
      {
        find: img.data.find_2,
        click: 'shop',
      },
      {
        find: img.data.find_3,
        click: 'shop',
      },
    ],
    find_3: "http://images.haibaobaoxian.com/fnd/201609/banner_guanzhuweixin.png",
  },

  //加载image地址
  onload: function () {
    var that = this;
    this.reflash();
  },
  refresh: function () {
    var img = util.getData_img();
    // console.log("loaddata");
    this.setData({
      img_data: img.data,
    });
  },

  // onReady:function(){
  //   // 页面渲染完成
  //   String3
  // },
  // onShow:function(){
  //   // 页面显示
  //   String4
  // },
  // onHide:function(){
  //   // 页面隐藏
  //   String5
  // },
  // onUnload:function(){
  //   // 页面关闭
  //   String6
  // }

  shop:function(){
    wx.navigateTo({
      url: 'shop/shop',
    })
  },
})