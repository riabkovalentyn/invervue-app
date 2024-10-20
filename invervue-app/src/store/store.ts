import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InvetmentForm from '@/views/InvetmentForm.vue';
import Summary from '@/views/Summary.vue';


const routes = [
{
  path: '/',
  name: 'InvestmentForm',
  component: InvetmentForm
},
{
  path: '/summary',
  name: 'Summary',
  component: Summary
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
