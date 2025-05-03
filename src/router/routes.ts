import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Test from '@/views/Test.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Test },
  { path: '/test', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(), // ⬅️ Thay vì createWebHashHistory()
  routes
});

export default router;
