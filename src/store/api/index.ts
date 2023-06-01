export { api } from './api'

export {
  useCreateOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
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
  useLazyGetSvgQuery,
  useGetSvgQuery,
} from './dish.api'

export {
  useGetAllUsersQuery,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
  useUpdateUserMutation,
} from './users.api'
