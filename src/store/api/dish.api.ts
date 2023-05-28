// import { DataCategoryType, IDish, RequiredIdDish } from '../../types'
import { DataSubCategoriesResponseType, DishProductType, IDish, SidebarItemsType } from 'types'
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
    getDishesByCategoryAndFilter: builder.query<DishProductType[], DishesRequest>({
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
    // getDishesByCategory: builder.query<IDish[], string>({
    //   query: (category) => ({
    //     url: `/dishes/by_category/${category}`,
    //   }),
    // }),
    // getDishesByCategoryAndSubCategory: builder.query<
    //   IDish[],
    //   { category: string; subcategory: string }
    // >({
    //   query: ({ category, subcategory }) => ({
    //     url: `/dishes/by_category/${category}/${subcategory}`,
    //   }),
    // }),
    // getDish: builder.query<IDish, string>({
    //   query: (id) => ({
    //     url: `/dishes/${id}`,
    //   }),
    // }),
    getCategories: builder.query<SidebarItemsType[], null>({
      query: () => ({
        url: API_CONST_DISHES.CATEGORIES,
      }),
    }),
    getSubCategoriesInCategory: builder.query<DataSubCategoriesResponseType[], string>({
      query: (category) => ({
        url: API_CONST_DISHES.CATEGORIES,
        params: {
          category,
        },
      }),
    }),
    // getDishesSearch: builder.query<IDish[], string>({
    //   query: (query) => ({
    //     url: `/dishes/search/td?q=${query}`,
    //   }),
    // }),
    // createDish: builder.mutation<IDish, IDish>({
    //   query: (post) => ({
    //     url: '/dishes',
    //     method: 'POST',
    //     body: post,
    //   }),
    //   invalidatesTags: ['Dish'],
    // }),
    // updateDish: builder.mutation<IDish, RequiredIdDish>({
    //   query: (post) => ({
    //     url: '/dishes',
    //     method: 'PUT',
    //     body: post,
    //   }),
    //   invalidatesTags: ['Dish'],
    // }),
    // deleteDish: builder.mutation<IDish, string>({
    //   query: (id) => ({
    //     url: `/dishes/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Dish'],
    // }),
  }),
})

export const {
  useGetDishesByCategoryAndFilterQuery,
  // useCreateDishMutation,
  // useDeleteDishMutation,
  useGetCategoriesQuery,
  useGetSubCategoriesInCategoryQuery,
  // useGetDishesByCategoryAndSubCategoryQuery,
  // useGetDishesByCategoryQuery,
  // useGetDishesSearchQuery,
  // useGetDishQuery,
  // useUpdateDishMutation,
} = dishApi
