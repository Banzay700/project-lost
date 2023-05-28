import { IEmployee } from 'types/IEmployee'
import { api } from './api'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<IEmployee[], string>({
      query: () => ({ url: '/users' }),
      providesTags: ['Users'],
    }),
  }),
})

export const { useGetAllUsersQuery } = usersApi
