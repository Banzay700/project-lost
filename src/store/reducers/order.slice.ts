import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OrderActiveType, OrderDishResponseType, OrderStatusType } from 'types'
import { emptyOrderState } from 'store/reducers/reducers.utils'

interface OrderState {
  activeOrder: OrderActiveType
}

const initialState: OrderState = {
  activeOrder: {
    ...emptyOrderState,
  },
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    openOrder: (state, action: PayloadAction<OrderActiveType>) => {
      state.activeOrder = { ...action.payload }
    },
    changeOrderStatus: (state, action: PayloadAction<OrderStatusType>) => {
      state.activeOrder.status = action.payload
    },
    deleteNewOrder: (state) => {
      state.activeOrder = {
        ...emptyOrderState,
      }
    },
    removeAllDishesFromOrder: (state) => {
      state.activeOrder.dishes = []
    },
    updateDishAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const { payload } = action
      const { dishes } = state.activeOrder
      const dish = dishes.find((dishEl) => dishEl.dishID === payload.id)

      if (dish) {
        dish.amount = payload.amount
        dish.dishTotalPrice = payload.amount * dish.price
      }
    },
    addDishToOrder: (state, action: PayloadAction<OrderDishResponseType>) => {
      const { payload } = action
      const { dishes } = state.activeOrder
      const dish = dishes.find((dishEl) => dishEl.dishID === payload.dishID)

      if (!dish) {
        dishes.push(payload)
      }
    },
    removeDishOrder: (state, action: PayloadAction<string>) => {
      const { payload } = action
      const { dishes } = state.activeOrder
      state.activeOrder.dishes = dishes.filter((dishEl) => dishEl.dishID !== payload)
    },
  },
})

export const {
  updateDishAmount,
  addDishToOrder,
  removeDishOrder,
  openOrder,
  changeOrderStatus,
  deleteNewOrder,
} = ordersSlice.actions

export default ordersSlice.reducer
