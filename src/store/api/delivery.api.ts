import {
  DeliveryCreateItemType,
  DeliveryGetRequestType,
  DeliveryResponseType,
  DeliveryType,
  DeliveryUpdateType,
} from 'types'
import { API_DELIVERY_ENDPOINTS } from './api.utils'
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
          url: API_DELIVERY_ENDPOINTS.DELIVERY,
          params,
        }
      },
      providesTags: ['Delivery'],
    }),
    getByID: builder.query<DeliveryType, string>({
      query: (id) => ({
        url: `${API_DELIVERY_ENDPOINTS.DELIVERY}/${id}`,
      }),
      providesTags: ['Delivery'],
    }),
    updateDelivery: builder.mutation<DeliveryType, DeliveryUpdateType>({
      query: (body) => ({
        url: API_DELIVERY_ENDPOINTS.DELIVERY,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Delivery', 'Bills', 'Statistics'],
    }),
    createDelivery: builder.mutation<DeliveryCreateItemType, DeliveryCreateItemType>({
      query: (body) => ({ url: API_DELIVERY_ENDPOINTS.DELIVERY, method: 'POST', body }),
      invalidatesTags: ['Delivery', 'Statistics'],
    }),
    sendNotify: builder.query<DeliveryType, string>({
      query: (id) => ({
        url: `${API_DELIVERY_ENDPOINTS.NOTIFY}/${id}`,
      }),
    }),
  }),
})

export const {
  useCreateDeliveryMutation,
  useGetAllDeliveryQuery,
  useGetByIDQuery,
  useLazyGetByIDQuery,
  useUpdateDeliveryMutation,
  useLazySendNotifyQuery,
} = deliveryApi
