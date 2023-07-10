import { FC, MouseEvent, ReactNode } from 'react'
import { TableCell } from '@mui/material'
import { Button, PDFDoc } from 'UI'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { BillsType } from 'types'

interface ColumnActionProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  title: string
  columnAlign?: 'center' | 'left' | 'right'
  size?: 'small' | 'medium'
  variant?: 'contained' | 'outlined'
  startIcon?: ReactNode
  endIcon?: ReactNode
  icon?: ReactNode
  element?: BillsType
  type?: 'print'
  disabled?: boolean
}

const ColumnAction: FC<ColumnActionProps> = ({
  title,
  columnAlign,
  size,
  variant,
  icon,
  startIcon,
  endIcon,
  element,
  type,
  onClick,
  disabled,
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
            maxWidth="150px"
            fullWidth>
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
          maxWidth="200px"
          fullWidth
          disabled={disabled}>
          {title}
        </Button>
      )}
    </TableCell>
  )
}

export default ColumnAction
