import { api } from 'store/api/api'
import {
  StatisticsTopCategoryRequest,
  DataChart,
  StatisticLabelsResponseType,
  StatisticsGeneralTotal,
} from 'types'
import { API_CONST_STATISTICS } from './api.utils'

export const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopSalesCategory: builder.query<DataChart, StatisticsTopCategoryRequest>({
      query: ({ category }) => ({
        url: API_CONST_STATISTICS.TOP_SALES_CATEGORY,
        params: { category },
      }),
    }),

    getGeneralStatistic: builder.query<StatisticLabelsResponseType[], void>({
      query: () => ({ url: API_CONST_STATISTICS.GENERAL_STATISTIC }),
    }),

    getGeneralTotal: builder.query<DataChart, StatisticsGeneralTotal>({
      query: ({ period }) => ({
        url: API_CONST_STATISTICS.GENERAL_TOTAL,
        params: { period },
      }),
    }),
  }),
})

export const {
  useGetTopSalesCategoryQuery,
  useLazyGetTopSalesCategoryQuery,
  useGetGeneralStatisticQuery,
  useLazyGetGeneralTotalQuery,
} = statisticsApi
