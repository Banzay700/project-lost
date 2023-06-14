import { FC } from 'react'
import { Table } from 'components/index'
import { ReservationRequestType } from 'types/index'
import { tableTitleReservation } from './tableReservation.utils'

interface TableReservationProps {
  data: ReservationRequestType[] | undefined
}

const TableReservation: FC<TableReservationProps> = ({ data }) => {
  return <Table data={data} tableTitles={tableTitleReservation} tableType="reservation" />
}

export default TableReservation
