import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BillsType } from 'types'

interface NewBillsAction {
  newBill: BillsType
  toggleValue: string
}

const initialState: NewBillsAction = {
  newBill: {} as BillsType,
  toggleValue: 'Order info',
}

const billSlice = createSlice({
  name: 'billSlice',
  initialState,
  reducers: {
    openNewBill: (state, action: PayloadAction<BillsType>) => {
      state.newBill = action.payload
    },
    changeToggleValue: (state, action: PayloadAction<string>) => {
      state.toggleValue = action.payload
    },
  },
})

export const { openNewBill, changeToggleValue } = billSlice.actions

export default billSlice.reducer
