import { request } from '@/utils/request.js'

/**
 * banner图 API JS
 */

export default {

  /**
   * 获取banner图分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/banner/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加banner图
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/banner/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新banner图数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/banner/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取banner图
   * @returns
   */
  read (id) {
    return request({
      url: 'park/banner/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将banner图删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/banner/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改banner图数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/banner/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改banner图数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/banner/numberOperation',
      method: 'put',
      data
    })
  },


}