import { useAppDispatch, useAppSelector } from 'hooks'
import { BillsType } from 'types/OrderBillsType'
import { changeToggleValue, openNewBill } from 'store/reducers'

export const useBillsReducer = () => {
  const newBill = useAppSelector((state) => state.bills.newBill)
  const dispatch = useAppDispatch()
  const relocateBills = (data: BillsType) => dispatch(openNewBill(data))
  const changeToggle = (data: string) => dispatch(changeToggleValue(data))

  return { newBill, relocateBills, changeToggle }
}
