// components/tabBar/tabBar.js
Component({
  properties: {

  },

  data: {
    type: 0
  },

  methods: {
    switchTab (event) {
      let index = event.currentTarget.dataset.index
      this.triggerEvent('switchTab', index)
      this.setData({
        type: index || 0,
        nodeRotate: index == 2 ? 360 : 0
      })
    }
  }
})
