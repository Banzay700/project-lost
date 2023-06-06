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
export {
  useCreateBillMutation,
  useGetAllBillsQuery,
  useLazyGetOneBillQuery,
  useLazySendEmailQuery,
  useUpdateBillMutation,
} from './bills.api'

export {
  useGetSubCategoriesInCategoryQuery,
  useGetDishesByCategoryAndFilterQuery,
  useLazyGetSvgQuery,
  useGetSvgQuery,
} from './dish.api'

export {
  useGetUsersInLoginQuery,
  useGetAllUsersQuery,
  useLazyGetUserByIDQuery,
  useLogoutMutation,
  useLoginMutation,
  useRefreshQuery,
  useUpdateUserMutation,
  useRegistrationMutation,
} from './users.api'
