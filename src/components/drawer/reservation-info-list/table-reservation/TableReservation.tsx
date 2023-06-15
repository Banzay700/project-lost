import { FC } from 'react'
import { Table } from 'components'
import { ReservationResponseType } from 'types'
import { tableTitleReservation } from './tableReservation.utils'

interface TableReservationProps {
  data: ReservationResponseType[] | undefined
}

const TableReservation: FC<TableReservationProps> = ({ data }) => {
  // const testData = prepareDataReservation(data)
  // console.log(testData)
  // console.log(data)
  return <Table data={data} tableTitles={tableTitleReservation} tableType="reservation" />
}

export default TableReservation
