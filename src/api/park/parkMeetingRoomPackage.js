import { request } from '@/utils/request.js'

/**
 * 套餐配置 API JS
 */

export default {

  /**
   * 获取套餐配置分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/meetingRoomPackage/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加套餐配置
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/meetingRoomPackage/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新套餐配置数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/meetingRoomPackage/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取套餐配置
   * @returns
   */
  read (id) {
    return request({
      url: 'park/meetingRoomPackage/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改套餐配置数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/meetingRoomPackage/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改套餐配置数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/meetingRoomPackage/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 将套餐配置删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/meetingRoomPackage/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取套餐配置数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'park/meetingRoomPackage/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复套餐配置数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'park/meetingRoomPackage/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除套餐配置
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'park/meetingRoomPackage/realDelete',
      method: 'delete',
      data
    })
  },


}