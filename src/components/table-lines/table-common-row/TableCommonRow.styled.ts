import { CSSProperties } from 'react'
import { styled, TableRow } from '@mui/material'
import { withProps } from 'utils'

type BillRowProps = {
  background: CSSProperties['background']
  lastChild?: boolean
  height?: CSSProperties['height']
}

const TableCommonRow = styled(
  TableRow,
  withProps('background', 'lastChild', 'height'),
)<BillRowProps>(({ background, lastChild, height }) => ({
  '& td:last-child': {
    paddingRight: lastChild && '0px',
  },
  cursor: 'pointer',
  background,
  height: height || '88px',
}))
export default TableCommonRow
