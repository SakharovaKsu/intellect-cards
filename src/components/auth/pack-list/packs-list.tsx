import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ItemsType, Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { CloseIcon } from '@/icons'
import { clsx } from 'clsx'

import s from './packs-list.module.scss'

type PackType = {
  deletePack?: boolean
  isPack?: boolean
  items?: ItemsType[] | undefined
  nameButton: string
  title: string
}

export const PacksList: FC<PackType> = ({
  deletePack = false,
  isPack,
  items,
  nameButton,
  title,
}) => {
  const classNames = {
    buttonClose: clsx(s.buttonClose),
    container: clsx(s.container),
    containerButton: clsx(s.containerButton),
    containerCheckbox: clsx(s.containerCheckbox),
    containerEdit: clsx(s.containerEdit),
    containerTitle: clsx(s.containerTitle),
    select: clsx(s.select, s.fullWidth),
  }

  const content = !deletePack ? (
    <>
      {isPack && <TextField label={'Name Pack'} placeholder={'Name'} />}
      {!isPack && (
        <>
          <Select className={classNames.select} items={items || []} variant={'fullWidth'} />
          <TextField label={'Question'} placeholder={''} />
          <TextField label={'Answer'} placeholder={''} />
        </>
      )}
      {isPack && (
        <div className={classNames.containerCheckbox}>
          <Checkbox />
          <Typography variant={'body2'}>Private pack</Typography>
        </div>
      )}
    </>
  ) : (
    <Typography variant={'body1'}>
      Do you really want to remove {isPack ? 'Pack' : 'Card'} Name? <br />
      All {isPack ? 'cards' : 'packs'} will be deleted.
    </Typography>
  )

  return (
    <Card className={classNames.container}>
      <div className={classNames.containerTitle}>
        <Typography variant={'h2'}>{title}</Typography>
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
