/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { withProps } from 'utils'

export const Phone = styled(PhoneInput)`
  input {
    color: #828487 !important;
    font-family: Poppins !important;
    font-weight: 400px !important;
    border-radius: 16px !important;
    height: 47px !important;

    &:hover {
      border-color: black !important;
    }
    &:focus {
      border-color: #ff5c00 !important;
      color: black;
    }
  }
`

export const MyLabel = styled(
  'div',
  withProps('isInputFocused'),
)<{ isInputFocused: boolean }>(({ isInputFocused }) =>
  isInputFocused
    ? `
    display: block;
    background-color: #fff;
    position: absolute;
    overflow: hidden;
    font-size: 12px;
    color: #ff5c00;
    top: -10px;
    left: 18%;
    padding: 0 5px;  `
    : `display: none ;`,
)
