import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { EditIcon } from '@/icons/edit-icon'
import { LogOutIcon } from '@/icons/log-out-icon'

import s from './edit-profile.module.scss'

type EditProfileType = {
  emailUser: string
  imgAvatar: string
  nameUser: string
}

export const EditProfile: FC<EditProfileType> = ({ emailUser, imgAvatar, nameUser }) => {
  return (
    <Card className={s.container}>
      <Typography variant={'large'}>Personal Information</Typography>
      <div className={s.containerEdit}>
        <div className={s.photoAvatar}>
          <img alt={'Фото аватарки.'} src={imgAvatar} />
          <button className={s.buttonEditPhoto}>
            <EditIcon className={s.iconEdit} />
          </button>
        </div>
        <div className={s.containerName}>
          <Typography className={s.subTitle} variant={'large'}>
            {nameUser}
          </Typography>
          <button className={s.buttonEditName}>
            <EditIcon className={s.iconEdit} />
          </button>
        </div>
        <Typography className={s.text} variant={'overline'}>
          {emailUser}
        </Typography>
        <Button as={'button'} variant={'secondary'}>
          <span className={s.buttonLogout}>
            <LogOutIcon />
            Logout
          </span>
        </Button>
      </div>
    </Card>
  )
}
