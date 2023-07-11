import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from 'assets'
import { Button } from 'UI'
import { Typography } from '@mui/material'
import { HeaderActionsWrapper } from './HeaderActionMobile.styled'

interface HeaderActionsProps {
  label: string
}

const HeaderActionMobile: FC<HeaderActionsProps> = ({ label }) => {
  const navigate = useNavigate()

  return (
    <HeaderActionsWrapper>
      <Button
        variant="outlined"
        size="small"
        minWidth="38px"
        icon={<Icon.ArrowLeft />}
        onClick={() => navigate(-1)}
      />
      <Typography variant="h1" component="p" width="100%" textAlign="center">
        {label}
      </Typography>
    </HeaderActionsWrapper>
  )
}

export default HeaderActionMobile
