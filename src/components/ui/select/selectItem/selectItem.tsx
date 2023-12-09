import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Item, ItemText } from '@radix-ui/react-select'

type SelectItemProps = {
  className?: string
  title: string
  variant: SelectVariant
} & ComponentPropsWithoutRef<typeof Item>

import { SelectVariant } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '../select.module.scss'

export const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ children, className, title, variant, ...rest }, ref) => {
    const classNames = {
      item: clsx(s.selectItem, s[variant], s[`${variant}Paddings`]),
      typography: clsx(s.typography),
    }

    return (
      <Item className={classNames.item} ref={ref} {...rest}>
        <ItemText>
          <Typography className={classNames.typography} variant={'body2'}>
            {children}
          </Typography>
        </ItemText>
      </Item>
    )
  }
)
