import { FC } from 'react'
import { Table } from 'components/table'
import { tableTitleReservation } from './tableReservation.utils'

const dataMok = [
  {
    username: 'Matilda R',
    time: '08:00 AM',
    table: 'T-11',
    order: 12,
    id: '312',
  },
]

const TableReservation: FC = () => {
  return <Table data={dataMok} tableTitles={tableTitleReservation} tableType="reservation" />
}

export default TableReservation
