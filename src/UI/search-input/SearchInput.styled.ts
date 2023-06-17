import { FormControl, InputBase, styled } from '@mui/material'

export const FormControlWrapper = styled(FormControl)`
  width: 100%;
  justify-content: center;
`
export const InputWrapper = styled(InputBase)(
  ({ theme }) => `
  &:focus-within svg {
    transition: all 0.1s ease-in-out;
    color: ${theme.palette.primary.main};
  }
`,
)
