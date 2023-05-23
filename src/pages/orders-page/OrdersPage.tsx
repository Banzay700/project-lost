import { FC } from 'react'
import { Table } from 'components/table'
import { dataMokOrder } from 'utils'
import s from './OrdersPage.module.scss'

const OrdersPage: FC = () => {
  return (
    <>
      <div>OrdersPage</div>
      <Table data={dataMokOrder} />
    </>
  )
}

export default OrdersPage
