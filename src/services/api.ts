import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type CheckoutResponse = {
  orderId: string
}

export type CheckoutRequest = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useCheckoutMutation } = api
