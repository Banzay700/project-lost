import { FC, useState } from 'react'
import { SwipeableDrawer } from '@mui/material/'
import { ReservationForm } from 'components/form-componets/reservation-form'
import { ReservationInfoList } from './reservation-info-list'

interface DrawerProps {
  state: boolean
  toggleDrawer: () => void
}

const Drawer: FC<DrawerProps> = ({ state, toggleDrawer }) => {
  const [isShowForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(!isShowForm)

  return (
    <SwipeableDrawer anchor="right" open={state} onClose={toggleDrawer} onOpen={toggleDrawer}>
      {isShowForm ? (
        <ReservationForm handleShowForm={handleShowForm} />
      ) : (
        <ReservationInfoList handleShowForm={handleShowForm} />
      )}
    </SwipeableDrawer>
  )
}

export default Drawer
