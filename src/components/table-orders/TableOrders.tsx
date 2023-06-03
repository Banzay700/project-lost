import { FC } from 'react'
import { IndicatorFilterBar, Table } from 'components'
import { useGetAllOrdersQuery } from 'store/api'
import { useSearchParamsType } from 'hooks'
import { tableTitleOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { orderType, handleChangeFilter } = useSearchParamsType()
  const { data: dataOrders } = useGetAllOrdersQuery({ orderType })

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        defaultValue={orderType?.split(',')}
        onChange={handleChangeFilter}
      />
      <Table data={dataOrders} tableTitles={tableTitleOrder} tableType="orders" />
    </>
  )
}

export default TableOrders
