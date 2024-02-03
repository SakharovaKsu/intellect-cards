import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './table-data-cell.module.scss'

export const TableDataCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    return <td className={`${s.tdc} ${s.unselectable} ${className}`} {...rest} ref={ref} />
  }
)
