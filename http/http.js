import { HTTP_CONFIG } from './config'

class Http {
  request (params) {
    wx.request({
      url: HTTP_CONFIG.baseUrl + params.url,
      method: params.method || 'GET',
      data: params.data || '',
      header: {
        'Host': 'wxa-up.ezrpro.com',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 MicroMessenger/6.7.3(0x16070317) NetType/WIFI Language/zh_CN',
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res)
      },
      fail (err) {

      }
    })
  }
}

export { Http }