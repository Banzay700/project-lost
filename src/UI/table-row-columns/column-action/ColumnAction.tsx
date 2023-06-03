import { FC, ReactNode } from 'react'
import { TableCell } from '@mui/material'
import { Button } from 'UI/button'

interface ColumnActionProps {
  onClick: () => void
  title: string
  columnAlign?: 'center' | 'left' | 'right'
  size?: 'small' | 'default'
  variant?: 'contained' | 'outlined'
  startIcon?: ReactNode
  endIcon?: ReactNode
  icon?: ReactNode
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
}) => {
  return (
    <TableCell align={columnAlign || 'center'}>
      <Button
        onClick={onClick}
        size={size || 'small'}
        variant={variant || 'contained'}
        startIcon={startIcon}
        endIcon={endIcon}
        icon={icon}>
        {title}
      </Button>
    </TableCell>
  )
}

export default ColumnAction
