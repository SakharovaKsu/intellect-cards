import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { Typography } from '@/components/ui/typography'
import getClassNames, { ClassesObj } from '@/helpers/get-class-names'

import s from './button.module.scss'

export type ButtonVariant = 'link' | 'primary' | 'secondary' | 'tertiary'
type ButtonSlot = 'label' | 'root'
export type ButtonClasses = ClassesObj<ButtonSlot, 'fullWidth' | ButtonVariant>

type OwnProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  classes?: ButtonClasses
  fullWidth?: boolean
  variant?: ButtonVariant
}

export type ButtonProps<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, 'className' | keyof OwnProps<T>>

const ButtonRender = <T extends ElementType = 'button'>(
  { as, children, classes, fullWidth, variant = 'primary', ...props }: ButtonProps<T>,
  ref: Ref<ElementRef<T>>
) => {
  const Component = as ?? ('button' as string)
  const cls = getClassNames(['root', 'label'], { fullWidth, [variant]: variant })(s, classes)

  return (
    <Component className={cls.root} ref={ref} {...props}>
      <Typography
        as={'span'}
        className={cls.label}
        variant={variant === 'link' ? 'subtitle1' : 'subtitle2'}
      >
        {children}
      </Typography>
    </Component>
  )
}

export const Button = forwardRef(ButtonRender) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: Ref<ElementRef<T>> }
) => ReactElement
