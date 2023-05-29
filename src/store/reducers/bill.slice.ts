import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BillsResponseType } from 'types'

interface NewBillsAction {
  newBill: BillsResponseType
}

const initialState: NewBillsAction = {
  newBill: {} as BillsResponseType,
}

const billSlice = createSlice({
  name: 'billSlice',
  initialState,
  reducers: {
    addBill: (state, action: PayloadAction<BillsResponseType>) => {
      state.newBill = action.payload
    },
  },
})

export const { addBill } = billSlice.actions

export default billSlice.reducer
