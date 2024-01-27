import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './cardPage.module.scss'

export const CardPage = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      card: clsx(s.card, className),
    }

    return <div className={classNames.card} ref={ref} {...rest}></div>
  }
)
