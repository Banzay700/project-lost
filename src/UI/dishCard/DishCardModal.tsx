import { Dialog, DialogTitle } from '@mui/material'
import {FC} from "react";

interface DishCardModalProps {
  open: boolean
  onClose: () => void
}

const DishCardModal: FC<DishCardModalProps> = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Dish details</DialogTitle>
    </Dialog>
  )
}

export default DishCardModal
