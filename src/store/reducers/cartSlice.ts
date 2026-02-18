import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../types'

type CartItem = Dish & {
  cartId: string
}

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
      state.items.push({
        ...action.payload,
        cartId: crypto.randomUUID()
      })
      state.isOpen = true
      state.step = 'cart'
    },

    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
      state.step = 'cart'
    },

    clear: (state) => {
      state.items = []
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
  clear,
  goToDelivery,
  goToPayment,
  goToConfirmation,
  backToCart,
  backToDelivery
} = cartSlice.actions

export default cartSlice.reducer
