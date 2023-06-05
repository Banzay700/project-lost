import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToggleValueBillsAction {
  toggleValue: string
}

const initialState: ToggleValueBillsAction = {
  toggleValue: 'Order info',
}

const toggleValueBills = createSlice({
  name: 'toggleValueBillsSlice',
  initialState,
  reducers: {
    changeToggleValue: (state, action: PayloadAction<string>) => {
      state.toggleValue = action.payload
    },
  },
})

export const { changeToggleValue } = toggleValueBills.actions

export default toggleValueBills.reducer
