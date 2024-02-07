import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, Props } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<Props, 'checked' | 'onCheckedChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkBoxProps
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Checkbox {...checkBoxProps} checked={value} onCheckedChange={onChange} />
}
