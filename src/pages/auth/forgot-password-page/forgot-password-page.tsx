import { useNavigate } from 'react-router-dom'

import { ForgotPassword } from '@/components/auth/forgot-password'
import { Page } from '@/components/ui/page/page'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { RecoverPasswordArgs } from '@/services/auth/auth.types'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const handleForgotPassword = async (data: RecoverPasswordArgs) => {
    try {
      await recoverPassword(data).unwrap()
      navigate('/check-email')
    } catch (e) {
      /* empty */
    }
  }

  return (
    <Page>
      <ForgotPassword onSubmit={handleForgotPassword} />
    </Page>
  )
}
