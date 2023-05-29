import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableDataBills } from 'types'

interface NewBillsAction {
  newBill: TableDataBills
}

const initialState: NewBillsAction = {
  newBill: {} as TableDataBills,
}

const billSlice = createSlice({
  name: 'billSlice',
  initialState,
  reducers: {
    addBill: (state, action: PayloadAction<TableDataBills>) => {
      state.newBill = action.payload
    },
  },
})

export const { addBill } = billSlice.actions

export default billSlice.reducer
