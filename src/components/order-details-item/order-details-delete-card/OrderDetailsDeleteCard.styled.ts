import { Stack, styled } from '@mui/material'

export const DeleteCardWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
`

export const DeleteIconsGrope = styled(Stack)`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
`

export const DeleteCartIcon = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))
