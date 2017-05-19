// import { SA } from '../../selectarea/selectarea';

Page({
    data: {
        add_car: [
            {
                car_card_province: '浙',
                car_card: 'car_card',
                maxlength: '5',
                placeholder: '',
                value: 'A',
                scanner: 'car_card',
            },
            {
                car_card_province: '',
                maxlength: '20',
                placeholder: '请输入车主姓名',
                value: '',
                scanner: '',
            },
            {
                car_card_province: '',
                maxlength: '20',
                placeholder: '请输入手机号码',
                value: '',
                scanner: '',
            },
        ],
        car_card: "12345",
        username: "",
        city: '',
        submit: '一键比价',
        bj_top_title: "12312",
        car_card_input:"",
        car_card_province: '浙A',
    },
//获取输入值
    car_card: function(e) {
      this.setData({
        car_card_input: e.detail.value,
      })
    },
  //存储输入值
  submit: function () {
    wx.setStorageSync('license', this.data.car_card_province+this.data.car_card_input)
    wx.navigateTo({
     url: '../bj_result/bj_result',
      
    })
  }
   
   
})

