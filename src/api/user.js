import request from '@/network/request'

// 用户登录
export const login = loginForm => {
  return request({
    url: `/blog/user/login`,
    method: 'post',
    data: loginForm
  })
}