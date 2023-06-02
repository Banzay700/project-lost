import { FC } from 'react'
import { Table } from 'components/table'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useGetAllOrdersQuery } from 'store/api'
import { useSearchParamsType } from 'hooks'
import { tableTitleOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { type, handleChangeFilter } = useSearchParamsType()
  const { data: dataOrders } = useGetAllOrdersQuery({ type })

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['dineIn', 'takeAway']}
        defaultValue={type?.split(',')}
        onChange={handleChangeFilter}
      />
      <Table data={dataOrders} tableTitles={tableTitleOrder} tableType="orders" />
    </>
  )
}

export default TableOrders
