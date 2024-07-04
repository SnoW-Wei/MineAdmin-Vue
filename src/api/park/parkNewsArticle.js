import { request } from '@/utils/request.js'

/**
 * 产业新闻 API JS
 */

export default {

  /**
   * 获取产业新闻分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'park/newsArticle/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加产业新闻
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'park/newsArticle/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新产业新闻数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'park/newsArticle/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取产业新闻
   * @returns
   */
  read (id) {
    return request({
      url: 'park/newsArticle/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将产业新闻删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'park/newsArticle/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 修改产业新闻数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'park/newsArticle/numberOperation',
      method: 'put',
      data
    })
  },

  /**
   * 更改产业新闻数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'park/newsArticle/changeStatus',
      method: 'put',
      data
    })
  },


}