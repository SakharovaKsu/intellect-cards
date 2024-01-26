import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { EditIcon, LogOutIcon } from '@/icons'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'

import s from './edit-profile.module.scss'

// type EditProfileType = {
//   edit: boolean
//   emailUser: string
//   imgAvatar: string
//   nameUser: string
// }

export const EditProfile = () => {
  const { data: userData } = useGetMeQuery()
  const [edit, setEdit] = useState(false)
  const [navigateToLogin, setNavigateToLogin] = useState(false)
  const [logout] = useLogoutMutation()

  const onClickLogOut = async () => {
    try {
      await logout().unwrap()
      setNavigateToLogin(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  if (navigateToLogin) {
    return <Navigate to={'/login'} />
  }

  const informationPersonal = (
    <>
      <div className={s.containerName}>
        <Typography className={s.subTitle} variant={'large'}>
          {userData?.name}
        </Typography>
        <button className={s.buttonEditName}>
          <EditIcon className={s.iconEdit} />
        </button>
      </div>
      <Typography className={s.text} variant={'overline'}>
        {userData?.email}
      </Typography>
      <Button as={'button'} onClick={onClickLogOut} variant={'secondary'}>
        <span className={s.buttonLogout}>
          <LogOutIcon />
          Logout
        </span>
      </Button>
    </>
  )

  const informationEdit = (
    <div className={s.boxEdit}>
      <TextField label={'Nickmame'} />
      <Button as={'button'} fullWidth variant={'primary'}>
        Save Changes
      </Button>
    </div>
  )

  return (
    <Card className={s.container}>
      <Typography variant={'large'}>Personal Information</Typography>
      <div className={s.containerEdit}>
        <div className={s.photoAvatar}>
          <img
            alt={'Фото аватарки.'}
            className={s.sss}
            src={userData?.avatar || 'https://ionicframework.com/docs/img/demos/avatar.svg'}
          />
          {!edit && (
            <button className={s.buttonEditPhoto}>
              <EditIcon className={s.iconEdit} />
            </button>
          )}
        </div>
        {!edit && informationPersonal}
        {edit && informationEdit}
      </div>
    </Card>
  )
}
