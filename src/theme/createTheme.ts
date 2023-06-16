import { createTheme, ThemeOptions } from '@mui/material'
import { enUS } from '@mui/material/locale'
import { breakpoints, typography, components, palette } from './config'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

const theme = createTheme(
  {
    palette,
    breakpoints,
    typography,
    components,
    spacing: 5,
  },
  enUS,
)

export default theme
