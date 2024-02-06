import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    return <tr className={`${className}`} {...rest} ref={ref} />
  }
)
