Page({
  data: {
    navTab: ["入门型", "大众型", "豪华型", "自定义↓"],
    currentNavtab: "0",
    insurance: [
      {
        checked: 'true',
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',
        hidden1: 'none',

      },
      {
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',

      },
      {
        content_title1: '机动车损失险',
        content_title2: '99%的车主选择购买',
        content_title3: '赔付您自己爱车的损失',
        price_text1: '10万',
        hidden2: 'none',
      },
      {
        content_title1: '机动车车上人员责任险(司机)',
        content_title2: '赔付车内驾驶员本人的人身伤亡',
        content_title3: '95%的车主选择购买',
        hidden1: 'none',
        hidden2: 'none',
      },
    ],
    insurance1: [
      {
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',
        hidden1: 'none',

      },
      {
        checked: 'true',
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',

      },
      {
        checked: 'true',
        content_title1: '机动车损失险',
        content_title2: '99%的车主选择购买',
        content_title3: '赔付您自己爱车的损失',
        price_text1: '10万',
        hidden2: 'none',
      },
      {
        content_title1: '机动车车上人员责任险(司机)',
        content_title2: '赔付车内驾驶员本人的人身伤亡',
        content_title3: '95%的车主选择购买',
        hidden1: 'none',
        hidden2: 'none',
      },
    ],
    insurance2: [
      {
        checked: 'true',
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',
        hidden1: 'none',

      },
      {
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',

      },
      {
        checked: 'true',
        content_title1: '机动车损失险',
        content_title2: '99%的车主选择购买',
        content_title3: '赔付您自己爱车的损失',
        price_text1: '10万',
        hidden2: 'none',
      },
      {
        content_title1: '机动车车上人员责任险(司机)',
        content_title2: '赔付车内驾驶员本人的人身伤亡',
        content_title3: '95%的车主选择购买',
        hidden1: 'none',
        hidden2: 'none',
      },
    ],
    insurance3: [
      {
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',
        hidden1: 'none',

      },
      {
        content_title1: '交强险+车船使用税',
        content_title2: '100%的车主选择购买',
        content_title3: '国家法律规定的强制险种',
        price_text1: '10万',
        content_ctext: '不计免赔',

      },
      {
        content_title1: '机动车损失险',
        content_title2: '99%的车主选择购买',
        content_title3: '赔付您自己爱车的损失',
        price_text1: '10万',
        hidden2: 'none',
      },
      {
        content_title1: '机动车车上人员责任险(司机)',
        content_title2: '赔付车内驾驶员本人的人身伤亡',
        content_title3: '95%的车主选择购买',
        hidden1: 'none',
        hidden2: 'none',
      },
    ],
    price_choose: [
      {
        value: '5万',
      },
      {
        value: '10万',
      },
      {
        value: '15万',
      },
      {
        value: '20万',
      },
      {
        value: '30万',
      },
      // {
      //   value:'50万',
      // },
      // {
      //   value:'100万',
      // },
      // {
      //   value:'150万',
      // },
      // {
      //   value:'200万',
      // },
    ],
    modalHidden: true,
    check_time: 5,

    checkboxChange: function (e) {
      
    }
  },

  modalTap: function (e) {
    this.setData({
      modalHidden: false,
    })
  },
  modalChange: function (e) {
    this.setData({
      modalHidden: true,
    })
  },
  //列表
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
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


  check_box:function (e){
    for (var i = 0, len = 10; i < len; ++i) {
        data['Show'] = false;
    }
    data['Show'] = !this.data['Show'];
    this.setData(data);
  }
})