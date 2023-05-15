import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
// винести потім в .env або в константи
const BASE_URL = 'http://localhost:5001/api/restaurant'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Dish', 'Table', 'Order'],
  endpoints: () => ({}),
})
