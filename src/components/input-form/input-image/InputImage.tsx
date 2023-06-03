import { FC } from 'react'
import DropZone from 'react-formik-ui/dist/components/DropZone/DropZone'
import cn from 'classnames'
import { Box } from '@mui/material'
import s from './InputImage.module.scss'

interface InputImageProps {
  view: 'round' | 'squareRounding'
}

const InputImage: FC<InputImageProps> = ({ view }) => {
  const styles = cn(
    s.dropzone,
    { [s.round]: view === 'round' },
    { [s.squareRounding]: view === 'squareRounding' },
  )

  return (
    <Box
      sx={{
        '.dropzone, .dropzone-wrapper': { width: '100%', height: '100%' },
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}>
      <DropZone
        className={styles}
        name="picture"
        placeholder="Drag and Drop a Dile here or click"
        multiple={false}
        accept={{ 'image/png': ['.png'], 'image/jpg': ['.jpg'], 'image/jpeg': ['.jpeg'] }}
      />
    </Box>
  )
}

export default InputImage
