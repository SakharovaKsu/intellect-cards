import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { EditIcon, LogOutIcon } from '@/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import 'react-toastify/dist/ReactToastify.css'

import s from './edit-profile.module.scss'

type EditProfileProps = {
  avatar?: null | string | undefined
  emailUser: string
  logout: () => void
  nameUser: string
  onChangeAvatar?: (avatar: Blob) => void
  updateProfile?: (userData: EditProfileFormSchema) => void
}

export type EditProfileFormSchema = z.infer<typeof CurrentProfileSchema>
const CurrentProfileSchema = z.object({
  file: z.any(),
  nickname: z.string().min(3).max(30),
})

export const EditProfile = ({
  avatar,
  emailUser,
  logout,
  nameUser,
  onChangeAvatar,
  updateProfile,
}: EditProfileProps) => {
  const [edit, setEdit] = useState(false)
  const [loadingError, setLoadingError] = useState('')
  const [editName, setEditName] = useState(nameUser)
  const {
    // control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<EditProfileFormSchema>({ resolver: zodResolver(CurrentProfileSchema) })

  const onSubmitHandler = (data: EditProfileFormSchema) => {
    updateProfile && updateProfile(data)
    setEdit(false)
  }

  const onOutHandler = () => {
    setEdit(false)
    setEditName(nameUser)
    reset()
  }
  const logoutHandler = () => logout()

  const onChangeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const allowedTypes = ['image/jpeg', 'image/png']
    const maxSizeInBytes = 1024 * 1024

    if (!file) {
      setLoadingError('No file selected.')

      return
    }

    if (!allowedTypes.includes(file.type)) {
      setLoadingError('We only accept images in JPEG and PNG formats.')

      return
    }

    if (file.size > maxSizeInBytes) {
      setLoadingError('Please ensure the image does not exceed a size of 1MB.')

      return
    }

    onChangeAvatar?.(file)
  }

  if (loadingError) {
    toast.error(`Error: ${loadingError}`)
    setLoadingError('')
  }

  const informationPersonal = (
    <>
      <div className={s.containerName}>
        <Typography className={s.subTitle} variant={'large'}>
          {nameUser}
        </Typography>
        <button className={s.buttonEditName} onClick={() => setEdit(true)}>
          <EditIcon className={s.iconEdit} />
        </button>
      </div>
      <Typography className={s.text} variant={'overline'}>
        {emailUser}
      </Typography>
      <Button as={'button'} onClick={logoutHandler} variant={'secondary'}>
        <span className={s.buttonLogout}>
          <LogOutIcon />
          Logout
        </span>
      </Button>
    </>
  )

  const informationEdit = (
    <div className={s.boxEdit}>
      <TextField
        errorMessage={errors.nickname?.message}
        {...register('nickname')}
        label={'Nickname'}
        name={'nickname'}
        onChange={e => setEditName(e.currentTarget.value)}
        value={editName}
      />
      <Button as={'button'} fullWidth variant={'primary'}>
        Save Changes
      </Button>
      <Button fullWidth onClick={onOutHandler} type={'button'} variant={'secondary'}>
        Cancel
      </Button>
    </div>
  )

  return (
    <Card className={s.container}>
      <Typography variant={'large'}>Personal Information</Typography>
      <form className={s.containerEdit} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.photoAvatar}>
          <img
            alt={'Just img'}
            src={avatar || 'https://ionicframework.com/docs/img/demos/avatar.svg'}
          />
          {!edit && (
            <>
              <button className={s.buttonEditPhoto}>
                <EditIcon className={s.iconEdit} />
              </button>
              <input
                className={s.buttonEditPhoto}
                {...register('file')}
                name={'file'}
                onChange={onChangeAvatarHandler}
                style={{ opacity: '0' }}
                type={'file'}
              />
            </>
          )}
        </div>
        {!edit && informationPersonal}
        {edit && informationEdit}
      </form>
    </Card>
  )
}
