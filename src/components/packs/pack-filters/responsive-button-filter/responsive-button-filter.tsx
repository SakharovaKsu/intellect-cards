import { ReactNode } from 'react'
import MediaQuery from 'react-responsive'

import { Button, ButtonVariant } from '@/components/ui/button'

type Props = {
  children?: ReactNode
  extraStyle?: {}
  isFullWidth?: boolean
  onClick?: () => void
  variant?: ButtonVariant
}

const ResponsiveButton = ({ children, extraStyle, isFullWidth, onClick, variant }: Props) => {
  return (
    <>
      <MediaQuery maxWidth={768}>
        <Button fullWidth={isFullWidth} onClick={onClick} variant={variant}>
          {children}
        </Button>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <Button onClick={onClick} style={extraStyle} variant={variant}>
          {children}
        </Button>
      </MediaQuery>
    </>
  )
}

export default ResponsiveButton
