export { api } from './api'

export {
  useCreateOrderMutation,
  useGetOrderQuery,
  useLazyGetOrderQuery,
  useGetAllOrdersQuery,
} from './order.api'

export {
  useGetFreeTablesQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
} from './table.api'
export { useCreateBillMutation, useGetAllBillsQuery } from './bills.api'

export {
  useGetSubCategoriesInCategoryQuery,
  useGetDishesByCategoryAndFilterQuery,
} from './dish.api'

export {
  useGetAllUsersQuery,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
  useUpdateUserMutation,
} from './users.api'
