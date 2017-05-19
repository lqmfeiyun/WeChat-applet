function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}



//省市县级联
import _Promise from 'bluebird';

/**
 * @param {Function} fun 接口
 * @param {Object} options 接口参数
 * @returns {Promise} Promise对象
*/
function Promise (fun, options) {
  options = options || {};
  return new _Promise((resolve, reject) => {
    if (typeof fun !== 'function')
        reject();
    options.success = resolve;
    options.fail = reject;
    fun(options);
  });
}


module.exports = {
  formatTime: formatTime,
  Promise: Promise
}
var bxsc = require('../base64/bxsc_data.js');
var img=require('../base64/img_data.js');
function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getData2(){
  return bxsc.index;
}
function getData_yiwx(){
  return bxsc.yiwx;
}
function getData_lvxx(){
  return bxsc.lvxx;
}
function getData_jiankx(){
  return bxsc.jiankx;
}
function getData_img(){
  return img.img;
}



function getDate() {
  var time = new Date()
  var year = time.getFullYear()
  var month = time.getMonth()
  month = month < 10 ? '0' + month : month
  var day = time.getDay()
  day = day < 10 ? '0' + day : day
  return [year, month, day].join('-')
}

function getTime() {
  var time = new Date()
  var hours = time.getHours()
  hours = hours < 10 ? '0' + hours : hours
  var minute = time.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = time.getSeconds()
  second = second < 10 ? '0' + second : second
  return [hours, minute, second].join(':')
}

module.exports = {
  formatTime: formatTime,
  getDate: getDate,
  getTime: getTime
}

module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getData_yiwx = getData_yiwx;
module.exports.getData_lvxx=getData_lvxx;
module.exports.getData_jiankx=getData_jiankx;
module.exports.getData_img=getData_img;
