import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './features/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export default rootReducer
