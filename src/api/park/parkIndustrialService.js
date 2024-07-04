import { request } from '@/utils/request.js'

/**
 * 服务内容 API JS
 */

export default {

  /**
   * 获取服务内容分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/industrialService/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加服务内容
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/industrialService/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新服务内容数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/industrialService/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取服务内容
   * @returns
   */
  read (id) {
    return request({
      url: 'park/industrialService/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将服务内容删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/industrialService/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改服务内容数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/industrialService/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改服务内容数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/industrialService/numberOperation',
      method: 'put',
      data
    })
  },


}