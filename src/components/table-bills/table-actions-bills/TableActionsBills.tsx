import { FC } from 'react'
import { Button } from 'UI/index'
import { IconAddTipAmount, IconPrinter } from 'assets/index'

interface TableActionsBillsProps {
  status: string | undefined
  className?: string
}

const TableActionsBills: FC<TableActionsBillsProps> = ({ status, className }) => {
  return (
    <>
      {status === 'opened' && (
        <Button
          className={className}
          size="small"
          variant="contained"
          startIcon={<IconAddTipAmount />}>
          Pay Now
        </Button>
      )}
      {status === 'closed' && (
        <Button className={className} size="small" variant="outlined" startIcon={<IconPrinter />}>
          Print bill
        </Button>
      )}
    </>
  )
}
export default TableActionsBills
