import { IOrder } from 'types/IOrder'
import { createSlice } from '@reduxjs/toolkit'

interface OrderState {
  orders: IOrder[]
  isLoading: boolean
  error: string
}

const initialState: OrderState = {
  orders: [],
  isLoading: false,
  error: '',
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
})

export default orderSlice.reducer;