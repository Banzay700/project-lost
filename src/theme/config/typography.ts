import { CSSProperties } from 'react'

export const typography = {
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
    textTransform: 'none' as CSSProperties['textTransform'],
  },
}
