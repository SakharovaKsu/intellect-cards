import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword, ForgotPasswordFormSchema } from '@/components/auth/forgot-password'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { useGetMeQuery, useRecoverPasswordMutation } from '@/services/auth/auth.service'

export const ForgotPasswordPage = () => {
  const { data, isLoading } = useGetMeQuery()
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const handleForgotPassword = async (data: ForgotPasswordFormSchema) => {
    try {
      await recoverPassword({
        email: data.email,
        html: '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/confirm-email/##token##">here</a> to recover your password</p>',
      }).unwrap()

      navigate('/check-email')
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
      <ForgotPassword onSubmit={handleForgotPassword} />
    </Page>
  )
}
