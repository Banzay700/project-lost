import { FC, MouseEvent, ReactNode } from 'react'
import { TableCell } from '@mui/material'
import { Button } from 'UI'

interface ColumnActionProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void // TODO: ?
  title: string
  columnAlign?: 'center' | 'left' | 'right'
  size?: 'small' | 'medium'
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
        icon={icon}
        maxWidth="150px"
        fullWidth>
        {title}
      </Button>
    </TableCell>
  )
}

export default ColumnAction
