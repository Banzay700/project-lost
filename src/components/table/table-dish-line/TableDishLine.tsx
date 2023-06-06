import { FC } from 'react'
import { TableRow } from '@mui/material'
import { ColumnAction, ColumnInfoChip, ColumnText } from 'UI/table-row-columns'
import { DishType } from 'types/DishType'
import { correctionName } from 'utils/correctionName'

interface TableDishLineProps {
  dish: DishType
  onClickAction: (id: string) => void
}

const TableDishLine: FC<TableDishLineProps> = ({ dish, onClickAction }) => {
  const { title, category, price, status, id } = dish

  const handleClickAction = () => {
    onClickAction(id)
  }
  return (
    <TableRow hover>
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
