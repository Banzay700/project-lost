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
import { RootState } from 'store/store'
import { api } from './api'
import { API_USERS_ENDPOINTS } from './api.utils'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsersInLogin: builder.query<UserInLoginType[], void>({
      query: () => ({ url: API_USERS_ENDPOINTS.USERS_IN_LOGIN }),
      providesTags: ['Users'],
    }),
    getAllUsers: builder.query<UserAllResponseType, UserRequestType>({
      query: (params) => ({ url: API_USERS_ENDPOINTS.USERS, params }),
      providesTags: ['Users'],
    }),
    getUserByID: builder.query<UserType, string>({
      query: (id) => ({ url: `${API_USERS_ENDPOINTS.USERS}/${id}` }),
      providesTags: ['Users'],
    }),
    updateUser: builder.mutation<UserType, UserPartialType>({
      query: (body) => ({
        url: `${API_USERS_ENDPOINTS.USERS}/${body.id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
      onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
        const { data } = await queryFulfilled
        const { user } = (getState() as RootState).user

        if (data.id === user.id) {
          dispatch(setUserInfo(data))
        }
      },
    }),
    updateUserAvatar: builder.mutation<UserType, UserUpdateAvatar>({
      query: (body) => ({
        url: `${API_USERS_ENDPOINTS.USERS}/${body.id}`,
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
        url: API_USERS_ENDPOINTS.REGISTRATION,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),

    login: builder.mutation<UserResponseType, UserLoginRequestType>({
      query: (body) => ({
        url: API_USERS_ENDPOINTS.LOGIN,
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
        url: API_USERS_ENDPOINTS.LOGOUT,
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
        url: API_USERS_ENDPOINTS.REFRESH,
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
  useLazyGetUserByIDQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
} = usersApi
