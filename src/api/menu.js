import request from './request'

export function getMenu() {
    return request({
        url: '/menu/list',
        method: 'get'
    })
}

export function getMenuDetail(id) {
    return request({
        url: '/menu/detail',
        method: 'get',
        params: { id }
    })
}

