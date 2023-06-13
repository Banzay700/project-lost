import { FC } from 'react'
import { Table } from 'components/table'
import { ReservationRequestType } from 'types'
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

interface TableReservationProps {
  data?: ReservationRequestType[]
}

const TableReservation: FC<TableReservationProps> = ({ data }) => {
  console.log(data)
  return <Table data={dataMok} tableTitles={tableTitleReservation} tableType="reservation" />
}

export default TableReservation
