import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'

const themeWithBreakpoints = createTheme({})

const theme = createTheme(
  {
    breakpoints: {
      // default values
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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
        fontSize: '40px',
        fontWeight: 600,
        lineHeight: '48px',
      },
      h4: undefined,
      h5: undefined,
      h6: undefined,
      button: {
        textTransform: 'initial',
      },
    },
    palette: {
      primary: {
        main: '#FF5C00',
        light: '#ff7c33',
        dark: '#d24801',
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
            padding: '20px 0 14px',
            width: '145px',
            [themeWithBreakpoints.breakpoints.between('sm', 'md')]: {},
          },
          containedPrimary: {
            '&.Mui-disabled': {
              opacity: '0.6',
              background: '#FF5C00',
              color: '#FFFFFF',
            },
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
