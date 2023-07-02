import { CSSProperties, FC, PropsWithChildren } from 'react'
import { Table as MuiTable, TableBody, TableContainer } from '@mui/material'
import { useSmoothScrollbar } from 'hooks'
import { TableLineSkeleton } from 'UI'
import { TableNotDataFoundLine } from 'components/table-lines'
import { TableHead } from './table-head'

interface TableProps extends PropsWithChildren {
  tableTitles: string[]
  isLoading?: boolean
  notDataFound?: boolean
  alignHead?: 'inherit' | 'center' | 'left' | 'right' | 'justify' | undefined
  tableMinWidth?: CSSProperties['minWidth']
  tableMaxHeight?: CSSProperties['maxHeight']
}

const Table: FC<TableProps> = ({
  tableTitles,
  isLoading,
  notDataFound,
  alignHead,
  tableMinWidth,
  tableMaxHeight,
  children,
}) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()

  return (
    <TableContainer ref={containerRef} sx={{ flex: 1, maxHeight: tableMaxHeight }}>
      <MuiTable aria-label="table" sx={{ width: '100%', minWidth: tableMinWidth }}>
        <TableHead data={tableTitles} align={alignHead} />
        <TableBody>
          {isLoading && <TableLineSkeleton sizeColumn={tableTitles} />}
          {!isLoading && notDataFound && <TableNotDataFoundLine length={tableTitles.length} />}
          {!isLoading && children}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export default Table
