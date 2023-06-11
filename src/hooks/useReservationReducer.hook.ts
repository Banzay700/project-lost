import { useAppDispatch, useAppSelector } from 'hooks'
import { TableType } from 'types'
import { addActiveTable, clearActiveTable } from 'store/reducers'

export const useReservationReducer = () => {
  const dispatch = useAppDispatch()

  const activeTable = useAppSelector((state) => state.reservation.activeTable)
  const addTableToStore = (table: TableType) => dispatch(addActiveTable(table))
  const clearActiveTableStore = () => dispatch(clearActiveTable())

  return { activeTable, addTableToStore, clearActiveTableStore }
}
