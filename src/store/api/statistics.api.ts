import { api } from 'store/api/api'
import { StatisticsTopCategoryRequest, DataHorizontalChart } from 'types'
import { API_CONST_STATISTICS } from './api.utils'

export const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopSalesCategory: builder.query<DataHorizontalChart, StatisticsTopCategoryRequest>({
      query: ({ category }) => ({
        url: API_CONST_STATISTICS.TOP_SALES_CATEGORY,
        params: { category },
      }),
    }),
  }),
})

export const { useGetTopSalesCategoryQuery, useLazyGetTopSalesCategoryQuery } = statisticsApi
