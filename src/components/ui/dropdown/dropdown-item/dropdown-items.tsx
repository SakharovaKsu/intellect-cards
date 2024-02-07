import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Item } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-item.module.scss'

export type Props = {
  children?: ReactNode
  onSelect?: (event: Event) => void
} & ComponentPropsWithoutRef<typeof Item>

export const DropdownItem = forwardRef<ElementRef<typeof Item>, Props>(({ children }, ref) => {
  const classNames = {
    item: clsx(s.item),
    itemIcon: clsx(s.itemIcon),
  }

  return (
    <Item asChild className={classNames.item} ref={ref}>
      {children}
    </Item>
  )
})

export type DropdownItemWithIconProps = Omit<Props, 'children'> & {
  icon: ReactNode
  label: string
} & ComponentPropsWithoutRef<typeof Item>

export const DropdownItemWithIcon = forwardRef<ElementRef<typeof Item>, DropdownItemWithIconProps>(
  ({ icon, label, ...rest }, ref) => {
    const classNames = {
      item: clsx(s.item),
      itemIcon: clsx(s.itemIcon),
    }

    return (
      <Item asChild className={classNames.item} ref={ref} {...rest}>
        <div>
          <div className={classNames.itemIcon}>{icon}</div>
          <Typography as={'label'} variant={'caption'}>
            {label}
          </Typography>
        </div>
      </Item>
    )
  }
)
