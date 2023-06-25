import { FC } from 'react'
import { TableReservationLine } from 'components'
import { Table } from 'UI'
import { ReservationResponseType } from 'types'
import { tableTitleReservation } from './tableReservation.utils'

interface TableReservationProps {
  data: ReservationResponseType[] | undefined
}

const TableReservation: FC<TableReservationProps> = ({ data }) => {
  return (
    <Table tableTitles={tableTitleReservation} tableMaxHeight="550px" tableMinWidth="485px">
      {data?.map((element) => (
        <TableReservationLine key={element?.id} element={element} />
      ))}
    </Table>
  )
}

export default TableReservation
