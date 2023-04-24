import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import NotFound from '../components/domain/NotFound/NotFound'
import Login from '../pages/Login/Login'

export const routes = {
  HOME: { path: '/', component: Home },
  CART: { path: '/cart', component: Cart },
  PRODUCT_DETAIL: { path: '/product-detail/:id', component: ProductDetail },
  LOGIN: { path: '/login', component: Login },
  NOT_FOUND: { path: '*', component: NotFound }
}
