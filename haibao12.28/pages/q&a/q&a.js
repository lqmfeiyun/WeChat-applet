
Page({
  data: {
    navTab: ["投保指南", "兑换指南", "海保Q&A"],
    currentNavtab: "0",
    art_block: [
      {
        art_tit_ico: '1',
        text: '注册并登陆海保官方账号，\n 支持微信第三方一键登录',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb1.png',
      },
      {
        art_tit_ico: '2',
        text: '添加车辆，并输入车牌以及车主姓名',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb2.png',
      },
      {
        art_tit_ico: '3',
        text: '选择车险比价进行一键比价',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb3.png',
      },
      {
        art_tit_ico: '4',
        text: '根据比价结果，挑选投保公司，选择立即购买',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb4.png',
      },
      {
        art_tit_ico: '5',
        text: '填写车险保单配送信息，完善投保信息',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb5.png',
      },
      {
        art_tit_ico: '6',
        text: '挑选付款方式并完成支付',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/tb6.png',
      },
    ],
    art_block_1: [
      {
        art_tit_ico: '1',
        text: '参加各类海保APP官方活动或完成线上投保，\n获得各类奖品。',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/exchange1.png',
      },
      {
        art_tit_ico: '2',
        text: '打开“我的礼品”，查看已获得奖品。',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/exchange2.png',
      },
      {
        art_tit_ico: '3',
        text: '点击“立即领取”并填写实物配送信息。\n（虚拟奖品则无需填写配送信息）',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/exchange3.png',
      },
      {
        art_tit_ico: '4',
        text: '点击“已领取”查看已领取实物奖品配送状况；\n 查看已领取虚拟奖品卡密等兑换信息。',
        art_tit_img: 'http://www.haibaobaoxian.com/qa/images/exchange4.png',
      },
    ],
    qAnda: [
      {
        question: 'Q：海保购车险送油卡活动和保险公司本身优惠可重复享受吗？',
        answer: 'A：可以，只要在海保投保，即可享受双重优惠。',
      },
      {
        question: 'Q：是否只有通过海保平台购买车险，才可享受到海保的返油卡活动？',
        answer: 'A：是的，否则则无法享受到双重优惠。',
      },
      {
        question: 'Q：为什么我要选择海保平台？',
        answer: 'A：1、5家保险公司官网直销，报价精准，可直接享受到保险公司优惠 \n 2、海保专属超额优惠，额外再送油卡\n 3、报价迅捷，输入车牌号即可直接查价购买',
      },
      {
        question: 'Q:买车险怎样省钱？',
        answer: 'A:1、新车，建议您选择网销渠道购买，价格优惠15%，还有丰厚的投保礼赠送。\n 2、上年未出险或出险1次，建议您选择原保险公司继续续保，因为出险次数少，仍然可享受保单最大幅度优惠，同时续保客户还会享受丰厚礼品赠送。\n 3、上年出险2次及以上的客户，一般来说如果你上年的理赔金额不超过你的保费，今年保费可能不会上浮，如果理赔金额过高，建议您选择别的保险公司承保，可通过比价网看看哪家保险公司的报价便宜，服务又能满足你的需求。\n专家提醒：减少理赔次数，合规驾驶，才是最有效的省钱法宝。',
      },
      {
        question: 'Q： 网上投保支付成功，后续还会有什么流程呢？',
        answer: 'A:支付成功后，保险公司的客服人员跟您进行电话承保确认，同时确定您的保单配送信息及投保礼信息，并根据您的时间安排配送纸质保单、发票、投保礼等，请确保您留存的手机号码正确。',
      },
      {
        question: 'Q:点击精确比价为什么有的保险公司无法报价呢？',
        answer: 'A:无保险公司报价说明您的车辆存在较高承保风险，比如：老旧车型、稀有车型、车辆零整比过高、车龄过长、上年出险次数过多（超过3次）、重复投保等。未获取到报价信息，我们的客服人员会及时与您联系，帮您解决投保过程中遇到的问题。',
      },
      {
        question: 'Q:车辆保险可以提前多少天购买？',
        answer: 'A:车险并非只有在到期月才能购买，提前也可以购买。根据承保条例规定，交强险、商业险提前投保天数不得超过3个月，但有些地区有更严格的规定，如：山东、浙江交强险商业险提前投保天数不得超过30天，江苏交强险商业险不得超过40天，上海交强险不得超过40天，辽宁交强险不得超过30天，湖南交强险商业险不得超过60天，贵州遵义交强险商业险不得超过60天。',
      },
      
    ],


  },
  //状态栏切换
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

})