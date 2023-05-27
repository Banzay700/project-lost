import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderCreatorFormValues } from 'types'
import { IDishes } from 'types/IOrder'

export interface NewlyOrderType extends OrderCreatorFormValues {
  orderNumber: number
  description?: string
  dishes: IDishes[]
  totalPrice?: number
}

interface NewlyOrderState {
  newlyOrder: NewlyOrderType
}

const initialState: NewlyOrderState = {
  newlyOrder: {
    orderType: '',
    table: '',
    orderNumber: 0,
    dishes: [],
    totalPrice: 0,
  },
}

const newlyCreatedOrderSlice = createSlice({
  name: 'newlyOrder',
  initialState,
  reducers: {
    openNewOrder: (state, action: PayloadAction<NewlyOrderType>) => {
      state.newlyOrder = action.payload
    },
    addDishToOrder: (state, action: PayloadAction<IDishes>) => {
      const { payload } = action
      const { dishes } = state.newlyOrder
      const dish = dishes.find((dishEl) => dishEl.id === payload.id)

      if (dish) {
        dish.amount = payload.amount
        dish.totalPrice = payload.amount * payload.price
      } else {
        dishes.push(payload)
      }
    },
    removeAllDishesFromOrder: (state) => {
      state.newlyOrder.dishes = []
    },
  },
})

export const { openNewOrder, addDishToOrder } = newlyCreatedOrderSlice.actions

export default newlyCreatedOrderSlice.reducer
