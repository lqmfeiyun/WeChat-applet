Page({
    data: {
        bj_top_1: "https://wx.haibaobaoxian.com/hb-biz/main_sg/images/car-none.jpg",
        //  bj_top_title: "浙A12345",
        bj_top_title: '',
        bj_content: "精灵SMART FORTWO COUPE轿车 1.0T 2012 参考价（132000）",
        bj_t: "已选险种",
        bj_content2: "车损险+不计免赔、三责险(50万)+不计免赔、交强险、车船使用税",
        arrowright: "../../img/arrowright.png",

        bj_list_content: [
            {
                company_ico: "http://images.haibaobaoxian.com/logos/taic_100x100.png",
                bj_price: "10321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            }, {
                company_ico: "http://images.haibaobaoxian.com/logos/cpic_100x100.png",
                bj_price: "10321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            }, {
                company_ico: "http://images.haibaobaoxian.com/logos/paic_100x100.png",
                bj_price: "8321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            }, {
                company_ico: "http://images.haibaobaoxian.com/logos/picc_100x100.png",
                bj_price: "10321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            }, {
                company_ico: "http://images.haibaobaoxian.com/logos/ygbx_100x100.png",
                bj_price: "10321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            }, {
                company_ico: "http://images.haibaobaoxian.com/logos/cicp_100x100.png",
                bj_price: "10321元",
                li_ico: "/../img/Page3.png",
                li_content: "投保即可获赠油卡，上不封顶",
                view_detail_click: "view_detail_click",
            },


        ],
        view_detail: "查看详情",


    },

    dingdy: function (event) {
        wx.navigateTo({
            url: '../order_page/order?type=' + event.currentTarget.dataset.type,
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
    tjxx: function (event) {
        wx.navigateTo({
            url: '../add_message/add_message?type=' + event.currentTarget.dataset.type,
        })
    },
    xgxz: function (event) {
        wx.navigateTo({
            url: '../modify_insurance/modify_insurance?type=' + event.currentTarget.dataset.type,
        })
    },

    view_detail_click: function (event) {
        wx.navigateTo({
            url: '../order_page/order?type=' + event.currentTarget.dataset.type,
        })
    },

    // onShow: function (options) {
    //     var that = this
    //     wx.getStorage({
    //         key: 'license',
    //         success: function (res) {
    //             var data = res.data
    //             that.setData({
    //                 bj_top_title: data.car_card_province + data.car_card,
    //             })
    //             // console.log(data.car_card_province)
    //             // console.log(data.car_card)
    //         },

    //     })
    // }

    onLoad: function(options) {  
    var that = this; 
    //获取存储信息
    wx.getStorage({
      key: 'license',
      success: function(res){
        // success
        that.setData({
          bj_top_title:res.data
        })
      }
    })
  }
})

