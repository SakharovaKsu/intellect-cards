import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RadioItem, RadioItemProps } from '@/components/ui/radio-group/radio-item/radio-item'
import { Root } from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  items: RadioItemProps[]
} & ComponentPropsWithoutRef<typeof Root>

export const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ items, ...rest }, ref) => {
    return (
      <form>
        <Root
          aria-label={'View density'}
          className={s.RadioGroupRoot}
          defaultValue={'default'}
          ref={ref}
          {...rest}
        >
          {items.map(item => (
            <RadioItem key={item.label} {...item} />
          ))}
        </Root>
      </form>
    )
  }
)
