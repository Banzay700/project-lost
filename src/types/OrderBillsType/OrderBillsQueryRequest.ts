export type OrderBillsQueryRequest = {
  status?: string | null
  orderType?: string | null
  page?: string | number
  limit?: number
}
