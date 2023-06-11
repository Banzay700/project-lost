import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Icon } from 'assets'
import { useReservationReducer } from 'hooks/useReservationReducer.hook'

interface TableCardProps {
  tableNumber: string
}

const TableCard: FC<TableCardProps> = ({ tableNumber }) => {
  const { clearActiveTableStore } = useReservationReducer()

  const boxStyle = {
    position: 'relative',
    p: '13px 0',
    borderRadius: '8px',
    border: '1px solid #E4E4E4',
    minWidth: '57px',
  }
  const stackStyle = {
    position: 'absolute',
    top: -9,
    right: 0,
    borderRadius: '50%',
    bgcolor: 'primary.main',
    p: '5px',
    cursor: 'pointer',
    '&:hover': { bgcolor: 'primary.light' },
  }

  return (
    <Box sx={boxStyle}>
      <Stack sx={stackStyle} onClick={clearActiveTableStore}>
        <Icon.CrossSmall />
      </Stack>
      <Typography variant="subtitle1" color="secondary" textAlign="center">
        {tableNumber}
      </Typography>
    </Box>
  )
}

export default TableCard
