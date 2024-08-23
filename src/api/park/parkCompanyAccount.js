import { request } from '@/utils/request.js'

/**
 * 对公账户信息 API JS
 */

export default {

  /**
   * 获取对公账户信息分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/companyAccount/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加对公账户信息
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/companyAccount/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新对公账户信息数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/companyAccount/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取对公账户信息
   * @returns
   */
  read (id) {
    return request({
      url: 'park/companyAccount/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将对公账户信息删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/companyAccount/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改对公账户信息数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/companyAccount/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改对公账户信息数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/companyAccount/numberOperation',
      method: 'put',
      data
    })
  },


}