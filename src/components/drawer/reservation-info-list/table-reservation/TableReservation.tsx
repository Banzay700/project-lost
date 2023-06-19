import { FC } from 'react'
import { Table } from 'components'
import { ReservationResponseType } from 'types'
import { tableTitleReservation } from './tableReservation.utils'

interface TableReservationProps {
  data: ReservationResponseType[] | undefined
}

const TableReservation: FC<TableReservationProps> = ({ data }) => {
  return (
    <Table
      data={data}
      tableTitles={tableTitleReservation}
      tableType="reservation"
      tableMaxHeight="550px"
      tableMinWidth="485px"
    />
  )
}

export default TableReservation
