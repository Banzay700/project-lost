import { FC, MouseEvent } from 'react'
import { TableCell, Typography } from '@mui/material'

interface ColumnTextProps {
  title: string | number
  columnAlign?: 'center' | 'left' | 'right'
  textVariant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  textFontWeight?: 400 | 500 | 600 | 700
  textColor?: 'secondary' | 'primary'
  onClick?: () => void
}

const ColumnText: FC<ColumnTextProps> = ({
  title,
  columnAlign,
  textVariant,
  textFontWeight,
  textColor,
  onClick,
}) => {
  const handleClick = (e: MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation()
    if (onClick) onClick()
  }

  return (
    <TableCell align={columnAlign || 'center'}>
      <Typography
        onClick={handleClick}
        color={textColor || 'secondary'}
        variant={textVariant || 'h3'}
        fontWeight={textFontWeight || 400}
        component="p">
        {title}
      </Typography>
    </TableCell>
  )
}

export default ColumnText
