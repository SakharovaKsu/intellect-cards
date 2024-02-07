import { ComponentPropsWithoutRef, ElementRef, forwardRef, memo, useCallback } from 'react'

import { RadioItem, RadioItemProps } from '@/components/ui/radio-group/radio-item/radio-item'
import { Root } from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type Props = {
  items: RadioItemProps[]
  onChangeOption: (rating: number) => void
} & ComponentPropsWithoutRef<typeof Root>

export const RadioGroup = memo(
  forwardRef<ElementRef<typeof Root>, Props>(({ items, onChangeOption, ...rest }, ref) => {
    const handleOnValueChange = useCallback(
      (value: string | undefined) => {
        const selectedOption = items.find(option => option.value === value)

        if (selectedOption) {
          onChangeOption(parseInt(selectedOption.id as string))
        }
      },
      [items, onChangeOption]
    )

    return (
      <form>
        <Root
          aria-label={'View density'}
          className={s.RadioGroupRoot}
          defaultValue={'default'}
          onValueChange={handleOnValueChange}
          ref={ref}
          {...rest}
        >
          {items.map(item => (
            <RadioItem key={item.id} {...item} />
          ))}
        </Root>
      </form>
    )
  })
)
