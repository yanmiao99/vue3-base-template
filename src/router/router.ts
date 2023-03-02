import {createRouter, createWebHashHistory} from "vue-router";
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
    redirect: '/welcome', // 必须使用 path 或者 name
    meta: {
      title: '首页'
    },
    component: () => import('../layout/Layout.vue'),
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎'
        },
        component: () => import('../views/Welcome.vue'),
      },
      {
        name: 'test',
        path: '/test',
        meta: {
          title: '测试'
        },
        component: () => import('../views/Test.vue'),
      },
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('../views/Home.vue'),
      },
      {
        name: 'about',
        path: '/about',
        meta: {
          title: '关于'
        },
        component: () => import('../views/About.vue'),
      },
    ]
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

// 设置浏览器标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router

