import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type OwnProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: TypographyVariant
}

type TypographyProps<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>

export const TypographyRender = <T extends ElementType = 'p'>(
  { as, children, className, variant = 'body1', ...props }: TypographyProps<T>,
  ref: Ref<ElementRef<T>>
) => {
  const Component = as || elementsMap[variant]

  return (
    <Component className={clsx(className, s[variant])} ref={ref} {...props}>
      {children}
    </Component>
  )
}

export const Typography = forwardRef(TypographyRender) as <T extends ElementType = 'p'>(
  props: TypographyProps<T> & { ref?: Ref<ElementRef<T>> }
) => ReactElement

export const elementsMap: Record<TypographyVariant, string> = {
  body1: 'p',
  body2: 'p',
  caption: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'p',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'h4',
  subtitle2: 'h5',
}

export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
