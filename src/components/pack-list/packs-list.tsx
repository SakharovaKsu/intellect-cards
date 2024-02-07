import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ItemsType, Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { CloseIcon } from '@/icons'
import { PictureIcon } from '@/icons/icon-components/picture'
import { clsx } from 'clsx'

import s from './packs-list.module.scss'

type Props = {
  deletePack?: boolean
  img?: string
  isPack?: boolean
  items?: ItemsType[] | undefined
  nameButton: string
  title: string
}

export const PacksList = ({ deletePack = false, img, isPack, items, nameButton, title }: Props) => {
  const classNames = {
    buttonClose: clsx(s.buttonClose),
    container: clsx(s.container),
    containerButton: clsx(s.containerButton),
    containerButtonPct: clsx(s.containerButtonPct),
    containerCheckbox: clsx(s.containerCheckbox),
    containerEdit: clsx(s.containerEdit),
    containerTitle: clsx(s.containerTitle),
    picture: clsx(s.picture),
    select: clsx(s.select, s.fullWidth),
  }

  const addPicture = (
    <div>
      <img alt={'Картинка заглошка'} className={classNames.picture} src={img} />
      <Button fullWidth variant={'secondary'}>
        <span className={classNames.containerButtonPct}>
          <PictureIcon />
          Change Cover
        </span>
      </Button>
    </div>
  )

  const content = !deletePack ? (
    <>
      {isPack && <TextField label={'Name Pack'} placeholder={'Name'} />}
      {!isPack && (
        <>
          <Select className={classNames.select} items={items || []} variant={'fullWidth'} />
          {img ? (
            <>
              {!isPack && <Typography variant={'subtitle2'}>Question:</Typography>}
              {addPicture}
            </>
          ) : (
            <TextField label={'Question'} placeholder={''} />
          )}
          {img ? (
            <>
              {!isPack && <Typography variant={'subtitle2'}>Answer:</Typography>}
              {addPicture}
            </>
          ) : (
            <TextField label={'Answer'} placeholder={''} />
          )}
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
    <CardPage className={classNames.container}>
      <div className={classNames.containerTitle}>
        <Typography variant={'h2'}>{title}</Typography>
        <button>
          <CloseIcon className={classNames.buttonClose} />
        </button>
      </div>
      <div className={classNames.containerEdit}>
        {isPack && img && addPicture}
        {content}
      </div>
      <div className={classNames.containerButton}>
        <Button variant={'secondary'}>{nameButton}</Button>
        <Button variant={'primary'}>{nameButton}k</Button>
      </div>
    </CardPage>
  )
}
