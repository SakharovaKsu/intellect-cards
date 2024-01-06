import { SignInForm } from '@/components/auth/login/sign-in-form'
import { Page } from '@/components/ui/page/page'
import { useLoginMutation } from '@/services/auth/auth.service'

const Login = () => {
  const [singIn] = useLoginMutation()

  return (
    <Page>
      <SignInForm onSubmit={singIn} />
    </Page>
  )
}

export default Login
