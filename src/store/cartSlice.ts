import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../mock/menu'

type CartItem = Dish

type CartState = {
  items: CartItem[]
  isOpen: boolean
  step: 'cart' | 'delivery' | 'payment' | 'confirmation'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
      state.isOpen = true
      state.step = 'cart'
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
      state.step = 'cart'
    },

    goToDelivery: (state) => {
      state.step = 'delivery'
    },

    goToPayment: (state) => {
      state.step = 'payment'
    },

    goToConfirmation: (state) => {
      state.step = 'confirmation'
      state.items = []
    },

    backToCart: (state) => {
      state.step = 'cart'
    },

    backToDelivery: (state) => {
      state.step = 'delivery'
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  goToDelivery,
  goToPayment,
  goToConfirmation,
  backToCart,
  backToDelivery
} = cartSlice.actions

export default cartSlice.reducer
