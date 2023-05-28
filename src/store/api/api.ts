import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { RootState } from 'store/store'
import { setUserData, setUserLogout } from 'store/reducers'
import { UserResponseType } from 'types/UserType'
import { API_CONST_USERS } from './api.utils'

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).user

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReAuth: BaseQueryFn = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions)

  if (result?.error?.status === 401) {
    const refresh = await baseQuery(API_CONST_USERS.REFRESH, store, extraOptions)

    if (refresh.data as UserResponseType) {
      store.dispatch(setUserData(refresh.data as UserResponseType))

      result = await baseQuery(args, store, extraOptions)
    } else {
      store.dispatch(setUserLogout())

      await baseQuery({ url: API_CONST_USERS.LOGOUT, method: 'POST' }, store, extraOptions)
    }
  }

  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Dish', 'Table', 'Order', 'Bills', 'Users'],
  endpoints: () => ({}),
})
