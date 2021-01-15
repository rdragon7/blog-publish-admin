import request from '@/network/request'

// 用户登录
export const login = loginForm => {
  return request({
    url: `/blog/user/login`,
    method: 'post',
    data: loginForm
  })
}

// 查询用户
export const getUser = () => {
  return request({
    url: `/blog/user/selectUser`,
    method: 'get'
  })
}