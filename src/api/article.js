import request from '@/utils/request'

// export function fetchList(query) {
//   return request({
//     url: '/vue-element-admin/article/list',
//     method: 'get',
//     params: query
//   })
// }

export function fetchList(pageNum, pageSize, number, sex, order) {
  return request({
    url: '/user/all',
    method: 'get',
    params: {
      pageNum: pageNum,
      pageSize: pageSize,
      number: number,
      sex: sex,
      order: order
    }
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/user/create',
    method: 'post',
    params: {
      name: data.name,
      age: data.age,
      sex: data.sex,
      height: data.height,
      weight: data.weight,
      phone: data.phone
    }
  })
}

export function updateArticle(data) {
  return request({
    url: '/user/update',
    method: 'put',
    params: {
      id: data.id,
      name: data.name,
      age: data.age,
      sex: data.sex,
      height: data.height,
      weight: data.weight,
      phone: data.phone
    }
  })
}

export function deleteArticle(id) {
  return request({
    url: '/user/remove',
    method: 'delete',
    params: {
      id
    }
  })
}
