import { request } from '@/utils/request.js'

/**
 * 图标网格 API JS
 */

export default {

  /**
   * 获取图标网格分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/iconGrid/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加图标网格
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/iconGrid/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新图标网格数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/iconGrid/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取图标网格
   * @returns
   */
  read (id) {
    return request({
      url: 'park/iconGrid/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将图标网格删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/iconGrid/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 修改图标网格数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/iconGrid/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改图标网格数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/iconGrid/changeStatus',
      method: 'put',
      data
    })
  },


}