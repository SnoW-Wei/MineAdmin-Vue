import { request } from '@/utils/request.js'

/**
 * 服务类型 API JS
 */

export default {

  /**
   * 获取服务类型分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/propertyServiceType/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加服务类型
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/propertyServiceType/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新服务类型数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/propertyServiceType/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取服务类型
   * @returns
   */
  read (id) {
    return request({
      url: 'park/propertyServiceType/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将服务类型删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/propertyServiceType/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改服务类型数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyServiceType/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改服务类型数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/propertyServiceType/numberOperation',
      method: 'put',
      data
    })
  },


}