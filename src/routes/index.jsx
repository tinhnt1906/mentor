import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'

export const routes = {
  HOME: { path: '/', component: Home },
  CART: { path: '/cart', component: Cart },
  PRODUCT_DETAIL: { path: '/detail/:slug', component: ProductDetail },
  NOT_FOUND:{
    path:'*',
    component: <>ERROR</>
  }
}

// export const  toDetail = (slug)=>{
//   return `/detail/${slug}`
// }