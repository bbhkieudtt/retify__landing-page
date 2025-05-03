import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { loadMiddleware } from '@/router/middleware'

import type { App } from 'vue'
import type { Cb } from '@/service/interface'

/**
 * cài đặt 2 chế độ: 
 * - hash: http://url/#/path
 * - web:  http://url/path
 * dựa theo config của env
 */
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 👈 chỉ dùng history mode
  routes
})


export const loadRouter = (APP: App, proceed: Cb) => {
  loadMiddleware(router)

  APP.use(router)

  proceed()
}