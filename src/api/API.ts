import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5001/api/restaurant' }),
  tagTypes: ['Dish', 'Table', 'Order'],
  endpoints: () => ({}),
})
