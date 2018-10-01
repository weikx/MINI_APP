// components/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    focus: false,
    flowerList: [
      {img: "http://imgc1-up.ezrpro.com/img/5/04fb80610393ef.jpg", name: "玫瑰公仔 - 领结狗9K玫瑰金 项链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/04fbb6dfd67e89.jpg", name: "玫瑰公仔 - 领结狗9K玫瑰金 手链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/04fc09dbac278e.jpg", name: "玫瑰公仔 - 蝴蝶结熊9K玫瑰金 项链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/0510e03fcbcdeb.jpg", name: "全世爱 - 经典簇拥版嫣红 中型圆形"},
      {img: "http://imgc1-up.ezrpro.com/img/3/05183aa3f443e7.jpg", name: "玫瑰经典 - 玫瑰盘扣18K白金 中型手链"},
      {img: "http://imgc1-up.ezrpro.com/img/6/054fc82f9c2795.jpg", name: "全世爱 - 珍藏指纹版 大型方形"},
      {img: "http://imgc1-up.ezrpro.com/img/2/0541a15a25da86.jpg", name: "全世爱 - 经典盛开版 巨型圆形"},
      {img: "http://imgc1-up.ezrpro.com/img/2/053b70c813cf13.jpg", name: "玫瑰经典 - 玫瑰几何9K玫瑰金 中型手链"},
      {img: "http://imgc1-up.ezrpro.com/img/6/0537f6d1cdce65.jpg", name: "经典永续 - 钟情925银玫瑰色 中型戒指"},
      {img: "http://imgc1-up.ezrpro.com/img/3/060338c1633320.jpg", name: "星座经典 - 天蝎座天蝎守护色"}
    ],
    searchList: [],
    hotSearchList: [],
    isShowShadow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputFocus (event) {
      wx.showToast({
          title: 'focus'
      })
      this.setData({
          focus: true
      })
    },

    inputBlur () {
      this.setData({
          focus: false
      })
    },

    inputTypeing (event) {
      let value = event.detail.value
      let arr = []
      if (!value) {
        this.setData({
          searchList: []
        })
        return
      }
      this.data.flowerList.forEach(item => {
        if (item.name.indexOf(value.toUpperCase()) != -1) {
          arr.push(item)
        }
        this.setData({
          searchList: arr || []
        })
      })
    },

    onScroll (event) {
      let scrollTop = event.detail.scrollTop
      if (scrollTop <=55 || scrollTop >= 65) return
      console.log(scrollTop)
      this.setData({
        isShowShadow: scrollTop >= 60
      })
    }
  }
})
