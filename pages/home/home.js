// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    translateY: 0,
    startPos: 0,
    transition: 0,
    tipTop: -50,
    tip: '下拉刷新'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  touchStart (e) {
    console.log(e)
    this.setData({
      startPos: e.touches[0].pageY
    })

  },

  touchMove (e) {
    let Y = e.touches[0].pageY - this.data.startPos
    if (0 > Y) return
    if (Y > 50) {
      this.setData({
        tip: '松开即刷新'
      })
    }
    if (Y > 100) return
    this.setData({
      translateY: Y,
      transition: 0.3,
      tipTop: Y
    })
  },

  touchEnd () {
    this.setData({
      tip: '正在刷新'
    })
    setTimeout(() => {
      this.setData({
        translateY: 0,
        tip: '下拉刷新',
        tipTop: -50
      })
    }, 3000)
  }
})