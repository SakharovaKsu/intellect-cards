import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Indicator, Item } from '@radix-ui/react-radio-group'

import s from './radio-item.module.scss'

export type RadioItemProps = {
  label: string
} & ComponentPropsWithoutRef<typeof Item>

export const RadioItem = forwardRef<ElementRef<typeof Item>, RadioItemProps>(
  ({ disabled, label, value }, ref) => {
    return (
      <div className={s.container}>
        <Typography as={'label'} className={disabled ? s.label : ''} variant={'body2'}>
          <Item className={s.RadioGroupItem} disabled={disabled} ref={ref} value={value}>
            <Indicator className={s.RadioGroupIndicator} />
          </Item>
          {label}
        </Typography>
      </div>
    )
  }
)
