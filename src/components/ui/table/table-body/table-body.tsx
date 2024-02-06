import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    return <tbody className={`${className}`} {...rest} ref={ref} />
  }
)
