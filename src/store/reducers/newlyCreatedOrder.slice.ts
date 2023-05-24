import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderCreatorFormValues } from 'types'

export interface NewlyOrderType extends OrderCreatorFormValues {
  orderNumber: number
  dishes: string[]
  description?: string
}

interface NewlyOrderState {
  newlyOrder: NewlyOrderType
}

const initialState: NewlyOrderState = {
  newlyOrder: {
    orderType: '',
    orderNumber: 0,
    dishes: [],
  },
}

const newlyCreatedOrderSlice = createSlice({
  name: 'newlyOrder',
  initialState,
  reducers: {
    openNewOrder: (state, action: PayloadAction<NewlyOrderType>) => {
      state.newlyOrder = action.payload
    },
  },
})

export const { openNewOrder } = newlyCreatedOrderSlice.actions

export default newlyCreatedOrderSlice.reducer
