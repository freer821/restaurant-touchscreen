import request from './request'

export function getMenu() {
    return request({
        url: '/menu',
        method: 'get'
    })
}
