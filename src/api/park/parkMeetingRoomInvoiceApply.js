import { request } from '@/utils/request.js'

/**
 * 发票申请 API JS
 */

export default {

  /**
   * 获取发票申请分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/meetingRoomInvoiceApply/index',
      method: 'get',
      params
    })
  },

  /**
   * 更新发票申请数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/meetingRoomInvoiceApply/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取发票申请
   * @returns
   */
  read (id) {
    return request({
      url: 'park/meetingRoomInvoiceApply/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改发票申请数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/meetingRoomInvoiceApply/changeStatus',
      method: 'put',
      data
    })
  },


}