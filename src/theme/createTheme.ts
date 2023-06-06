import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

const themeWithBreakpoints = createTheme({})

const theme = createTheme(
  {
    breakpoints: {
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
      MuiSelect: {
        styleOverrides: {
          select: {
            padding: '12px 16px',
            borderColor: '#FF5C00',
            borderRadius: '16px',
            color: '#828487',
            '&:focus': {
              color: '#FF5C00',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            input: {
              padding: '12px 16px',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #ff5c00',
              },
              '&.Mui-focused.MuiFormLabel-root': {
                color: '#ff5c00',
              },
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #ff5c00',
            },
            '&.Mui-focused .MuiInputAdornment-root': {
              color: '#ff5c00',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: '4px',
            top: '-3px',
            '&.Mui-focused': { color: '#ff5c00' },
          },
          shrink: { transform: 'translate(10px, -7px)', fontSize: '12px', color: '#c2c2c2' },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: { color: '#c2c2c2', backgroundColor: 'inherit' },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            dashNumb: 'p',
          },
        },
      },
      MuiStack: {
        defaultProps: {
          borderColor: '#E4E4E4',
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
      MuiDivider: {
        styleOverrides: {
          root: {
            borderWidth: '0.5px',
            borderColor: '#E4E4E4',
          },
        },
      },
      MuiSwipeableDrawer: {
        defaultProps: {
          PaperProps: {
            style: {
              width: '45%',
              height: '85%',
              top: '15%',
              boxShadow: 'none',
            },
          },
          BackdropProps: {
            style: {
              height: '85%',
              top: '15%',
              backdropFilter: 'blur(2px)',
            },
          },
        },
      },
    },
    spacing: 5,
  },
  enUS,
)

export default theme
