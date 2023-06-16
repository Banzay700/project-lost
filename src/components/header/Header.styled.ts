import { Stack, styled } from '@mui/material'

export const HeaderWrapper = styled(Stack)(
  ({ theme }) => `
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${theme.palette.text.border.primary};
`,
)
