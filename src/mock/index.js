import Mock from 'mockjs'
import menus from './menu'
//使用mockjs模拟数据
Mock.mock('/menu/list', () => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据

    return {
        data: menus
    }
})
