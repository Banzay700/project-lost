import {
  DeliveryCreateItemType,
  DeliveryGetRequestType,
  DeliveryResponseType,
  DeliveryType,
  DeliveryUpdateType,
} from 'types'
import { API_CONST_DELIVERY } from './api.utils'
import { api } from './api'

export const deliveryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDelivery: builder.query<DeliveryResponseType, DeliveryGetRequestType>({
      query: ({ status, courier, limit, page }) => {
        const params: DeliveryGetRequestType = {}
        if (status) params.status = status
        if (courier) params.courier = courier
        if (limit && page) {
          params.limit = limit
          params.page = page
        }

        return {
          url: API_CONST_DELIVERY.DELIVERY,
          params,
        }
      },
      providesTags: ['Delivery', 'Bills', 'Order'],
    }),
    getByID: builder.query<DeliveryType, string>({
      query: (id) => ({
        url: `${API_CONST_DELIVERY.DELIVERY}/${id}`,
      }),
    }),
    updateDelivery: builder.mutation<DeliveryType, DeliveryUpdateType>({
      query: (body) => ({
        url: API_CONST_DELIVERY.DELIVERY,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Delivery', 'Bills'],
    }),
    createDelivery: builder.mutation<DeliveryCreateItemType, DeliveryCreateItemType>({
      query: (body) => ({ url: API_CONST_DELIVERY.DELIVERY, method: 'POST', body }),
      invalidatesTags: ['Delivery'],
    }),
  }),
})

export const {
  useCreateDeliveryMutation,
  useGetAllDeliveryQuery,
  useGetByIDQuery,
  useLazyGetByIDQuery,
  useUpdateDeliveryMutation,
} = deliveryApi
