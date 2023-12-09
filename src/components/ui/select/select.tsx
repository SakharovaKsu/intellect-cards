import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ArrowMiniDownIcon } from '@/icons/ArrowMiniDownIcon'
import { SelectItem } from '@/components/ui/select/selectItem'
import { Typography } from '@/components/ui/typography'
import {
  Content,
  Group,
  Icon,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type ItemsType = {
  title: string
  value: string
}

export type SelectVariant = 'default' | 'pagination'

export type SelectProps = {
  className?: string
  disabled?: boolean
  items: ItemsType[]
  label?: string
  placeholder?: ReactNode
  variant?: SelectVariant
} & ComponentPropsWithoutRef<typeof Root>

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    {
      children,
      className,
      disabled,
      items,
      label,
      onValueChange,
      open,
      placeholder = 'Select',
      value,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const classNames = {
      content: clsx(s.content),
      icon: clsx(s.icon),
      label: clsx(s.label, disabled && s.disabled),
      placeholder: clsx(s.placeholder),
      trigger: clsx(s.trigger, s[variant], s[`${variant}Paddings`], className),
    }

    return (
      <Root disabled={disabled} onValueChange={onValueChange} open={open} value={value} {...rest}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Trigger className={classNames.trigger} ref={ref}>
          <Value className={classNames.placeholder} placeholder={placeholder} />
          <Icon asChild className={classNames.icon}>
            <ArrowMiniDownIcon disabled={disabled} />
          </Icon>
        </Trigger>

        <Portal>
          <Content className={classNames.content} position={'popper'} ref={ref}>
            <Viewport>
              <Group>
                {items.map(item => (
                  <SelectItem
                    key={item.value}
                    title={item.title}
                    value={item.value}
                    variant={variant}
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </Group>
            </Viewport>
          </Content>
        </Portal>
      </Root>
    )
  }
)
