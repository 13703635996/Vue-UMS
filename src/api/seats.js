import request from '@/utils/request'

export function seatList(floor, parity, number) {
  debugger
  return request({
    url: '/lib/searchSeat',
    method: 'get',
    params: {
      floor: floor,
      parity: parity,
      number: number
    }
  })
}

export function orderList(floor, number) {
  return request({
    url: '/lib/seat',
    method: 'get',
    params: {
      floor: floor,
      number: number
    }
  })
}

export function selectSeat(id, begin, end, user) {
  return request({
    url: '/lib/selectSeat',
    method: 'put',
    params: {
     id,begin,end,user
    }
  })
}
