import { request } from '@/utils/request.js'

/**
 * 园区租赁-温馨服务 API JS
 */

export default {

  /**
   * 获取园区租赁-温馨服务分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/propertyWarmserviceRent/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加园区租赁-温馨服务
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/propertyWarmserviceRent/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新园区租赁-温馨服务数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/propertyWarmserviceRent/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取园区租赁-温馨服务
   * @returns
   */
  read (id) {
    return request({
      url: 'park/propertyWarmserviceRent/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将园区租赁-温馨服务删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/propertyWarmserviceRent/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改园区租赁-温馨服务数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyWarmserviceRent/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改园区租赁-温馨服务数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/propertyWarmserviceRent/numberOperation',
      method: 'put',
      data
    })
  },


}