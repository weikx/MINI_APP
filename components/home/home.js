// components/home/home.js
import { HomeModel } from '../../http/models/home'
const homeModel = new HomeModel()
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
    flowerList: [
      {img: "http://imgc1-up.ezrpro.com/img/5/04fb80610393ef.jpg?size=256x256s", name: "玫瑰公仔 - 领结狗9K玫瑰金 项链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/04fbb6dfd67e89.jpg?size=256x256s", name: "玫瑰公仔 - 领结狗9K玫瑰金 手链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/04fc09dbac278e.jpg?size=256x256s", name: "玫瑰公仔 - 蝴蝶结熊9K玫瑰金 项链"},
      {img: "http://imgc1-up.ezrpro.com/img/3/0510e03fcbcdeb.jpg?size=256x256s", name: "全世爱 - 经典簇拥版嫣红 中型圆形"},
      {img: "http://imgc1-up.ezrpro.com/img/3/05183aa3f443e7.jpg?size=256x256s", name: "玫瑰经典 - 玫瑰盘扣18K白金 中型手链"},
      {img: "http://imgc1-up.ezrpro.com/img/6/054fc82f9c2795.jpg?size=256x256s", name: "全世爱 - 珍藏指纹版 大型方形"},
      {img: "http://imgc1-up.ezrpro.com/img/2/0541a15a25da86.jpg?size=256x256s", name: "全世爱 - 经典盛开版 巨型圆形"},
      {img: "http://imgc1-up.ezrpro.com/img/2/053b70c813cf13.jpg?size=256x256s", name: "玫瑰经典 - 玫瑰几何9K玫瑰金 中型手链"},
      {img: "http://imgc1-up.ezrpro.com/img/6/0537f6d1cdce65.jpg?size=256x256s", name: "经典永续 - 钟情925银玫瑰色 中型戒指"},
      {img: "http://imgc1-up.ezrpro.com/img/3/060338c1633320.jpg?size=256x256s", name: "星座经典 - 天蝎座天蝎守护色"}
    ],
    isShowShadow: false
  },

  methods: {
    onScroll (event) {
      // 监听滚动 设置搜索框阴影
      let scrollTop = event.detail.scrollTop
      if (scrollTop >= 250) return
      this.setData({
        isShowShadow: scrollTop >= 60
      })
    },

    toDetail () {
      homeModel.getClassify()
      wx.navigateTo({
        url: '/pages/goodsDetail/goodsDetail'
      })
    }
  }
})
