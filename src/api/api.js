

import wepy from 'wepy'
import fetch from '@/utils/fetch'


const baseUrl = wepy.$instance.globalData.baseUrl;

export default class home extends fetch {
  static WeChatSns(data) {
    const url = `${baseUrl}/wechat/sns`
    return this.post(url, data)
  }
}
