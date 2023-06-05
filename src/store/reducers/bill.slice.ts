import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BillsType } from 'types'

interface NewBillsAction {
  newBill: BillsType
}

const initialState: NewBillsAction = {
  newBill: {} as BillsType,
}

const billSlice = createSlice({
  name: 'billSlice',
  initialState,
  reducers: {
    openNewBill: (state, action: PayloadAction<BillsType>) => {
      state.newBill = action.payload
    },
  },
})

export const { openNewBill } = billSlice.actions

export default billSlice.reducer
