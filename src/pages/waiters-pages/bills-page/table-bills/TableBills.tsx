import { FC } from 'react'

import { Table, IndicatorFilterBar } from 'components/index'
import { useGetAllBillsQuery, useLazyGetOneBillQuery } from 'store/api'
import { useAppDispatch, useBillsReducer, useSearchParamsType } from 'hooks/index'
import { changeToggleValue } from 'store/reducers'
import { tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { orderType, handleChangeFilter } = useSearchParamsType()
  const { data } = useGetAllBillsQuery({ orderType })
  const [getBill] = useLazyGetOneBillQuery()
  const dispatch = useAppDispatch()
  const { newBill } = useBillsReducer()

  const handleSendBillsData = (id: string) => {
    getBill(id)
    dispatch(changeToggleValue('Payment'))
  }

  const handleLineBillsData = (id: string) => {
    if (newBill.id !== id) {
      getBill(id)
    }
    dispatch(changeToggleValue('Order info'))
  }

  // console.log(data?.data)
  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        onChange={handleChangeFilter}
      />
      <Table
        data={data?.data}
        tableTitles={tableTitleBills}
        tableType="bills"
        onClickAction={handleSendBillsData}
        onClickLine={handleLineBillsData}
      />
    </>
  )
}

export default TableBills
