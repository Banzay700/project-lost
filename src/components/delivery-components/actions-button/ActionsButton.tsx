import { FC, PropsWithChildren } from 'react'
import { Button } from 'UI'
import { Stack } from '@mui/material'
import { ActionsButtonWrapper } from './ActionsButton.styled'

interface ActionsButtonProps extends PropsWithChildren {
  titleButton: string
  doubleAction?: boolean
  disabled?: boolean
  onSubmit: () => void
  onCancel?: () => void
}

const ActionsButton: FC<ActionsButtonProps> = ({
  titleButton,
  doubleAction,
  disabled,
  onCancel,
  onSubmit,
  children,
}) => {
  return (
    <ActionsButtonWrapper>
      {children}
      {doubleAction && (
        <Stack direction="row" width="100%" sx={{ gap: '20px', maxWidth: '400px' }}>
          <Button variant="outlined" size="small" onClick={onCancel} fullWidth>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={onSubmit} fullWidth disabled={disabled}>
            {titleButton}
          </Button>
        </Stack>
      )}
      {!doubleAction && (
        <Button
          variant="contained"
          size="medium"
          fullWidth
          maxWidth="400px"
          onClick={onSubmit}
          disabled={disabled}>
          {titleButton}
        </Button>
      )}
    </ActionsButtonWrapper>
  )
}

export default ActionsButton
