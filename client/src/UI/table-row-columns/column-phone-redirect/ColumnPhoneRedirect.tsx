import { FC, MouseEvent } from 'react'
import { TableCell, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface ColumnPhoneRedirectProps {
  title: string | number
  columnAlign?: 'center' | 'left' | 'right'
  textVariant?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  textFontWeight?: 400 | 500 | 600 | 700
  textColor?: 'secondary' | 'primary'
}

const ColumnPhoneRedirect: FC<ColumnPhoneRedirectProps> = ({
  title,
  columnAlign,
  textVariant,
  textFontWeight,
  textColor,
}) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <TableCell align={columnAlign || 'center'} onClick={handleClick}>
      <Link to={`tel:${title}`} style={{ textDecoration: 'underline' }}>
        <Typography
          color={textColor || 'secondary'}
          variant={textVariant || 'h3'}
          fontWeight={textFontWeight || 400}
          component="p">
          {title}
        </Typography>
      </Link>
    </TableCell>
  )
}

export default ColumnPhoneRedirect
