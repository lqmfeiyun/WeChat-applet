//var shop = require('shop_data.js');
Page({
  data: {
    navTab: ["全部险种", "意外险", "旅行险", "健康险"],
    currentNavtab: "0",
    ballBottom: 20,
    ballRight: 30,
    ballOpacity: '.8',
    // 图标
    shop_all: [
      {
        img_tag: '/img/Page-hot.png',
        content_head_img: '/img/hangk.png',
        content_title: '航空意外保险',
        content_tag: '飞机保险|含意外医疗|国内航班',
        content_price_text: '30元',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/quannjt.png',
        content_title: '全年交通工具综合商旅版',
        content_tag: '公共交通|自驾（乘）车|商务出行',
        content_price_text: '50元',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '',
        content_head_img: '/img/moutcrs.png',
        content_title: '摩托车人身意外保险',
        content_tag: '自驾游|含医疗报销',
        content_price_text: '20元起',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '/img/Page-hot.png',
        content_head_img: '/img/gaokpwrs.png',
        content_title: '高空抛物人身意外保险',
        content_tag: '高空抛物|含医疗报销',
        content_price_text: '3.65元起',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '',
        content_head_img: '/img/shinzxgr.png',
        content_title: '室内装修工人意外保险',
        content_tag: '室内装修人员|意外医疗',
        content_price_text: '100元',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/huaxkzyh.png',
        content_title: '华夏空中一号',
        content_tag: '身故及伤残/高额航空',
        content_price_text: '9.9元起',
        content_insurer: '阳光保险',
      },
       {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/huaxkzyh.png',
        content_title: '华夏空中一号',
        content_tag: '身故及伤残/高额航空',
        content_price_text: '9.9元起',
        content_insurer: '阳光保险',
      },

       {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/huaxkzyh.png',
        content_title: '华夏空中一号',
        content_tag: '身故及伤残/高额航空',
        content_price_text: '9.9元起',
        content_insurer: '阳光保险',
      },
       {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/huaxkzyh.png',
        content_title: '华夏空中一号',
        content_tag: '身故及伤残/高额航空',
        content_price_text: '9.9元起',
        content_insurer: '阳光保险',
      },

       {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/huaxkzyh.png',
        content_title: '华夏空中一号',
        content_tag: '身故及伤残/高额航空',
        content_price_text: '9.9元起',
        content_insurer: '阳光保险',
      },
    ],
    shop_yiw: [
      {
        img_tag: '/img/Page-hot.png',
        content_head_img: '/img/hangk.png',
        content_title: '航空意外保险',
        content_tag: '飞机保险|含意外医疗|国内航班',
        content_price_text: '30元',
        content_insurer: '阳光保险',
      },
      {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/quannjt.png',
        content_title: '全年交通工具综合商旅版',
        content_tag: '公共交通|自驾（乘）车|商务出行',
        content_price_text: '50元',
        content_insurer: '阳光保险',
      },
    ],
    shop_lvx: [
      {
        img_tag: '/img/Page-hot.png',
        content_head_img: '/img/anxcx.png',
        content_title: '安心出行险',
        content_tag: '大陆|自由行|3-14天保障|含意外医疗',
        content_price_text: '3元起',
        content_insurer: '阳光保险',
      },
    ],
    shop_jiank: [
      {
        img_tag: '/img/Page-sale.png',
        content_head_img: '/img/shaoertdcrbjt.png',
        content_title: '少儿特定传染病津贴保险',
        content_tag: '确诊即给付|保6种高发特定传染病',
        content_price_text: '3元起',
        content_insurer: '阳光保险',
      },
    ],

    returnTop_img: '/img/returnTop.png',
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
  
   scroll: function(e) {
    console.log(e)
  },
  // scrollToTop: function(e) {
  //   this.setAction({
  //     scrollTop: 0
  //   })
  // },
  
  scrollToTop:function(e){
    this.setData({
      scrollTop: 0
      })
  },
 scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchServiceData();
  },
  onload:function(){
     console.log("老版保险商城页")
  }
})