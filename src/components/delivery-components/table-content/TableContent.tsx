import { FC } from 'react'
import { Table } from 'UI'
import { TableOrderDeliveryLine, TableNotDataFoundLine } from 'components'
import { generateStatus } from 'utils'
import { DeliveryType } from 'types'

interface TableContentProps {
  tableTitle: string[]
  isLoading: boolean
  data?: DeliveryType[]
  isActiveLine?: string
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
}

const TableContent: FC<TableContentProps> = ({
  data,
  isActiveLine,
  tableTitle,
  isLoading,
  onClickLine,
  onClickAction,
}) => {
  return (
    <Table tableTitles={tableTitle} tableMinWidth="660px" isLoading={isLoading}>
      {!isLoading &&
        data?.map((item) => (
          <TableOrderDeliveryLine
            isActive={isActiveLine || ''}
            key={item.id}
            id={item.id}
            clientName={item.clientInfo.name}
            deliveryAddress={item.address.street}
            phoneNumber={item.clientInfo.phoneNumber}
            status={
              item.status === 'closed'
                ? { label: 'Closed', type: 'green' }
                : generateStatus(item.time)
            }
            onClickAction={onClickAction}
            onClickLine={onClickLine}
          />
        ))}
      {!data?.length && !isLoading && <TableNotDataFoundLine length={tableTitle.length} />}
    </Table>
  )
}

export default TableContent
