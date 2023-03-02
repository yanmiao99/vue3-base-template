/*
* 环境配置封装
* */
// @ts-ignore
const env: string = import.meta.env.MODE || 'prod';

// MODE: "development"

const EnvConfig: any = {
  dev: { // 开发环境
    baseApi: '/api',
    mockApi: ''
  },
  test: { // 测试环境
    baseApi: '/',
    mockApi: ''
  },
  prod: { // 线上环境
    baseApi: '/',
    mockApi: ''
  }
}


export default {
  env,
  namespace: 'manager', // 命名空间
  mock: false, // 是否启动全局 mock
  ...EnvConfig[env]
}
