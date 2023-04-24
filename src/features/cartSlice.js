import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {},
  cartTotalQuantity: localStorage.getItem('cartItems')
    ? Object.keys(JSON.parse(localStorage.getItem('cartItems'))).length
    : 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload

      const index = Object.values(state.cartItems).findIndex((item) => item.id === id)
      if (index >= 0) {
        state.cartItems[id].quantity += 1
      } else {
        state.cartItems[id] = { ...action.payload, quantity: 1 }
        toast.success(`đã thêm sản phẩm ${action.payload.name} vào giỏ hàng`)
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    removeCart(state, action) {
      const { id, name } = action.payload

      if (!id) return
      delete state.cartItems[id]

      toast.warning(`đã xoá sản phẩm ${name} khỏi giỏ hàng`)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    changeQuantity(state, action) {
      const { id, quantity } = action.payload
      state.cartItems[id].quantity = quantity
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  }
})

export const { addToCart, removeCart, changeQuantity } = cartSlice.actions
export default cartSlice.reducer
