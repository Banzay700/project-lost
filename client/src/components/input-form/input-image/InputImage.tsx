import { FC } from 'react'
import { DropZoneWrapper, InputImageWrapper } from './InputImage.styled'

interface InputImageProps {
  view: 'round' | 'squareRounding'
}

const InputImage: FC<InputImageProps> = ({ view }) => {
  return (
    <InputImageWrapper>
      <DropZoneWrapper
        $view={view}
        name="picture"
        placeholder="Drag and Drop a Dile here or click"
        multiple={false}
        accept={{
          'image/png': ['.png'],
          'image/jpg': ['.jpg'],
          'image/jpeg': ['.jpeg'],
          'image/svg+xml': ['.svg'],
        }}
      />
    </InputImageWrapper>
  )
}

export default InputImage
