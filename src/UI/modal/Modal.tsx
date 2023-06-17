import { FC, PropsWithChildren, ReactNode, SyntheticEvent } from 'react'
import { Box, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Button } from 'UI'
import { Icon } from 'assets'
import { ModalTitleContainer, ModalWrapper } from './Modal.styled'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  title: string
  linkageToForm?: string
  colorHeader?: 'primary' | 'secondary'
  isIconExit?: boolean
  hiddenActions?: boolean
  actionAdditionalComponent?: ReactNode
  onClose: () => void
  onSubmit?: (value: true) => void
}

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  isIconExit,
  actionAdditionalComponent,
  hiddenActions,
  linkageToForm,
  colorHeader,
  onClose,
  onSubmit,
  children,
}) => {
  const handleClose = (e: SyntheticEvent) => {
    e.stopPropagation()
    onClose()
  }

  const handleSubmit = () => {
    if (onSubmit) onSubmit(true)
  }

  return (
    <ModalWrapper open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ p: '24px' }} color={colorHeader}>
        <ModalTitleContainer>
          {title}
          {isIconExit && <Icon.Cross onClick={handleClose} style={{ cursor: 'pointer' }} />}
        </ModalTitleContainer>
      </DialogTitle>
      <DialogContent dividers sx={{ p: '24px 0', margin: '0 24px' }}>
        {children}
      </DialogContent>
      {!hiddenActions && (
        <DialogActions sx={{ p: '24px', width: '100%' }}>
          <Box sx={{ flex: 1 }}>{actionAdditionalComponent}</Box>
          {!isIconExit && (
            <Button
              variant="outlined"
              size="medium"
              type="button"
              onClick={handleClose}
              fullWidth
              maxWidth="150px">
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            size="medium"
            type="submit"
            linkageToForm={linkageToForm}
            onClick={handleSubmit}
            fullWidth
            maxWidth="150px">
            Submit
          </Button>
        </DialogActions>
      )}
    </ModalWrapper>
  )
}

export default Modal
