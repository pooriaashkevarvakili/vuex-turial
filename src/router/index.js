import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Cart from "../components/Cart";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import FoodDetails from '../components/FoodDetails';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path:'/header',
    name:'header',
    component:Header
  },
  {
    path:'/footer',
    name:'footer',
    component:Footer
  },
  {
    path:"/foodDetails",
    name:'foodDetails',
    component:FoodDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
