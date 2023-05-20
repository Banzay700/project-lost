import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { FC } from 'react'
import s from './DishCard.module.scss'
// TODO переделать другим таском, сделать универсальную модалку
interface DishCardModalProps {
  open: boolean
  onClose: () => void
  description: string
  weightProduct: number
}

const DishCardModal: FC<DishCardModalProps> = ({ onClose, open, description, weightProduct }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className={s.titleModal}>Dish details</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>Ingredients: {description}</DialogContentText>
        <DialogContentText>Weight: {weightProduct}</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DishCardModal
