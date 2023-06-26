import { DeliveryCreateItemType } from 'types'
import { api } from './api'

export const deliveryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDelivery: builder.mutation<DeliveryCreateItemType, DeliveryCreateItemType>({
      query: (body) => ({ url: '/delivery', method: 'POST', body }),
      invalidatesTags: ['Delivery'],
    }),
  }),
})

export const { useCreateDeliveryMutation } = deliveryApi
