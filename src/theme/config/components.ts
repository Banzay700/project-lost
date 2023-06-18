// add disabled style for textField

export const components = {
  MuiSelect: {
    styleOverrides: {
      select: {
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
      button: {
        textTransform: 'none',
      },
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
}
