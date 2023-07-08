import { api } from 'store/api/api'
import {
  StatisticsTopCategoryRequest,
  DataHorizontalChart,
  StatisticLabelsResponseType,
  DataDoughnutChartType,
  ServiceTypeStatisticRequest,
} from 'types'
import { API_CONST_STATISTICS } from './api.utils'

export const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopSalesCategory: builder.query<DataHorizontalChart, StatisticsTopCategoryRequest>({
      query: ({ category }) => ({
        url: API_CONST_STATISTICS.TOP_SALES_CATEGORY,
        params: { category },
      }),
    }),

    getGeneralStatistic: builder.query<StatisticLabelsResponseType[], void>({
      query: () => ({ url: API_CONST_STATISTICS.GENERAL_STATISTIC }),
    }),

    getServiceTypeStatistic: builder.query<DataDoughnutChartType, ServiceTypeStatisticRequest>({
      query: ({ period }) => ({
        url: API_CONST_STATISTICS.SERVICE_TYPE_STATISTIC,
        params: { period },
      }),
    }),
  }),
})

export const {
  useGetTopSalesCategoryQuery,
  useLazyGetTopSalesCategoryQuery,
  useGetGeneralStatisticQuery,
  useGetServiceTypeStatisticQuery,
  useLazyGetServiceTypeStatisticQuery,
} = statisticsApi
