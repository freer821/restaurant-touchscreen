import request from './request'

export function getMenu(id) {
    return request({
        url: '/menu',
        method: 'get',
        params: { id }
    })
}
