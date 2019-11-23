import request from './request'

export function getItem(id) {
    return request({
        url: '/item',
        method: 'get',
        params: { id }
    })
}
