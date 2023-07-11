import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableType } from 'types'
import { emptyActiveTableState } from './reducers.utils'

interface ReservationState {
  activeTable: TableType
}

const initialState: ReservationState = {
  activeTable: { ...emptyActiveTableState },
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addActiveTable: (state, action: PayloadAction<TableType>) => {
      state.activeTable = { ...action.payload }
    },
    clearActiveTable: (state) => {
      state.activeTable = { ...emptyActiveTableState }
    },
  },
})

export const { addActiveTable, clearActiveTable } = reservationSlice.actions
export default reservationSlice.reducer
