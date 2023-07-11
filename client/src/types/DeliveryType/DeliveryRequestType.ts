export type DeliveryGetRequestType = {
  status?: 'opened' | 'closed'
  courier?: string
  limit?: number
  page?: number | string
}
