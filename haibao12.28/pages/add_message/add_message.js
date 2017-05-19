Page({
  data: {
    array: ['请选择', '宝马', '奔驰', '大众', '本田'],
    pp_style: 0,
    date: '请选择注册日期',
    date2: '请选择过户日期',
    switchState: '否',
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pp_style: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
    })
  },
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value
    })
  },
  switchBindchange: function (e) {
    if (e.detail.value) {
      this.setData({
        switchState: '是'
      })
    } else {
      this.setData({
        switchState: '否'
      })
    }
  },
  submit: function (e) {
    wx.navigateTo({
      url: '../bj_result/bj_result'
    })
  },
})