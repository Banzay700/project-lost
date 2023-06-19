import { CSSProperties } from 'react'

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    lightGrey?: string
    white?: string
    extraLight?: string
    lightBlue?: string
    blue?: string
    darkRed?: string
    red?: string
    lightRed?: string
  }

  interface Palette {
    border: {
      default: string
    }
    background: {
      main: string
      gradient: string
      lightMain: string
    }
  }

  interface TypeBackground {
    main: string
    gradient: string
    lightMain: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    dashNumb: {
      fontSize: CSSProperties['fontSize']
      fontWeight: CSSProperties['fontWeight']
      lineHeight: CSSProperties['lineHeight']
    }
  }

  interface TypographyVariantsOptions {
    dashNumb?: {
      fontSize: CSSProperties['fontSize']
      fontWeight: CSSProperties['fontWeight']
      lineHeight: CSSProperties['lineHeight']
    }
  }
}

declare module '@mui/material/styles' {
  interface TypeText {
    addition: string
    grey: string
    gradient: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dashNumb: true
    h4: false
    h5: false
    h6: false
  }
}
