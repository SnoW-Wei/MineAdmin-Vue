import { request } from '@/utils/request.js'

/**
 * 会议室基本费用 API JS
 */

export default {

  /**
   * 获取会议室基本费用分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/meetingRoomPrice/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加会议室基本费用
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/meetingRoomPrice/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新会议室基本费用数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/meetingRoomPrice/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取会议室基本费用
   * @returns
   */
  read (id) {
    return request({
      url: 'park/meetingRoomPrice/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将会议室基本费用删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/meetingRoomPrice/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 修改会议室基本费用数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/meetingRoomPrice/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改会议室基本费用数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/meetingRoomPrice/changeStatus',
      method: 'put',
      data
    })
  },


}