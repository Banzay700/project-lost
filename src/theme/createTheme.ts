import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/400-italic.css'
import '@fontsource/poppins/500-italic.css'
import '@fontsource/poppins/600-italic.css'
import '@fontsource/poppins/700-italic.css'

const themeWithBreakpoints = createTheme({})

const theme = createTheme(
  {
    breakpoints: {
      // default values
      values: {
        xs: 0,
        sm: 768,
        md: 991,
        lg: 1280,
        xl: 1440,
      },
    },
    typography: {
      fontFamily: 'Poppins',
      h1: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '30px',
      },
      h2: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      h3: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      subtitle1: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
      },
      subtitle2: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '14px',
      },
      dashNumb: {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '32px',
      },
      button: {
        textTransform: 'initial',
      },
    },
    palette: {
      primary: {
        main: '#FF5C00',
        light: '#ff7c33',
        dark: '#FF7527',
        contrastText: '#fff',
      },
      secondary: {
        main: '#19191C',
        light: '#474749',
        dark: '#111113',
        contrastText: '#fff',
      },
      text: {
        primary: '#828487',
        secondary: '#19191C',
        addition: '#fff',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            dashNumb: 'p',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ':focus': {
              outline: 'none',
            },
          },
          containedSecondary: {
            '&.Mui-disabled': {
              background: '#E4E4E4',
              color: '#9C9C9C',
            },
            [themeWithBreakpoints.breakpoints.between('sm', 'md')]: {},
          },
          containedPrimary: {
            '&.Mui-disabled': {
              opacity: '0.6',
              background: '#FF5C00',
              color: '#FFFFFF',
            },
          },
          outlinedSecondary: {
            border: '1px solid #E4E4E4',
          },
        },
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
          disableElevation: false,
        },
      },
    },
    spacing: 5,
  },
  enUS,
)

export default theme
