// import { SA } from '../../selectarea/selectarea';

Page({
    data: {
        content_line_index1: '行驶城市',
        content_line_index2: '车辆号',
        content_line_index3: '新车未上牌',
        content_line_index4: '车主姓名',

        car_card_province: "浙A",
        car_card: "",
        username: "",
        city:'',
    },
    //省市县级联
    // onLoad: function (options) {
    //     SA.load(this); // 初始化区域框
    // },
    // choosearea() { // 页面弹框触发事件
    //     SA.choosearea(this);
    // },
    // addDot() { // 字符串截取
    //     SA.addDot(this);
    // },
    // tapProvince(e) { // 点击省份
    //     SA.tapProvince(e, this);
    // },
    // tapCity(e) { // 点击城市
    //     SA.tapCity(e, this);
    // },
    // tapDistrict(e) { // 点击区域
    //     SA.tapDistrict(e, this);
    // },
    // cancel() { // 取消选择
    //     SA.cancel(this);
    // },
    // confirm(e) { // 确认选择区域
    //     SA.confirm(e, this);
    // }
    choosearea: function () {
        wx.redirectTo({
            url: '../switchcity/switchcity'
        })
    },
    submit: function () {
        wx.navigateTo({
            url: '../bj_result/bj_result'
        })
    },


    onLoad: function (options) {
        var that = this
        // wx.getStorage({
        //     key: 'city',
        //     success: function (res) {
        //         var data = res.data
        //         that.setData({
        //             city: res.city

        //         })
        //     }
        // })
        console.log("接收到的参数是city=" + options.city);

        that.setData({
            city: options.city
        })
    },
})


