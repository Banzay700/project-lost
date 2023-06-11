import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IndicatorFilterBar, Table } from 'components/index'
import { useCreateBillMutation, useGetAllOrdersQuery, useLazyGetOrderQuery } from 'store/api'
import { useOrderReducer, useSearchParamsType } from 'hooks'

import { ROUTES } from 'routes'
import { prepareBillsData, tableTitleOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { clearNewOrderState } = useOrderReducer()
  const { orderType, handleChangeFilter } = useSearchParamsType()
  const { data } = useGetAllOrdersQuery({ orderType })

  const navigate = useNavigate()
  const [trigger] = useLazyGetOrderQuery()
  const [createBills] = useCreateBillMutation()

  const handleLineWrapperClick = (id: string) => trigger(id)

  const handleSendOrder = (id: string) => {
    const dataOrder = prepareBillsData(id, data?.data)
    if (dataOrder) {
      createBills(dataOrder)
      navigate(`/${ROUTES.BILLS}`)
      clearNewOrderState()
    }
  }
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
      <Table
        data={data?.data}
        tableTitles={tableTitleOrder}
        tableType="orders"
        tableMinWidth="660px"
        onClickAction={handleSendOrder}
        onClickLine={handleLineWrapperClick}
      />
    </>
  )
}

export default TableOrders
