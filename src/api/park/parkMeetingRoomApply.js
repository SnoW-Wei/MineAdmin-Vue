import { request } from '@/utils/request.js'

/**
 * 预订申请 API JS
 */

export default {

  /**
   * 获取预订申请分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/meetingRoomApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取预订申请
   * @returns
   */
  read (id) {
    return request({
      url: 'park/meetingRoomApply/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改预订申请数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/meetingRoomApply/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 更新预订申请数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/meetingRoomApply/update/' + id,
      method: 'put',
      data
    })
  },


}