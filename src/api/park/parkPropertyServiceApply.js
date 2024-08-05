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
      url: 'park/propertyServiceApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 更改服务申请数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyServiceApply/changeStatus',
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
      url: 'park/propertyServiceApply/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更新服务申请数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/propertyServiceApply/update/' + id,
      method: 'put',
      data
    })
  },


}