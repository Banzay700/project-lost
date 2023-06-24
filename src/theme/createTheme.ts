import { CSSProperties } from 'react'
import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import { breakpoints, palette } from './config'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

const themeBase = createTheme({ breakpoints, palette })

const theme = createTheme(
  {
    ...themeBase,
    typography: {
      fontFamily: 'Poppins',
      h1: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 600,
        [themeBase.breakpoints.down('lg')]: {
          fontSize: '18px',
          lineHeight: '14px',
        },
      },
      h2: {
        fontSize: '16px',
        lineHeight: '24px',
        [themeBase.breakpoints.down('lg')]: {
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
      h3: {
        fontSize: '14px',
        lineHeight: '20px',
        [themeBase.breakpoints.down('lg')]: {
          lineHeight: '18px',
          fontSize: '12px',
        },
      },
      subtitle1: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        [themeBase.breakpoints.down('lg')]: {
          fontSize: '11px',
          lineHeight: '16px',
        },
      },
      subtitle2: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 400,
        [themeBase.breakpoints.down('lg')]: {
          fontSize: '11px',
          lineHeight: '14px',
        },
      },
      dashNumb: {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '32px',
      },
      button: {
        textTransform: 'none' as CSSProperties['textTransform'],
      },
    },
    components: {
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid',
            borderColor: themeBase.palette.border.default,
            '&:last-child': { borderBottom: 'none' },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          body: {
            padding: 0,
            borderBottom: 'none',
            '&:last-child': { paddingRight: '10px' },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            [themeBase.breakpoints.down('lg')]: {
              fontSize: '14px',
              lineHeight: 1.5,
              padding: '11px 16px',
            },
            padding: '12px 16px',
            borderColor: themeBase.palette.border.main,
            borderRadius: '16px',
            '&:focus': {
              color: themeBase.palette.primary.main,
            },
          },
          icon: {
            color: 'currentColor',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: themeBase.palette.text.primary,
            },
            input: {
              [themeBase.breakpoints.down('lg')]: {
                fontSize: '14px',
                lineHeight: 1.5,
                padding: '11px 16px',
              },
              padding: '12px 16px',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid',
                borderColor: themeBase.palette.primary.main,
              },
              '&.Mui-focused.MuiFormLabel-root': {
                color: themeBase.palette.primary.main,
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
              border: '1px solid',
              borderColor: themeBase.palette.primary.main,
            },
            '&.Mui-focused .MuiInputAdornment-root': {
              color: themeBase.palette.primary.main,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: '4px',
            top: '-3px',
            [themeBase.breakpoints.down('lg')]: {
              top: '-5px',
              left: '3px',
            },
            '&.Mui-focused': { color: themeBase.palette.primary.main },
          },
          shrink: {
            [themeBase.breakpoints.down('lg')]: {
              fontSize: '12px',
              transform: 'translate(10px, -5px)',
            },
            transform: 'translate(10px, -7px)',
            fontSize: '12px',
            color: '#c2c2c2',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            [themeBase.breakpoints.down('lg')]: {
              fontSize: '14px',
              lineHeight: 1.5,
            },
            color: '#c2c2c2',
            backgroundColor: 'inherit',
          },
        },
      },
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
          },
          containedPrimary: {
            '&.Mui-disabled': {
              opacity: '0.6',
              background: '#FF5C00',
              color: themeBase.palette.primary.white,
            },
          },
          outlinedSecondary: {
            border: '1px solid',
            borderColor: themeBase.palette.border.default,
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
            borderColor: themeBase.palette.border.main,
          },
        },
      },
      MuiSwipeableDrawer: {
        defaultProps: {
          PaperProps: {
            style: {
              width: '40%',
              boxShadow: 'none',
            },
          },
          BackdropProps: {
            style: {
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
