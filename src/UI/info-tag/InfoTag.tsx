import { FC, ReactElement } from 'react'
import { InfoTagWrapper, InfoType } from './InfoTag.styled'

interface InfoTagProps extends InfoType {
  label: string
  size?: 'small' | 'medium'
  icon?: ReactElement
}

const InfoTag: FC<InfoTagProps> = ({ label, type, icon, size, withBorder }) => {
  return (
    <InfoTagWrapper type={type} label={label} size={size} withBorder={withBorder} icon={icon} />
  )
}

export default InfoTag
