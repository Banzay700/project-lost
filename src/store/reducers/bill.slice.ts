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
    openNewBill: (state, action: PayloadAction<BillsResponseType>) => {
      state.newBill = action.payload
    },
  },
})

export const { openNewBill } = billSlice.actions

export default billSlice.reducer
