import { FC } from 'react'

import { Table, IndicatorFilterBar } from 'components'
import { useGetAllBillsQuery } from 'store/api'
import { useSearchParamsType } from 'hooks'
import { tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { orderType, handleChangeFilter } = useSearchParamsType()
  const { data } = useGetAllBillsQuery({ orderType })

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
      <Table data={data?.data} tableTitles={tableTitleBills} tableType="bills" />
    </>
  )
}

export default TableBills
