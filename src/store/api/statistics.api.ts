import { api } from 'store/api/api'
import {
  StatisticChartsRequestType,
  StatisticsChartDataType,
  StatisticLabelsResponseType,
} from 'types'
import { API_STATISTICS_ENDPOINTS } from './api.utils'

export const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopSalesCategory: builder.query<StatisticsChartDataType, StatisticChartsRequestType>({
      query: ({ category }) => ({
        url: API_STATISTICS_ENDPOINTS.TOP_SALES_CATEGORY,
        params: { category },
      }),
    }),

    getGeneralStatistic: builder.query<StatisticLabelsResponseType[], void>({
      query: () => ({ url: API_STATISTICS_ENDPOINTS.GENERAL_STATISTIC }),
    }),

    getServiceTypeStatistic: builder.query<StatisticsChartDataType, StatisticChartsRequestType>({
      query: ({ period }) => ({
        url: API_STATISTICS_ENDPOINTS.SERVICE_TYPE_STATISTIC,
        params: { period },
      }),
    }),

    getAverageBillStatistic: builder.query<StatisticsChartDataType, StatisticChartsRequestType>({
      query: ({ period }) => ({
        url: API_STATISTICS_ENDPOINTS.AVERAGE_BILL_STATISTIC,
        params: { period },
      }),
    }),

    getGeneralTotal: builder.query<StatisticsChartDataType, StatisticChartsRequestType>({
      query: ({ period }) => ({
        url: API_STATISTICS_ENDPOINTS.GENERAL_TOTAL,
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
  useLazyGetGeneralTotalQuery,
  useLazyGetAverageBillStatisticQuery,
} = statisticsApi
