import {
  UserLoginRequestType,
  UserLogoutResponseType,
  UserRegistrationRequestType,
  UserResponseType,
  UserPartialType,
  UserType,
  UserUpdateAvatar,
} from 'types'
import { setUserData, setUserInfo, setUserLogout } from 'store/reducers'
import { api } from './api'
import { API_CONST_USERS } from './api.utils'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserType[], string>({
      query: () => ({ url: API_CONST_USERS.USERS }),
    }),
    updateUser: builder.mutation<UserType, UserPartialType>({
      query: (body) => ({
        url: `${API_CONST_USERS.USERS}/${body.id}`,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserInfo(data))
        }
      },
    }),
    updateUserAvatar: builder.mutation<UserType, UserUpdateAvatar>({
      query: (body) => ({
        url: `${API_CONST_USERS.USERS}/${body.id}`,
        method: 'POST',
        body: body.body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserInfo(data))
        }
      },
    }),
    registration: builder.mutation<UserResponseType, UserRegistrationRequestType>({
      query: (body) => ({
        url: API_CONST_USERS.REGISTRATION,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserData(data))
        }
      },
    }),

    login: builder.mutation<UserResponseType, UserLoginRequestType>({
      query: (body) => ({
        url: API_CONST_USERS.LOGIN,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserData(data))
        }
      },
    }),
    logout: builder.mutation<UserLogoutResponseType, void>({
      query: () => ({
        url: API_CONST_USERS.LOGOUT,
        method: 'POST',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserLogout())
        }
      },
    }),
    refresh: builder.query<UserResponseType, void>({
      query: () => ({
        url: API_CONST_USERS.REFRESH,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserData(data))
        }
      },
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
} = usersApi
