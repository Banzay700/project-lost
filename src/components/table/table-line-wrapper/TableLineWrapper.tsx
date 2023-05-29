import { FC } from 'react'
import { TableRow } from '@mui/material'
import { TableDataItem, DataTableCellFuncType } from 'types'
import { useRootLocationPath } from 'hooks'
import { useLazyGetOrderQuery } from 'store/api'
import { TableLineItem } from './table-line-item'
import s from './TableLineWrapper.module.scss'

interface TableLineItemProps {
  element: TableDataItem
  dataTableCell: DataTableCellFuncType<TableDataItem>
  onClick?: (dataOrder: TableDataItem) => void
}

const TableLineWrapper: FC<TableLineItemProps> = ({ element, dataTableCell, onClick }) => {
  const location = useRootLocationPath()
  const cursor = location === 'bills' ? 'initial' : 'pointer'

  const dataCell = dataTableCell({
    element,
    onClick,
    className: s.tableButton,
  })

  const [trigger] = useLazyGetOrderQuery()
  const handleLineWrapperClick = () => {
    if (element.id) {
      trigger(element.id)
    }
  }

  // const { data } = useGetOneBillQuery(element.id)
  // console.log(data)

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor }}
      onClick={handleLineWrapperClick}>
      <TableLineItem key={element.id} data={dataCell} />
    </TableRow>
  )
}

export default TableLineWrapper
