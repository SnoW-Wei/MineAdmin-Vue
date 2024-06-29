import { request } from '@/utils/request.js'

/**
 * 公告 API JS
 */

export default {

  /**
   * 获取公告分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/announce/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加公告
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/announce/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新公告数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/announce/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取公告
   * @returns
   */
  read (id) {
    return request({
      url: 'park/announce/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将公告删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/announce/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 修改公告数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/announce/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改公告数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/announce/changeStatus',
      method: 'put',
      data
    })
  },


}