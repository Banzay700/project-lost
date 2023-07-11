import { Box, styled } from '@mui/material'

export const DetailsListTitleWrapper = styled(Box)(
  ({ theme }) => `
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid ${theme.palette.border.default};
  border-bottom: 1px solid ${theme.palette.border.default};
`,
)
