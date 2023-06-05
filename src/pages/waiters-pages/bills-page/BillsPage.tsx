import { FC } from 'react'
import { TableBills } from 'components/index'
import { useActiveOrderStatus } from 'hooks/useActiveOrderStatus.hook'

const BillsPage: FC = () => {
  useActiveOrderStatus('none')

  return <TableBills />
}

export default BillsPage
