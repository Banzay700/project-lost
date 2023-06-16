import { FC, MouseEvent, ReactNode } from 'react'
import { TableCell } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button, PDFDoc } from 'UI'
import { BillsType } from 'types'

interface ColumnActionProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  title: string
  columnAlign?: 'center' | 'left' | 'right'
  size?: 'small' | 'default'
  variant?: 'contained' | 'outlined'
  startIcon?: ReactNode
  endIcon?: ReactNode
  icon?: ReactNode
  className?: string
  element?: BillsType
  type?: 'print'
}

const ColumnAction: FC<ColumnActionProps> = ({
  title,
  columnAlign,
  size,
  variant,
  icon,
  startIcon,
  endIcon,
  onClick,
  className,
  element,
  type,
}) => {
  return (
    <TableCell align={columnAlign || 'center'}>
      {type === 'print' ? (
        <PDFDownloadLink document={<PDFDoc element={element} />} fileName="bill.pdf">
          <Button
            onClick={onClick}
            size={size || 'small'}
            variant={variant || 'contained'}
            startIcon={startIcon}
            endIcon={endIcon}
            icon={icon}
            className={className}>
            {title}
          </Button>
        </PDFDownloadLink>
      ) : (
        <Button
          onClick={onClick}
          size={size || 'small'}
          variant={variant || 'contained'}
          startIcon={startIcon}
          endIcon={endIcon}
          icon={icon}
          className={className}>
          {title}
        </Button>
      )}
    </TableCell>
  )
}

export default ColumnAction
