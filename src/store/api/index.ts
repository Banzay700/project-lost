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
  useGetTableStatusQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
  useLazyGetTableStatusQuery,
} from './tables.api'
export {
  useCreateBillMutation,
  useGetAllBillsQuery,
  useLazyGetOneBillQuery,
  useLazySendEmailQuery,
  useUpdateBillMutation,
} from './bills.api'

export {
  useGetSubCategoriesInCategoryQuery,
  useLazyGetSubCategoriesInCategoryQuery,
  useGetDishByIdQuery,
  useLazyGetDishByIdQuery,
  useGetDishesQuery,
  useUpdateDishMutation,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
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
