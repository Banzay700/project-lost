import { FC } from 'react'
import { TableCellType } from 'types/index'

interface TableLineItemProps {
  data: (TableCellType | undefined)[]
}

const TableLineItem: FC<TableLineItemProps> = ({ data }) => {
  return <>{data.map((item) => item?.tableCell)}</>
}

export default TableLineItem
