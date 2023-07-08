import { api } from 'store/api/api'
import {
  StatisticChartsRequestType,
  DataChart,
  StatisticLabelsResponseType,
  DataDoughnutChartType,
} from 'types'
import { API_STATISTICS_ENDPOINTS } from './api.utils'

export const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopSalesCategory: builder.query<DataChart, StatisticChartsRequestType>({
      query: ({ category }) => ({
        url: API_STATISTICS_ENDPOINTS.TOP_SALES_CATEGORY,
        params: { category },
      }),
    }),

    getGeneralStatistic: builder.query<StatisticLabelsResponseType[], void>({
      query: () => ({ url: API_STATISTICS_ENDPOINTS.GENERAL_STATISTIC }),
    }),

    getServiceTypeStatistic: builder.query<DataDoughnutChartType, StatisticChartsRequestType>({
      query: ({ period }) => ({
        url: API_STATISTICS_ENDPOINTS.SERVICE_TYPE_STATISTIC,
        params: { period },
      }),
    }),

    getGeneralTotal: builder.query<DataChart, StatisticChartsRequestType>({
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
} = statisticsApi
