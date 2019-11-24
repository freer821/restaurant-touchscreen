import Mock from 'mockjs'
import categories from './category'
import menu from './menu'

//使用mockjs模拟数据
Mock.mock('/category/list', () => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    return {
        data: categories
    }
})


Mock.mock('/menu', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据

    console.log(req);
    console.log(res);

    return {
        data: menu
    }
})
