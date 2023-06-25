import { FC } from 'react'
import { HeaderActionsWrapper } from './HeaderActionMobile.styled'
import { useNavigate } from 'react-router-dom'
import { Icon } from 'assets'
import { Button } from 'UI/button'
import { Typography } from '@mui/material'

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
