import { Stack, styled } from '@mui/material'

export const PartySizeWrapper = styled(Stack)(
  ({ theme }) => `
  border: 1px solid ${theme.palette.border.default};
  border-radius: 16px;
  flex-direction: row;
  align-self: center;
  max-width: 98%;
  flex-wrap: wrap;
  overflow: hidden;      
`,
)
