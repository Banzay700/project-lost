import { CSSProperties, FC, ReactNode } from 'react'
import { animated, useSpring } from '@react-spring/web'

interface FadeInProps {
  children: ReactNode
  delay?: number
  styles?: CSSProperties
  className?: string
  onClick?: () => void
}

const FadeIn: FC<FadeInProps> = ({ children, delay = 80, styles, className, onClick }) => {
  const animationConfig = useSpring({
    from: { opacity: 0 },
    delay,
    to: { opacity: 1 },
  })

  const style = { ...animationConfig, ...styles }
  return (
    <animated.div className={className} style={style} onClick={onClick}>
      {children}
    </animated.div>
  )
}

export default FadeIn
