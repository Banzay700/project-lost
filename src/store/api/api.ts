import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
// винести потім в .env або в константи
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Dish', 'Table', 'Order', 'Bills'],
  endpoints: () => ({}),
})
