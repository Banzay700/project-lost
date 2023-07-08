import { DishesResponseType, DishSubCategoriesResponseType, DishType, SidebarItemType } from 'types'
import { api } from './api'
import { API_DISHES_ENDPOINTS } from './api.utils'

interface DishesRequest {
  category?: string
  search?: string | null
  page?: string
  status?: string
  limit?: number
}

interface ParamsProps {
  category?: string
  search?: string
  page?: string
  status?: string
  limit?: number
}

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query<DishesResponseType, DishesRequest>({
      query: ({ category, search, status, page, limit }) => {
        const params: ParamsProps = {
          page: page || '1',
        }

        if (search) params.search = search
        if (category) params.category = category
        if (status) params.status = status
        if (limit) params.limit = limit

        return {
          url: API_DISHES_ENDPOINTS.DISHES,
          params,
        }
      },
      providesTags: ['Dish'],
    }),
    getDishById: builder.query<DishType, string>({
      query: (id) => ({
        url: `${API_DISHES_ENDPOINTS.DISHES}/${id}`,
      }),
      providesTags: ['Dish'],
    }),
    createDish: builder.mutation<DishType, FormData>({
      query: (body) => ({
        url: API_DISHES_ENDPOINTS.DISHES,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Dish'],
    }),
    updateDish: builder.mutation<DishType, FormData>({
      query: (body) => ({
        url: API_DISHES_ENDPOINTS.DISHES,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Dish'],
    }),
    getSvg: builder.query<{ svg: string } | undefined, string | undefined>({
      query: (icon) => ({
        url: `${API_DISHES_ENDPOINTS.STATIC}${icon}`,
      }),
    }),
    getCategories: builder.query<SidebarItemType[], null>({
      query: () => ({
        url: API_DISHES_ENDPOINTS.CATEGORIES,
      }),
    }),
    getSubCategoriesInCategory: builder.query<DishSubCategoriesResponseType[], string>({
      query: (category) => ({
        url: API_DISHES_ENDPOINTS.CATEGORIES,
        params: {
          category,
        },
      }),
    }),
    createCategory: builder.mutation<void, FormData>({
      query: (body) => ({
        url: API_DISHES_ENDPOINTS.CATEGORIES,
        method: 'POST',
        body,
        invalidatesTags: ['Dish'],
      }),
    }),
  }),
})

export const {
  useGetDishesQuery,
  useGetDishByIdQuery,
  useLazyGetDishByIdQuery,
  useCreateDishMutation,
  useUpdateDishMutation,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useGetSubCategoriesInCategoryQuery,
  useLazyGetSubCategoriesInCategoryQuery,
  useLazyGetSvgQuery,
  useGetSvgQuery,
  useCreateCategoryMutation,
} = dishApi
