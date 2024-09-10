import { request } from '@/utils/request.js'

/**
 * 配套宿舍 API JS
 */

export default {

  /**
   * 获取配套宿舍分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/dormitory/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加配套宿舍
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/dormitory/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新配套宿舍数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/dormitory/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取配套宿舍
   * @returns
   */
  read (id) {
    return request({
      url: 'park/dormitory/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将配套宿舍删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/dormitory/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改配套宿舍数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/dormitory/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改配套宿舍数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/dormitory/numberOperation',
      method: 'put',
      data
    })
  },


}