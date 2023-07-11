import { FC } from 'react'

import { useActiveOrderStatus } from 'hooks/useActiveOrderStatus.hook'
import { TableBills } from './table-bills'

const BillsPage: FC = () => {
  useActiveOrderStatus('none')

  return <TableBills />
}

export default BillsPage
