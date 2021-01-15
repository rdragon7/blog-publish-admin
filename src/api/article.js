import request from '@/network/request'

// 文章列表查询
export const getArticleList = (page,size,articleQuery) => {
  return request({
    url: `/blog/article/selectArticleCondition/${page}/${size}`,
    method: 'post',
    data: articleQuery
  })
}

// 文章分类查询
export const getChannel = () => {
  return request({
    url: `/blog/atype/findAType`,
    method: 'get'
  })
}