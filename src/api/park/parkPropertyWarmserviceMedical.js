import { request } from '@/utils/request.js'

/**
 * 医疗箱-温馨服务 API JS
 */

export default {

  /**
   * 获取医疗箱-温馨服务分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/propertyWarmserviceMedical/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加医疗箱-温馨服务
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/propertyWarmserviceMedical/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新医疗箱-温馨服务数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/propertyWarmserviceMedical/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取医疗箱-温馨服务
   * @returns
   */
  read (id) {
    return request({
      url: 'park/propertyWarmserviceMedical/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将医疗箱-温馨服务删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/propertyWarmserviceMedical/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改医疗箱-温馨服务数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyWarmserviceMedical/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改医疗箱-温馨服务数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/propertyWarmserviceMedical/numberOperation',
      method: 'put',
      data
    })
  },


}