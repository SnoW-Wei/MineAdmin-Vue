import { request } from '@/utils/request.js'

/**
 * 温馨服务申请 API JS
 */

export default {

  /**
   * 获取温馨服务申请分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/peopertyWarmserviceApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取温馨服务申请
   * @returns
   */
  read (id) {
    return request({
      url: 'park/peopertyWarmserviceApply/read/' + id,
      method: 'get'
    })
  },

  /**
   * 修改温馨服务申请数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/peopertyWarmserviceApply/numberOperation',
      method: 'put',
      data
    })
  },


}