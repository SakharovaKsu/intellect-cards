import { CSSProperties, ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { clsx } from 'clsx'

import s from './layout.module.scss'

type Props = ComponentPropsWithRef<'div'> & {
  contentMarginTop?: CSSProperties['marginTop']
}

export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, contentMarginTop = '36px', ...rest }, ref) => {
    const classes = {
      className: clsx(className),
      main: clsx(s.main),
    }

    return (
      <div ref={ref} {...rest}>
        <Header />
        <div className={classes.main}>
          <Outlet />
        </div>
      </div>
    )
  }
)
