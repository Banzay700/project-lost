import { FC, MouseEvent } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoChip, ColumnText } from 'UI/table-row-columns'
import { DishType } from 'types/DishType'
import { correctionName } from 'utils/correctionName'

interface TableDishLineProps {
  dish: DishType
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
}

const TableDishLine: FC<TableDishLineProps> = ({ dish, onClickAction, onClickLine }) => {
  const { title, category, price, status, id } = dish

  const handleClickAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction) onClickAction(id)
  }
  const handleClickLine = () => {
    if (onClickLine) onClickLine(id)
  }
  return (
    <TableRow hover onClick={handleClickLine} sx={{ cursor: 'pointer', height: '88px' }}>
      <ColumnText title={title} />
      <ColumnText title={correctionName(category?.title || '')} textFontWeight={400} />
      <ColumnText title={`$${price}`} textFontWeight={600} />
      <ColumnInfoChip type={status} />
      <ColumnAction
        title="Update info"
        onClick={handleClickAction}
        variant="contained"
        size="small"
      />
    </TableRow>
  )
}

export default TableDishLine
