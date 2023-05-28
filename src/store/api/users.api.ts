import { UserPartialType, UserType } from 'types/UserType/UserType'
import {
  UserLoginRequestType,
  UserLogoutResponseType,
  UserRegistrationRequestType,
  UserResponseType,
} from 'types'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { setUserData, setUserLogout, updateUserData } from 'store/reducers'
import { api } from './api'
import { API_CONST_USERS } from './api.utils'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserType[], string>({
      query: () => ({ url: API_CONST_USERS.USERS }),
    }),
    updateUser: builder.mutation<UserType, UserPartialType>({
      queryFn: async (body, store, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: API_CONST_USERS.USERS,
          method: 'POST',
          body,
        })

        if (result.data) {
          store.dispatch(updateUserData(result.data as UserType))
        }

        return result.data
          ? { data: result.data as UserType }
          : { error: result.error as FetchBaseQueryError }
      },
    }),
    registration: builder.mutation<UserResponseType, UserRegistrationRequestType>({
      queryFn: async (body, store, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: API_CONST_USERS.REGISTRATION,
          method: 'POST',
          body,
        })

        if (result.data) {
          store.dispatch(setUserData(result.data as UserResponseType))
        }

        return result.data
          ? { data: result.data as UserResponseType }
          : { error: result.error as FetchBaseQueryError }
      },
    }),

    login: builder.mutation<UserResponseType, UserLoginRequestType>({
      queryFn: async (body, store, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: API_CONST_USERS.LOGIN,
          method: 'POST',
          body,
        })

        if (result.data) {
          store.dispatch(setUserData(result.data as UserResponseType))
        }

        return result.data
          ? { data: result.data as UserResponseType }
          : { error: result.error as FetchBaseQueryError }
      },
    }),
    logout: builder.mutation<UserLogoutResponseType, void>({
      queryFn: async (body, store, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: API_CONST_USERS.LOGOUT,
          method: 'POST',
          body,
        })

        if (result.data) {
          store.dispatch(setUserLogout())
        }

        return result.data
          ? { data: result.data as UserLogoutResponseType }
          : { error: result.error as FetchBaseQueryError }
      },
    }),
    refresh: builder.mutation<UserResponseType, void>({
      queryFn: async (body, store, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: API_CONST_USERS.REFRESH,
        })

        if (result.data) {
          store.dispatch(setUserData(result.data as UserResponseType))
        }

        return result.data
          ? { data: result.data as UserResponseType }
          : { error: result.error as FetchBaseQueryError }
      },
    }),
  }),
})

export const { useGetAllUsersQuery } = usersApi
