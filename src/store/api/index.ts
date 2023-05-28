export { api } from './api'

export { useCreateOrderMutation, useGetOrderQuery, useLazyGetOrderQuery } from './order.api'

export {
  useGetFreeTablesQuery,
  useGetTableReservationForCurrentDayQuery,
  useUpdateTableStatusMutation,
} from './table.api'
export { useCreateBillMutation, useGetAllBillsQuery } from './bills.api'
