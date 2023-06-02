import { FC, MouseEvent } from 'react'
import { TableCell } from '@mui/material'
import { Button } from 'UI'
import { IconAddTipAmount } from 'assets'

interface ActionsOrdersColumnProps {
  handleSendOrder: (e: MouseEvent<HTMLButtonElement>) => void
  className: string
}

const ActionsOrdersColumn: FC<ActionsOrdersColumnProps> = ({ handleSendOrder, className }) => {
  return (
    <TableCell align="center">
      <Button
        className={className}
        size="small"
        variant="contained"
        startIcon={<IconAddTipAmount />}
        onClick={handleSendOrder}>
        Close order
      </Button>
    </TableCell>
  )
}

export default ActionsOrdersColumn
