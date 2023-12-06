import { Typography } from '@/components/ui/typography'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
}

export const CheckBox = (props: CheckBoxProps) => {
  const { checked, className, disabled, label, onCheckedChange } = props
  const classNames = {
    buttonCheckBox: clsx(s.buttonCheckBox, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: clsx(s.indicator),
    labelWrapper: clsx(s.labelWrapper, disabled && s.disabled),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.container}>
      <Typography as={'label'} className={classNames.labelWrapper} variant={'body2'}>
        <div className={classNames.buttonCheckBox} tabIndex={0}>
          <Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            onCheckedChange={onCheckedChange}
          >
            <Indicator className={classNames.indicator}>
              <CheckIcon />
            </Indicator>
          </Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
