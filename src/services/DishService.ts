import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DataCategoryType, IDish, RequiredIdDish } from 'types/IDish'

export const dishAPI = createApi({
  reducerPath: 'dishAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5001/api/restaurant/dishes' }),
  tagTypes: ['Dish'],
  endpoints: (builder) => ({
    getAllDishes: builder.query<IDish[], string>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['Dish'],
    }),
    getDishesByCategory: builder.query<IDish[], string>({
      query: (category) => ({
        url: `/by_category/${category}`,
      }),
    }),
    getDishesByCategoryAndSubCategory: builder.query<
      IDish[],
      { category: string; subcategory: string }
    >({
      query: ({ category, subcategory }) => ({
        url: `/by_category/${category}/${subcategory}`,
      }),
    }),
    getDish: builder.query<IDish, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
    getAllCategories: builder.query<DataCategoryType[], string>({
      query: () => ({
        url: '/categories/all',
      }),
    }),
    getAllSubcategoriesInCategory: builder.query<string[], string>({
      query: (category) => ({
        url: `/categories/${category}`,
      }),
    }),
    getDishesSearch: builder.query<IDish[], string>({
      query: (query) => ({
        url: `/search/td?q=${query}`,
      }),
    }),
    createDish: builder.mutation<IDish, IDish>({
      query: (post) => ({
        url: '/',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Dish'],
    }),
    updateDish: builder.mutation<IDish, RequiredIdDish>({
      query: (post) => ({
        url: '/',
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Dish'],
    }),
    deleteDish: builder.mutation<IDish, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Dish'],
    }),
  }),
})
