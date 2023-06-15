import { CSSProperties } from 'react'

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
    gradient: string
    border: {
      primary: string
    }
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
