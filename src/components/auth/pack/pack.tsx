import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { CloseIcon } from '@/icons/close-icon'

import s from './pack.module.scss'

type PackType = {
  deletePack?: boolean
  nameButton: string
  title: string
}

export const Pack: FC<PackType> = ({ deletePack = false, nameButton, title }) => {
  const content = !deletePack ? (
    <>
      <TextField label={'Name Pack'} placeholder={'Name'} />
      <div className={s.containerCheckbox}>
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
    <Card className={s.container}>
      <div className={s.containerTitle}>
        <Typography variant={'large'}>{title}</Typography>
        <button>
          <CloseIcon className={s.buttonClose} />
        </button>
      </div>
      <div className={s.containerEdit}>{content}</div>
      <div className={s.containerButton}>
        <Button variant={'secondary'}>{nameButton}</Button>
        <Button variant={'primary'}>{nameButton}k</Button>
      </div>
    </Card>
  )
}
