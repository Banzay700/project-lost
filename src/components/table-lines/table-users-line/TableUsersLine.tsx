import { TableRow } from '@mui/material'
import { FC } from 'react'
import { ColumnAction, ColumnInfoChip, ColumnText } from 'UI/index'
import { UserType } from 'types/UserType'

interface TableUsersLineProps {
  user: UserType
  onClickAction: (id: string) => void
}

const TableUsersLine: FC<TableUsersLineProps> = ({ user, onClickAction }) => {
  const { id, firstName, secondName, role, email, status, phoneNumber } = user
  type Role = 'waiter' | 'admin' | 'courier'
  const handleClick = () => {
    onClickAction(id)
  }
  return (
    <TableRow sx={{ height: '88px' }}>
      <ColumnText title={`${firstName} ${secondName}`} />
      <ColumnText title={phoneNumber || 'Not specified'} columnAlign="center" />
      <ColumnText title={email || 'Not specified'} columnAlign="center" />
      <ColumnInfoChip type={status} columnAlign="center" />
      <ColumnInfoChip type={role.toLowerCase() as Role} columnAlign="center" />
      <ColumnAction onClick={handleClick} title="Update info" />
    </TableRow>
  )
}

export default TableUsersLine
