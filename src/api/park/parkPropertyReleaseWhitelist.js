import { request } from '@/utils/request.js'

/**
 * 物品放行手机白名单 API JS
 */

export default {

  /**
   * 获取物品放行手机白名单分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/index',
      method: 'get',
      params
    })
  },

  /**
    * 物品放行手机白名单导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/import',
      method: 'post',
      data
    })
  },

  /**
   * 物品放行手机白名单下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'park/propertyReleaseWhitelist/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 更新物品放行手机白名单数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 更改物品放行手机白名单数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改物品放行手机白名单数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 读取物品放行手机白名单
   * @returns
   */
  read (id) {
    return request({
      url: 'park/propertyReleaseWhitelist/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将物品放行手机白名单删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/propertyReleaseWhitelist/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 添加物品放行手机白名单
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/save',
      method: 'post',
      data
    })
  },

  /**
   * 物品放行手机白名单导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },

  /**
   * 从回收站获取物品放行手机白名单数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'park/propertyReleaseWhitelist/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复物品放行手机白名单数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'park/propertyReleaseWhitelist/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除物品放行手机白名单
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'park/propertyReleaseWhitelist/realDelete',
      method: 'delete',
      data
    })
  },


}