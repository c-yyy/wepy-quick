import wepy from 'wepy'

export default class fetch {
  static request(method, url, data) {
    let param = {
      url: `${wepy.$instance.globalData.baseUrl}${url}`,
      method: method,
      data: data,
      header: {
        'X-Channel': 'wechatApp',
        'Content-type': 'application/json',
        'X-Token': wx.getStorageSync('TOKEN'),
        'cache-control': 'no-cache',
      }
    }
    return wepy.request(param)
  }
  static get(url, data) {
    let arr = [];
    for (const i in data) {
      arr.push(`${i}=${data[i]}`)
    }
    return this.request('GET', `${url}?${arr.join('&')}`)
  }
  static post(url, data) {
    return this.request('POST', url, data)
  }
  static delete(url, data) {
    return this.request('DELETE', url, data)
  }
  static put(url, data) {
    return this.request('PUT', url, data)
  }
}
