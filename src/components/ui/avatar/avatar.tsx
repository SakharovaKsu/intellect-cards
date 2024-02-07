import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Image, Root } from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type Props = {
  image: string
  size?: 'large' | 'small'
} & ComponentPropsWithoutRef<typeof Root>

export const Avatar = forwardRef<ElementRef<typeof Root>, Props>(
  ({ image, size = 'small', ...rest }, ref) => {
    const classNames = {
      image: clsx(s.image),
      root: clsx(s.root, s[size]),
    }

    return (
      <Root className={classNames.root} ref={ref} {...rest}>
        <Image className={classNames.image} src={image} />
      </Root>
    )
  }
)
