import { ReactNode } from 'react'

type OutlinedVariant = { outlined: true; icon?: never; label?: never }
type IconVariant = { icon: ReactNode; label: string; outlined?: never }
type DefaultVariant = { label: string; icon?: never; outlined?: never }

export type InputVariantPropsType = OutlinedVariant | IconVariant | DefaultVariant
