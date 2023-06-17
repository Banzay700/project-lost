import { Stack, Tabs, styled } from '@mui/material'

export const ToggleMenuWrapper = styled(Stack)`
  width: 100%;
  height: 70px;
  max-height: 70px;
  min-height: 70px;
  justify-content: center;
  flex-direction: row;
  padding: 12px 16px;
`

export const TabsWrapper = styled(Tabs)`
  width: 100%;
  background: #f8f9fd;
  border-radius: 80px;
  padding: 4px;
  color: #828487;

  && {
    & .MuiTabs-indicator {
      height: 100%;
      background-color: white;
      border-radius: 80px;
      z-index: 0;
    }

    & .MuiTabs-flexContainer {
      height: 100%;
    }
  }
`
