import { useAppDispatch, useAppSelector } from 'hooks'

export const useBillsReducer = () => {
  const dispatch = useAppDispatch()

  const newBill = useAppSelector((state) => state.bills.newBill)

  return {
    newBill,
  }
}
