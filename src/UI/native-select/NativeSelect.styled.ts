import { FormControl, styled } from '@mui/material'

export const SelectWrapper = styled(FormControl)`
  position: absolute;
  top: 34px;
  right: 10px;
  z-index: 1;
  && {
    & .MuiSelect-select {
      border-radius: 0;
      padding: 0 22px 0 0;
      display: flex;
      align-items: center;
    }
  }
`
