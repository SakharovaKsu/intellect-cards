import { memo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CreatePassword, CreatePasswordFormSchema } from '@/components/auth/create-password'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { useGetMeQuery, useResetPasswordMutation } from '@/services/auth/auth.service'

export const CreatePasswordPage = memo(() => {
  const { data, isLoading } = useGetMeQuery()
  const { token } = useParams()
  const navigate = useNavigate()
  const [confirmPassword] = useResetPasswordMutation()

  const handleCreatePassword = async (data: CreatePasswordFormSchema) => {
    try {
      await confirmPassword({ password: data.password, token })
      toast.success('Your password changed successfully. Please Sign In now!')
      navigate('/login')
    } catch (e: any) {
      toast.error(e.data.message)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (data) {
    return <Navigate to={'/'} />
  }

  return (
    <Page>
      <CreatePassword onSubmit={handleCreatePassword} />
    </Page>
  )
})
