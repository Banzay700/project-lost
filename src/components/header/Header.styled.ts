import { Stack, styled } from '@mui/material'

export const HeaderWrapper = styled(Stack)(({ theme }) => ({
  height: '76px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 24px',
  borderBottom: `1px solid ${theme.palette.border.default}`,

  [theme.breakpoints.down('sm')]: {
    height: '165px',
    flexWrap: 'wrap',
    padding: '20px 20px 40px;',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'url(/header-background.png) ',
    borderRadius: '0 0 16px 16px',
    rowGap: '30px',
  },
}))
