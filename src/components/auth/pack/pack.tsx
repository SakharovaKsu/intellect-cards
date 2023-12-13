import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { CloseIcon } from '@/icons'
import { clsx } from 'clsx'

import s from './pack.module.scss'

type PackType = {
  deletePack?: boolean
  nameButton: string
  title: string
}

export const Pack: FC<PackType> = ({ deletePack = false, nameButton, title }) => {
  const classNames = {
    buttonClose: clsx(s.buttonClose),
    container: clsx(s.container),
    containerButton: clsx(s.containerButton),
    containerCheckbox: clsx(s.containerCheckbox),
    containerEdit: clsx(s.containerEdit),
    containerTitle: clsx(s.containerTitle),
  }

  const content = !deletePack ? (
    <>
      <TextField label={'Name Pack'} placeholder={'Name'} />
      <div className={classNames.containerCheckbox}>
        <Checkbox />
        <Typography variant={'body2'}>Private pack</Typography>
      </div>
    </>
  ) : (
    <Typography variant={'body1'}>
      Do you really want to remove Pack Name? All cards will be deleted.
    </Typography>
  )

  return (
    <Card className={classNames.container}>
      <div className={classNames.containerTitle}>
        <Typography variant={'large'}>{title}</Typography>
        <button>
          <CloseIcon className={classNames.buttonClose} />
        </button>
      </div>
      <div className={classNames.containerEdit}>{content}</div>
      <div className={classNames.containerButton}>
        <Button variant={'secondary'}>{nameButton}</Button>
        <Button variant={'primary'}>{nameButton}k</Button>
      </div>
    </Card>
  )
}
