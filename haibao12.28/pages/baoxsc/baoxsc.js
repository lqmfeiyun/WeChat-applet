
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["全部险种", "意外险", "旅行险", "健康险"],
    currentNavtab: "0",
    ballBottom: 20,
    ballRight: 30,
    ballOpacity: '.8',
    // 图标
    returnTop_img: '/img/returnTop.png',

    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    },

    // scrolltop:null,
  },

  //状态栏切换
  bindChange: function (e) {
    var that = this;
    thatsetData({ currentTab: edetailcurrent });
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  // upper: function () {
  //   wx.showNavigationBarLoading()
  //   this.refresh();
  //   console.log("upper");
  //   setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  // },
  // lower: function (e) {
  //   wx.showNavigationBarLoading();
  //   var that = this;
  //   setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
  //   console.log("lower")
  // },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现首页刷新
  // refresh0: function () {
  //   var index_api = '';
  //   util.getData(index_api)
  //     .then(function (data) {
  //       //this.setData({
  //       //
  //       //});
  //       console.log(data);
  //     });
  // },

  //使用本地 fake 数据实现刷新效果
  refresh: function () {
    var feed = util.getData2();
    var feed_ywx = util.getData_yiwx();
    var feed_lxx = util.getData_lvxx();
    var feed_jkx = util.getData_jiankx();
    // console.log("loaddata");
    this.setData({
      shop_all: feed.data,
      shop_yiw: feed_ywx.data,
      shop_lvx: feed_lxx.data,
      shop_jiank: feed_jkx.data,
    });
  },

  //使用本地 fake 数据实现继续加载效果
  // nextLoad: function(){
  //   var next = util.getNext();
  //   console.log("continueload");
  //   var next_data = next.data;
  //   this.setData({
  //     feed: this.data.feed.concat(next_data),
  //     feed_length: this.data.feed_length + next_data.length
  //   });
  // }

  //回到顶部
  goToTop:function(){ 
    this.setData({
      scrolltop:0
    })
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },

  //分享
    onShareAppMessage: function () {
      return {
        title: '保险商城',
        desc: '险种选择',
        path: '/page/user?id=123'
      }
    }
})

