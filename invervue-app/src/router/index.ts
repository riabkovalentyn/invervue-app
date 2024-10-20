import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [] // Define your routes here

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
