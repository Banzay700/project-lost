import { FC } from 'react'
import { Table, IndicatorFilterBar } from 'components/table'
import { IndicatorFilterBar } from 'components'
import { useGetAllBillsQuery } from 'store/api'
import { useSearchParamsType } from 'hooks'
import { tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { type, handleChangeFilter } = useSearchParamsType()
  const { data: dataBills } = useGetAllBillsQuery({ type })

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['delivery', 'dineIn', 'takeAway']}
        onChange={handleChangeFilter}
      />
      <Table data={dataBills} tableTitles={tableTitleBills} tableType="bills" />
    </>
  )
}

export default TableBills
