import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from 'store/middleware'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Dish', 'Table', 'Order', 'Bills', 'Users', 'Reservation', 'Delivery'],
  endpoints: () => ({}),
})
