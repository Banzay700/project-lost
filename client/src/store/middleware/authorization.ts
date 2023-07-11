import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { RootState } from 'store'
import { UserResponseType } from 'types'
import { setUserData, setUserLogout } from 'store/reducers'
import { API_USERS_ENDPOINTS } from 'store/api/api.utils'

const baseQuery = fetchBaseQuery({
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

export const baseQueryWithReAuth: BaseQueryFn = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions)

  if (result?.error?.status === 401) {
    const refresh = await baseQuery(API_USERS_ENDPOINTS.REFRESH, store, extraOptions)

    if (refresh.data as UserResponseType) {
      store.dispatch(setUserData(refresh.data as UserResponseType))

      result = await baseQuery(args, store, extraOptions)
    } else {
      store.dispatch(setUserLogout())

      await baseQuery({ url: API_USERS_ENDPOINTS.LOGOUT, method: 'POST' }, store, extraOptions)
    }
  }

  return result
}
