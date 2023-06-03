import {
  UserLoginRequestType,
  UserLogoutResponseType,
  UserResponseType,
  UserPartialType,
  UserType,
  UserUpdateAvatar,
  UserInLoginType,
  UserRequestType,
  UserAllResponseType,
} from 'types'
import { setUserData, setUserInfo, setUserLogout } from 'store/reducers'
import { api } from './api'
import { API_CONST_USERS } from './api.utils'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsersInLogin: builder.query<UserInLoginType[], void>({
      query: () => ({ url: API_CONST_USERS.USERS_IN_LOGIN }),
    }),
    getAllUsers: builder.query<UserAllResponseType, UserRequestType>({
      query: (params) => ({ url: API_CONST_USERS.USERS, params }),
      providesTags: ['Users'],
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
      invalidatesTags: ['Users'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(setUserInfo(data))
        }
      },
    }),
    registration: builder.mutation<{ data: string }, FormData>({
      query: (body) => ({
        url: API_CONST_USERS.REGISTRATION,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
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
  useGetUsersInLoginQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
} = usersApi
