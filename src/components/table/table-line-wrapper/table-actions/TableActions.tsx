import { FC, ReactElement, ReactNode } from 'react'
import { Button } from 'UI/index'
import { IconAddTipAmount, IconPrinter } from 'assets/index'

interface ButtonElementType {
  status: string | undefined
  className?: string
  startIcon: ReactNode | ReactElement
}

const TableActions: FC<ButtonElementType> = ({ status, className, startIcon }) => {
  return (
    <>
      {!status && (
        <Button className={className} size="small" variant="contained" startIcon={startIcon}>
          Close order
        </Button>
      )}
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
export default TableActions
