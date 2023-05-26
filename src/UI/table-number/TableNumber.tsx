import { FC } from 'react'
import s from './TableNumber.module.scss'

interface TableNumberProps {
  tableNumber: string | undefined
}

const TableNumber: FC<TableNumberProps> = ({ tableNumber }) => {
  return (
    <div className={s.tableNumber}>
      <span>{tableNumber}</span>
    </div>
  )
}

export default TableNumber
