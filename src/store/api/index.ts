export { api } from './api'

export {
  useCreateOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
  useLazyGetOrderQuery,
  useGetAllOrdersQuery,
  useDeleteOrderMutation,
} from './orders.api'

export {
  useGetFreeTablesQuery,
  useGetTableStatusQuery,
  useGetTablesCanvasQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
  useLazyGetTableStatusQuery,
  useLazyGetTablesCanvasQuery,
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
  useCreateDishMutation,
  useUpdateDishMutation,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useLazyGetSvgQuery,
  useGetSvgQuery,
  useCreateCategoryMutation,
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

export {
  useCreateReservationMutation,
  useUpdateReservationMutation,
  useLazyGetReservationsByDateQuery,
  useGetReservationInfoQuery,
  useLazyGetReservationInfoQuery,
} from './reservation.api'
