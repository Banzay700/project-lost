import { FC } from 'react'
import { InputImage } from 'components'
import { ImageWrapper, InputImageWrapper } from './InputImageWithPreviewAvatar.styled'

interface InputImageWithPreviewAvatarProps {
  isDisabled: boolean
  picture: string
  pictureAlt: string
  view: 'round' | 'squareRounding'
}

const InputImageWithPreviewAvatar: FC<InputImageWithPreviewAvatarProps> = (props) => {
  const { picture, pictureAlt, view, isDisabled } = props
  return (
    <InputImageWrapper>
      {isDisabled && <ImageWrapper view={view} src={picture || ''} alt={pictureAlt} />}
      {!isDisabled && <InputImage view={view} />}
    </InputImageWrapper>
  )
}

export default InputImageWithPreviewAvatar
