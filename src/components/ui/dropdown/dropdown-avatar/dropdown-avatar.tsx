import { forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './dropdown-avatar.module.scss'

export type DropdownWithAvatarProps = {
  avatar?: string
  mail?: string
  name?: string
}

export const DropdownWithAvatar = forwardRef<HTMLDivElement, DropdownWithAvatarProps>(
  ({ avatar, mail, name, ...rest }, ref) => {
    const classNames = {
      avatar: clsx(s.avatar),
      avatarContainer: clsx(s.avatarContainer),
      mail: clsx(s.mail),
      name: clsx(s.name),
      root: clsx(s.root),
    }

    return (
      <div className={classNames.root} {...rest} ref={ref}>
        <div className={classNames.avatarContainer}>
          <img alt={'avatar'} className={classNames.avatar} src={avatar} />
        </div>
        <div>
          <Typography className={classNames.name} variant={'subtitle2'}>
            {name}
          </Typography>
          <Typography className={classNames.mail} variant={'caption'}>
            {mail}
          </Typography>
        </div>
      </div>
    )
  }
)
