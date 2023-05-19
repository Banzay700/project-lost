import { IDishes } from 'types/IOrder'
import { createSlice } from '@reduxjs/toolkit'

interface DishState {
  dishes: IDishes[]
  isLoading: boolean
  error: string
}

const initialState: DishState = {
  dishes: [],
  isLoading: false,
  error: '',
}

export const dishSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDishToOrder: (state, action) => {
      const { payload } = action
      const dish = state.dishes.find((dishEl) => dishEl.id === payload.id)
      if (dish) {
        dish.amount += payload.amount
      } else {
        state.dishes.push(payload)
      }
    },
    removeAllDishesFromOrder: (state) => {
      state.dishes = []
    },
  },
})

export default dishSlice.reducer
export const { addDishToOrder, removeAllDishesFromOrder } = dishSlice.actions
