import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { IconCrossSmall } from 'assets'

interface TableCardProps {
  tableNumber: string
}

const TableCard: FC<TableCardProps> = ({ tableNumber }) => {
  const boxStyle = {
    position: 'relative',
    p: '12px 11px',
    borderRadius: '8px',
    border: '1px solid #E4E4E4',
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
      <Stack sx={stackStyle}>
        <IconCrossSmall />
      </Stack>
      <Typography variant="subtitle1" color="secondary">
        {tableNumber}
      </Typography>
    </Box>
  )
}

export default TableCard
