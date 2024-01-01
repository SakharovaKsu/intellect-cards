import { CSSProperties, ComponentPropsWithRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

type Props = ComponentPropsWithRef<'div'> & {
  marginTop?: CSSProperties['marginTop']
}

export const Page = ({ children, className, marginTop, style, ...rest }: Props) => {
  const classes = clsx(className, s.page)
  const styles = { marginTop, ...style }

  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  )
}
