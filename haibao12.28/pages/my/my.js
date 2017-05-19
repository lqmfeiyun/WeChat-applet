Page({
  data:{
    my1:[
      {
        click:'myInfor',
        img:'/../img/Shape6.png',
        txt:'我的信息',
      },
      {
        click:'myCar',
        img:'/../img/Shape6.png',
        txt:'我的爱车',
      },
      {
        click:'myAddress',
        img:'/../img/Shape6.png',
        txt:'我的地址',
      },
      {
        click:'sys',
        img:'/../img/Shape6.png',
        txt:'系统信息',
      },
      ],
      my2:[
      {
        img:'/../img/Shape6.png',
        txt:'我的爱车',
      },
      {
        img:'/../img/Shape6.png',
        txt:'我的爱车',
      },
     {
        img:'/../img/Shape6.png',
        txt:'我的爱车',
      },
      ],
       my3:[
      {
        click:'set',
        img:'/../img/Shape6.png',
        txt:'设置',
      },
      ],
    arrowright:'/../img/arrowright.png',
  },
  // onLoad:function(options){
  //   // 页面初始化 options为页面跳转所带来的参数
  //   String2
  // },
  myInfor:function(){
    wx.navigateTo({
      url: '../personInfo/personInfo'
    })
  },
  myAddress:function(){
    wx.navigateTo({
      url: '../location/location'
    })
  },
  sys:function (event) {
    wx.navigateTo({
      url: '../systemInfo/systemInfo?type=' + event.currentTarget.dataset.type,
    })
  },
  
})