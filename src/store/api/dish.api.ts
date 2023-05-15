import { DataCategoryType, IDish, RequiredIdDish } from '../../types'
import { api } from './api'

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDishes: builder.query<IDish[], string>({
      query: () => ({
        url: '/dishes',
      }),
      providesTags: ['Dish'],
    }),
    getDishesByCategory: builder.query<IDish[], string>({
      query: (category) => ({
        url: `/dishes/by_category/${category}`,
      }),
    }),
    getDishesByCategoryAndSubCategory: builder.query<
      IDish[],
      { category: string; subcategory: string }
    >({
      query: ({ category, subcategory }) => ({
        url: `/dishes/by_category/${category}/${subcategory}`,
      }),
    }),
    getDish: builder.query<IDish, string>({
      query: (id) => ({
        url: `/dishes/${id}`,
      }),
    }),
    getAllCategories: builder.query<DataCategoryType[], string>({
      query: () => ({
        url: '/dishes/categories/all',
      }),
    }),
    getAllSubcategoriesInCategory: builder.query<string[], string>({
      query: (category) => ({
        url: `/dishes/categories/${category}`,
      }),
    }),
    getDishesSearch: builder.query<IDish[], string>({
      query: (query) => ({
        url: `/dishes/search/td?q=${query}`,
      }),
    }),
    createDish: builder.mutation<IDish, IDish>({
      query: (post) => ({
        url: '/dishes',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Dish'],
    }),
    updateDish: builder.mutation<IDish, RequiredIdDish>({
      query: (post) => ({
        url: '/dishes',
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Dish'],
    }),
    deleteDish: builder.mutation<IDish, string>({
      query: (id) => ({
        url: `/dishes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Dish'],
    }),
  }),
})

export const {
  useGetAllDishesQuery,
  useCreateDishMutation,
  useDeleteDishMutation,
  useGetAllCategoriesQuery,
  useGetAllSubcategoriesInCategoryQuery,
  useGetDishesByCategoryAndSubCategoryQuery,
  useGetDishesByCategoryQuery,
  useGetDishesSearchQuery,
  useGetDishQuery,
  useUpdateDishMutation,
} = dishApi
