import { request } from '@/utils/request.js'

/**
 * 物品放行 API JS
 */

export default {

  /**
   * 获取物品放行分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/propertyReleaseApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取物品放行
   * @returns
   */
  read (id) {
    return request({
      url: 'park/propertyReleaseApply/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改物品放行数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyReleaseApply/changeStatus',
      method: 'put',
      data
    })
  },


}