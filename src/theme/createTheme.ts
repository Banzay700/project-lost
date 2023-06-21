import { CSSProperties } from 'react'
import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import { breakpoints, palette } from './config'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

export const themeWithBreakpoints = createTheme({ breakpoints, palette }, enUS)
const theme = createTheme(
  {
    ...themeWithBreakpoints,
    typography: {
      fontFamily: 'Poppins',
      h1: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 600,
        [themeWithBreakpoints.breakpoints.down('lg')]: {
          fontSize: '18px',
          lineHeight: '14px',
        },
      },
      h2: {
        fontSize: '16px',
        lineHeight: '24px',
        [themeWithBreakpoints.breakpoints.down('lg')]: {
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
      h3: {
        fontSize: '14px',
        lineHeight: '20px',
        [themeWithBreakpoints.breakpoints.down('lg')]: {
          lineHeight: '18px',
          fontSize: '12px',
        },
      },
      subtitle1: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        [themeWithBreakpoints.breakpoints.down('lg')]: {
          fontSize: '11px',
          lineHeight: '16px',
        },
      },
      subtitle2: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 400,
        [themeWithBreakpoints.breakpoints.down('lg')]: {
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
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
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
            [themeWithBreakpoints.breakpoints.down('lg')]: {
              fontSize: '14px',
              lineHeight: 1.5,
              padding: '11px 16px',
            },
            padding: '12px 16px',
            borderColor: '#FF5C00',
            borderRadius: '16px',
            '&:focus': {
              color: '#FF5C00',
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
              WebkitTextFillColor: '#828487',
            },
            input: {
              [themeWithBreakpoints.breakpoints.down('lg')]: {
                fontSize: '14px',
                lineHeight: 1.5,
                padding: '11px 16px',
              },
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
            [themeWithBreakpoints.breakpoints.down('lg')]: {
              top: '-5px',
              left: '3px',
            },
            '&.Mui-focused': { color: '#ff5c00' },
          },
          shrink: {
            [themeWithBreakpoints.breakpoints.down('lg')]: {
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
            [themeWithBreakpoints.breakpoints.down('lg')]: {
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
      MuiStack: {
        defaultProps: {
          borderColor: '#E4E4E4',
        },
      },
      MuiButton: {
        styleOverrides: {
          // button: {
          //   textTransform: 'none',
          // },
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
