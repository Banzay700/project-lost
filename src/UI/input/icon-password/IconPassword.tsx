import { FC, useState } from 'react'
import { Icon } from 'assets'
import { IconPasswordWrapper } from './IconPassword.styled'

interface IconPasswordProps {
  onClick: () => void
}

const IconPassword: FC<IconPasswordProps> = ({ onClick }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChangeIcon = () => {
    setShowPassword(!showPassword)
    onClick()
  }

  return (
    <IconPasswordWrapper onClick={handleChangeIcon}>
      {showPassword ? <Icon.Eye /> : <Icon.EyeOff />}
    </IconPasswordWrapper>
  )
}

export default IconPassword
