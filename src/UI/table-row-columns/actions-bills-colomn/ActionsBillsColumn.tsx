import { FC } from 'react'
import { TableCell } from '@mui/material'
import { Button } from 'UI'
import { IconAddTipAmount, IconPrinter } from 'assets'

interface ActionsBillsColumnProps {
  status: 'opened' | 'closed' | undefined
  className?: string
  handleSendBillsData?: () => void
}

const ActionsBillsColumn: FC<ActionsBillsColumnProps> = ({
  status,
  className,
  handleSendBillsData,
}) => {
  return (
    <TableCell align="center">
      {status === 'opened' && (
        <Button
          className={className}
          size="small"
          variant="contained"
          startIcon={<IconAddTipAmount />}
          onClick={handleSendBillsData}>
          Pay Now
        </Button>
      )}
      {status === 'closed' && (
        <Button className={className} size="small" variant="outlined" startIcon={<IconPrinter />}>
          Print bill
        </Button>
      )}
    </TableCell>
  )
}
export default ActionsBillsColumn
