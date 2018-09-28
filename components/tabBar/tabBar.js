// components/tabBar/tabBar.js
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
    type: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab (event) {
      let index = event.currentTarget.dataset.index
      this.triggerEvent('switchTab', index)
      this.setData({
        type: index || 0
      })
    }
  }
})
