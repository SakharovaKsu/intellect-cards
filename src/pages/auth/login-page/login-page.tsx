import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/components/auth/login/sign-in-form'
import { Page } from '@/components/ui/page/page'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

const LoginPage = () => {
  const [singIn] = useLoginMutation()
  const navigate = useNavigate()

  const handleSingIn = async (data: LoginArgs) => {
    try {
      await singIn(data).unwrap()
      navigate('/')
    } catch (e: any) {}
  }

  return (
    <Page>
      <SignInForm onSubmit={handleSingIn} />
    </Page>
  )
}

export default LoginPage
