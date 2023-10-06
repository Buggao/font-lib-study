// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    cityWeather: '--'
  },
  showCat(){
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    }) 
    // wx.request({
    //   url: 'https://www.apiopen.top/weatherApi',
    //   method:'get',
    //   data:{
    //       city:"成都"
    //   },
    //   success: res => {
    //       console.log('res is', res)
    //       this.setData({})
    //   }
    // })
  }
})
