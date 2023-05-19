import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { FC } from 'react'
import s from './DishCard.module.scss'

interface DishCardModalProps {
  open: boolean
  onClose: () => void
  description: string
  weight: number
}

const DishCardModal: FC<DishCardModalProps> = ({ onClose, open, description, weight }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className={s.titleModal}>Dish details</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>Ingredients: {description}</DialogContentText>
        <DialogContentText>Weight: {weight}</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DishCardModal
