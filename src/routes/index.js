import path from '../constants/path'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'

export const routes = [
  { path: path.home, component: Home },
  { path: path.cart, component: Cart },
  { path: path.productDetail, component: ProductDetail }
]
