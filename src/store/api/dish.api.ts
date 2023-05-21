import { API_CONST } from 'utils'
// import { DataCategoryType, IDish, RequiredIdDish } from '../../types'
import { DataCategoriesResponseType, DataSubCategoriesResponseType } from 'types'
import { api } from './api'

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getAllDishes: builder.query<IDish[], string>({
    //   query: () => ({
    //     url: '/dishes',
    //   }),
    //   providesTags: ['Dish'],
    // }),
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
    getCategories: builder.query<DataCategoriesResponseType[], null>({
      query: () => ({
        url: API_CONST.API_CATEGORIES,
      }),
    }),
    getSubCategoriesInCategory: builder.query<DataSubCategoriesResponseType[], string>({
      query: (category) => ({
        url: API_CONST.API_CATEGORIES,
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
  // useGetAllDishesQuery,
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
