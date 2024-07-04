import { request } from '@/utils/request.js'

/**
 * 服务申请 API JS
 */

export default {

  /**
   * 获取服务申请分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/industrialServiceApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 更新服务申请数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/industrialServiceApply/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取服务申请
   * @returns
   */
  read (id) {
    return request({
      url: 'park/industrialServiceApply/read/' + id,
      method: 'get'
    })
  },


}