Page({
  data: {
    title_message: '标题',
    images: [
      {
        image: 'http://pimg1.126.net/baoxian/images/upload/api/vehicle/2015031617VDICT00061115_white.jpg',
        text: '孕妇',
        //bt_message: 'click1',
        contect_message: '浙A12345',
        url: '../pc_login/pc_login',
      }, {
        image: 'http://pimg1.126.net/baoxian/images/upload/api/vehicle/2015031617VDICT00061322_white.jpg',
        text: '那人',
        //bt_message: 'click2',
        contect_message: '浙A13579',
        url: '../add_message/add_message',
      }, {
        image: '/img/car.jpg',
        text: '幼儿',
        //bt_message: 'click3',
        contect_message: '浙A24680',
        url: '../bj_result/bj_result',
      }, {
        image: '/img/car.jpg',
        text: '老人',
        //bt_message: 'click4',
        contect_message: '浙A14736',
        url: '../bj_result/bj_result',
      }, {
        image: '/img/car.jpg',
        text: '长者',
        //bt_message: 'click5',
        contect_message: '浙A25845',
        url: '../bj_result/bj_result',
      }, {
        image: '/img/QQ.png',
        //bt_message: 'click6',
        contect_message: '请添加爱车',
        url: '../add_car/add_car',
      }
    ],
    indicatorDots: true,// 显示圆点
    content6_images: [
      '/img/b1.png',
      '/img/b2.png',
      '/img/b3.png',
      '/img/b4.png',
      '/img/b5.png',
      '/img/b6.png',
      '/img/b7.png',
    ],
    scrollLeft: 0,

    content3_images: [
      '/img/bxym1.png',
      '/img/bxym2.png',
      '/img/bxym3.png',
      '/img/bxym4.png',
    ],
    vertical: false,//垂直？ 默认水平
    autoplay: true,
    interval: 3000,//间隔
    duration: 1200,//切换时间

    scroll_5: [
      '/img/b1.png',
      '/img/b2.png',
      '/img/b3.png',
      '/img/b4.png',
      '/img/b5.png',
      '/img/b6.png',
      '/img/b7.png',
      '/img/b8.png',
      '/img/b9.png',
      '/img/b10.png',
    ],

    img_i_1: '/img/Page3.png',
    content1_style_content_message1: '选择块1',
    content1_style_content_message2: '选择块2',
    content1_style_content_message3: '选择块3',
    content1_style_content_message4: 'Q&A',
    content2_title_message: '今日头条',
    content2_content_message: '内容content123，。；内容content123',
    footer_style_content_message1: '选择1',
    footer_style_content_message2: '选择2',
    footer_style_content_message3: '选择3',
    content7_title_message: '今日头条',
    content7_content_message: '内容content123，。；内容content123',
  },


  bjjg: function (event) {
    wx.navigateTo({
      url: '../bj_result/bj_result?type=' + event.currentTarget.dataset.type,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    }),
      wx.setNavigationBarTitle({
        // title: '比价结果',
        success: function (res) {
          // success
        }
      })
  },

  // 块1
  baoxsc1: function (event) {
    wx.navigateTo({
      url: '../add_car/add_car?type=' + event.currentTarget.dataset.type,
    })
  },
  // 块2
  baoxsc: function (event) {
    wx.navigateTo({
      url: '../baoxsc/baoxsc?type=' + event.currentTarget.dataset.type,
    })
  },
  // 块3
  xzxz: function (event) {
    wx.navigateTo({
      url: '../modify_insurance/modify_insurance?type=' + event.currentTarget.dataset.type,
    })
  },

  dingdy: function (event) {
    wx.navigateTo({
      url: '../order_page/order?type=' + event.currentTarget.dataset.type,
    })
  },
  // 块4
  qa: function (event) {
    wx.navigateTo({
      url: '../q&a/q&a?type=' + event.currentTarget.dataset.type,
    })
  },

  //加载image地址
  onload: function () {
    console.log("首页")
    var that = this;
    this.reflash();
		wx.showNavigationBarLoading()
		app.getCity(function(){
			wx.hideNavigationBarLoading()
			wx.setNavigationBarTitle({
				title: '首页 - ' + app.city
			})
			douban.fetchFilms.call(that, config.apiList.popular, that.data.start, config.count)
		})
  },
  refresh: function () {
    var img = util.getData_img();
    // console.log("loaddata");
    this.setData({
      img_data: img.data,
    });
  },


})