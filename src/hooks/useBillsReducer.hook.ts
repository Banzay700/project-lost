import { useAppDispatch, useAppSelector } from 'hooks'

export const useBillsReducer = () => {
  const newBill = useAppSelector((state) => state.bills.newBill)

  return {
    newBill,
  }
}
