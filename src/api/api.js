import fetch from './fetch'

export default class api extends fetch {
  // 登录
  static sns(data) {
    return this.post(`/sns`, data)
  }
}
