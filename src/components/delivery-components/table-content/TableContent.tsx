import { FC } from 'react'
import { Table } from 'UI'
import { TableOrderDeliveryLine } from 'components'
import { generateStatus } from 'utils'
import { DeliveryType } from 'types'
import { Icon } from 'assets'
import { Stack } from '@mui/material'

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
    <>
      <Table
        tableTitles={tableTitle}
        tableMinWidth="660px"
        isLoading={isLoading}
        tableMaxHeight={!data?.length ? 88 : '100%'}>
        {!isLoading &&
          data?.map((item) => (
            <TableOrderDeliveryLine
              isActive={isActiveLine || ''}
              key={item.id}
              id={item.id}
              clientName={item.clientInfo.name}
              deliveryAddress={item.address.street}
              phoneNumber={item.clientInfo.phoneNumber}
              status={generateStatus(item.time)}
              onClickAction={onClickAction}
              onClickLine={onClickLine}
            />
          ))}
      </Table>
      <Stack width="100%" alignItems="center">
        {!data?.length && !isLoading && <Icon.NotDataFound />}
      </Stack>
    </>
  )
}

export default TableContent
