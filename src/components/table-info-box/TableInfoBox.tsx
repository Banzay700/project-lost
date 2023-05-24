import { FC } from 'react'
import { Box } from '@mui/material'

import { useGetTableReservationForCurrentDayQuery } from 'store/api'
import { TablesInfoItem } from './tables-info-item'

interface TableInfoBoxProps {
  tableNumber: string
}

const TableInfoBox: FC<TableInfoBoxProps> = ({ tableNumber }) => {
  const { data } = useGetTableReservationForCurrentDayQuery(tableNumber)

  return (
    <Box sx={{ flex: '1 1 auto', padding: '20px' }}>{data && <TablesInfoItem data={data} />}</Box>
  )
}

export default TableInfoBox
