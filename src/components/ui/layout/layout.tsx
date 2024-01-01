import { CSSProperties, ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/ui/header'
import { clsx } from 'clsx'

import s from './layout.module.scss'

type Props = ComponentPropsWithRef<'div'> & {
  contantMarginTop?: CSSProperties['marginTop']
}

export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, contantMarginTop = '36px', ...rest }, ref) => {
    const classes = {
      className: clsx(className),
      main: clsx(s.main),
    }

    return (
      <div ref={ref} {...rest}>
        <Header isAuth={false} />
        <main className={classes.main}>{children}</main>
      </div>
    )
  }
)
