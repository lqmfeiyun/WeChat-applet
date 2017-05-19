// pages/order_page/order.js
Page({
  data: {
    showOrHide: "hide",
    homeLink:'../index/index',

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  removeOrder: function () {
    this.setData({
      showOrHide: "show",
    })
  },
  cancel: function () {
    this.setData({
      showOrHide: "hide",
    })
  },
  enter: function () {
    this.setData({
      showOrHide: "hide",
    })
    wx.showToast({
				title: '删除成功',
				duration: 2000
		})
    //主页面是tabBar 页面，需要用wx.switchTab跳转
     wx.switchTab({
      url: '../index/index'
    })
  },



  scrollHandle: function (e) { //滚动事件
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
  },
  scrollLoading: function () { //滚动加载
    this.fetchServiceData();
  },
})