import { FC, PropsWithChildren, ReactNode, SyntheticEvent } from 'react'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material'
import { Button } from 'UI'
import { Icon } from 'assets'
import s from './Modal.module.scss'

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

  const handleSubmit = (e: SyntheticEvent) => {
    if (onSubmit) onSubmit(true)
    handleClose(e)
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{ borderRadius: '16px', '.MuiPaper-root': { minWidth: '500px' } }}>
      <DialogTitle sx={{ p: '24px' }} color={colorHeader}>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '50px',
          }}>
          {title}
          {isIconExit && <Icon.Cross onClick={handleClose} style={{ cursor: 'pointer' }} />}
        </Stack>
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
              size="default"
              type="button"
              onClick={handleClose}
              className={s.button}>
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            size="default"
            type="submit"
            linkageToForm={linkageToForm}
            onClick={handleSubmit}
            className={s.button}>
            Submit
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Modal
