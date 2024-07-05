import { request } from '@/utils/request.js'

/**
 * 详情配置 API JS
 */

export default {

  /**
   * 获取详情配置分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/meetingRoom/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加详情配置
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/meetingRoom/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新详情配置数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/meetingRoom/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取详情配置
   * @returns
   */
  read (id) {
    return request({
      url: 'park/meetingRoom/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将详情配置删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/meetingRoom/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改详情配置数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/meetingRoom/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改详情配置数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/meetingRoom/numberOperation',
      method: 'put',
      data
    })
  },


}