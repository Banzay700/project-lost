import { useAppDispatch, useAppSelector } from 'hooks'
import { BillsType } from 'types/OrderBillsType'
import { openNewBill } from 'store/reducers'

export const useBillsReducer = () => {
  const dispatch = useAppDispatch()

  const newBill = useAppSelector((state) => state.bills.newBill)
  const relocateBills = (data: BillsType) => dispatch(openNewBill(data))
  return {
    newBill,
    relocateBills,
  }
}
