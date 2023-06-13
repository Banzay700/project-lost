import { FC } from 'react'

import { Table, IndicatorFilterBar } from 'components/index'
import { useGetAllBillsQuery, useLazyGetOneBillQuery } from 'store/api'
import { useBillsReducer, useSearchParamsType } from 'hooks/index'
import { tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { newBill, changeToggle } = useBillsReducer()
  const { orderType, handleChangeFilter } = useSearchParamsType()
  const { data } = useGetAllBillsQuery({ orderType })
  const [getBill] = useLazyGetOneBillQuery()

  const handleSendBillsData = (id: string) => {
    getBill(id)
    changeToggle('Payment')
  }

  const handleLineBillsData = (id: string) => {
    if (newBill.id !== id) {
      getBill(id)
    }
    changeToggle('Order info')
  }

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
        tableMinWidth="750px"
        onClickAction={handleSendBillsData}
        onClickLine={handleLineBillsData}
      />
    </>
  )
}

export default TableBills
