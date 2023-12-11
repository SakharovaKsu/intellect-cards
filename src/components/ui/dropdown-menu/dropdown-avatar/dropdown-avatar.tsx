import { FC } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './dropdown-avatar.module.scss'

type DropdownAvatarType = {
  email: string
  img: string
  name: string
}

export const DropdownAvatar: FC<DropdownAvatarType> = ({ email, img, name }) => {
  const classNames = {
    container: clsx(s.container),
    subTitle: clsx(s.subTitle),
    title: clsx(s.title),
  }

  return (
    <div className={classNames.container}>
      <img alt={'Фото пользователя.'} src={img} />
      <div>
        <Typography as={'p'} className={classNames.title} variant={'caption'}>
          {name}
        </Typography>
        <Typography as={'p'} className={classNames.subTitle} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
