import request from '@/utils/request'

export function login(data) {
  debugger
  return request({
    url: '/user/login',
    method: 'get',
    params: {
      username: data.username,
      password: data.password
    }
  })
}

export function getInfo(token) {
  debugger
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
