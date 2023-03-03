import {createRouter, createWebHashHistory} from "vue-router";
import menuList from "../mock/menuList";
/*
* createRouter 路由器
* createWebHashHistory  Hash
* createWebHistory  History
*
* 注意点 :
* 如果你的 router 和文件的名称的大小写不一致 ,会导致热更新失效 (大小写敏感)
* */

// 页面路由
const routes = [
  {
    name: 'layout',
    path: '/',
    // redirect: '/welcome', // 必须使用 path 或者 name
    meta: {
      title: '首页'
    },
    component: () => import('../layout/Layout.vue'),
    // children: [
    //   {
    //     name: 'welcome',
    //     path: '/welcome',
    //     meta: {
    //       title: '欢迎'
    //     },
    //     component: () => import('../views/Welcome.vue'),
    //   },
    // ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登陆'
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:catchAll(.*)',  // 导出必须使用 catchAll 正则匹配
    name: '/404',
    meta: {
      title: '页面找不到'
    },
    component: () => import('../components/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),  // 选择模式
  routes
})

const routerTreeFn = (list: any) => {
  // 首先把你需要动态路由的组件地址全部获取
  // @ts-ignore
  let modules = import.meta.glob('../views/**/*.vue')
  list.forEach(((menu: any) => {
    if (menu.children && menu.children.length > 0 && menu.children[0].menuType.toString() === '1') {
      routerTreeFn(menu.children)
    } else if (menu.menuType.toString() === '1') {
      router.addRoute('layout', {
        path: menu.path,
        name: menu.path,
        meta: {
          title: menu.menuName
        },
        component: modules[`../views${menu.path}.vue`]
      })
    }
  }))
}

// 设置浏览器标题
router.beforeEach((to, from, next) => {
  // 动态设置浏览器标题
  document.title = to.meta.title as string

  // 动态设置路由
  routerTreeFn(menuList)

  next()
})

export default router

