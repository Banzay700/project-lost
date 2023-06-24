import { FC } from 'react'
import { Modal } from 'UI'
import { DishType } from 'types'
import { Box, Stack, Typography } from '@mui/material'
import { correctionName } from 'utils'
import { OptionInfo } from './option-info'
import { ImageInfo } from './image-info'

interface ModalDishDetailInfoProps {
  dish: DishType
  isOpenModal: boolean
  onCloseModal: () => void
}

const ModalDishDetailInfo: FC<ModalDishDetailInfoProps> = ({ dish, isOpenModal, onCloseModal }) => {
  const { picture, title, price, weight, category, description } = dish
  return (
    <Modal
      isOpen={isOpenModal}
      title={title}
      onClose={onCloseModal}
      colorHeader="primary"
      isIconExit
      hiddenActions>
      <Stack sx={{ gap: '10px' }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '20px' }}>
          <ImageInfo picture={picture} alt={title} />
          <Stack sx={{ width: '100%', gap: '20px' }}>
            <OptionInfo title="Price" value={`$${price}`} />
            <OptionInfo title="Weight" value={`${weight}g`} />
            <OptionInfo title="Category" value={correctionName(category?.title)} />
          </Stack>
        </Stack>
        <Box>
          <Typography variant="h2" fontWeight={600} color="primary">
            Description
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Stack>
    </Modal>
  )
}

export default ModalDishDetailInfo
