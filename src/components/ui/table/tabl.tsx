import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table className={s.table + ' ' + className} {...rest} ref={ref} />
  }
)
