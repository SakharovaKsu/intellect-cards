import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { EditProfile, EditProfileFormSchema } from '@/components/auth/edit-profile'
import Loader from '@/components/ui/loader/loader'
import { useGetMeQuery, useLogoutMutation, useUpdateMeMutation } from '@/services/auth/auth.service'

import s from './profile.module.scss'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [updateMe, { isLoading: loadingUpdate }] = useUpdateMeMutation()
  const [logout, { isLoading: loadingLogout }] = useLogoutMutation()

  const updateProfile = useCallback(
    async (data: EditProfileFormSchema) => {
      const formData = new FormData()

      formData.append('name', data.nickname)
      try {
        await updateMe(formData).unwrap()
        toast.success('Message: Your profile has been successfully updated.')
      } catch (error) {
        toast.error('Error: Unable to locate user.')
      }
    },
    [updateMe]
  )

  const changeAvatar = useCallback(
    async (avatar: Blob) => {
      const formData = new FormData()

      formData.append('avatar', avatar)
      try {
        await updateMe(formData).unwrap()
        toast.success('Message: Your avatar has been successfully updated.')
      } catch (error) {
        toast.error('Error: Unable to locate user.')
      }
    },
    [updateMe]
  )

  return (
    <div className={s.wrapper}>
      {loadingUpdate || loadingLogout ? <Loader /> : null}
      <EditProfile
        avatar={data?.avatar}
        emailUser={data?.email || 'YellowKing@gmail.com'}
        logout={logout}
        nameUser={data?.name || 'Carcosa Ivanovich'}
        onChangeAvatar={changeAvatar}
        updateProfile={updateProfile}
      />
    </div>
  )
}
