import { DishSubCategoriesResponseType, DishType, SidebarItemType } from 'types'
import { api } from './api'
import { API_CONST_DISHES } from './api.utils'
// localhost:5001/api/dishes?category=Pizza&q=tomatoes&subcategory=Round_pizza

interface DishesRequest {
  category: string
  search?: string
  subcategory?: string[]
}

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDishesByCategoryAndFilter: builder.query<DishType[], DishesRequest>({
      query: ({ category, search, subcategory }) => ({
        url: API_CONST_DISHES.DISHES,
        params: {
          category,
          q: search,
          subcategory,
        },
      }),
      providesTags: ['Dish'],
    }),
    getCategories: builder.query<SidebarItemType[], null>({
      query: () => ({
        url: API_CONST_DISHES.CATEGORIES,
      }),
    }),
    getSubCategoriesInCategory: builder.query<DishSubCategoriesResponseType[], string>({
      query: (category) => ({
        url: API_CONST_DISHES.CATEGORIES,
        params: {
          category,
        },
      }),
    }),
  }),
})

export const {
  useGetDishesByCategoryAndFilterQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesInCategoryQuery,
} = dishApi
