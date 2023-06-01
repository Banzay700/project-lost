import { DishSubCategoriesResponseType, DishType, SidebarItemType } from 'types'
import { api } from './api'
import { API_CONST_DISHES } from './api.utils'
// localhost:5001/api/dishes?category=Pizza&q=tomatoes&subcategory=Round_pizza

interface DishesRequest {
  category: string
  search?: string | null
  subcategory?: string | null
}

interface ParamsProps {
  category: string
  q?: string
  subcategory?: string
}

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSvg: builder.query<{ svg: string } | undefined, string | undefined>({
      query: (icon) => ({
        url: `${API_CONST_DISHES.STATIC}${icon}`,
      }),
    }),

    getDishesByCategoryAndFilter: builder.query<DishType[], DishesRequest>({
      query: ({ category, search, subcategory }) => {
        const params: ParamsProps = {
          category,
        }

        if (search) {
          params.q = search
        }
        if (subcategory) {
          params.subcategory = subcategory
        }

        return {
          url: API_CONST_DISHES.DISHES,
          params,
        }
      },
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
  useLazyGetSvgQuery,
  useGetSvgQuery,
} = dishApi
