import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    syncData(_, action) {
      return action.payload
    },
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

      const newState = { ...state }

      delete newState.cartItems[id]

      toast.warning(`đã xoá sản phẩm ${name} khỏi giỏ hàng`)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

      return { ...state, ...newState }
    },

    changeQuantity(state, action) {
      const { id, quantity } = action.payload
      state.cartItems[id].quantity = quantity
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  }
})

export const { addToCart, removeCart, changeQuantity, syncData } = cartSlice.actions
export default cartSlice.reducer
