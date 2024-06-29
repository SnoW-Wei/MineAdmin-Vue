import { request } from '@/utils/request.js'

/**
 * 小程序用户 API JS
 */

export default {

  /**
   * 获取小程序用户分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/mpUser/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取小程序用户
   * @returns
   */
  read (id) {
    return request({
      url: 'park/mpUser/read/' + id,
      method: 'get'
    })
  },


}