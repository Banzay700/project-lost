import { FC, ReactNode } from 'react'

type TableCellProps = {
  tableCell?: ReactNode
}

interface TableLineItemProps {
  data: (TableCellProps | undefined)[]
}

const TableLineItem: FC<TableLineItemProps> = ({ data }) => {
  return <>{data.map((item) => item?.tableCell)}</>
}

export default TableLineItem
