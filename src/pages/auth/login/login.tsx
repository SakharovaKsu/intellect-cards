import { SignInForm } from '@/components/auth/login/sign-in-form'
import { Page } from '@/components/ui/page/page'

const Login = () => {
  const handleSubmit = () => {}

  return (
    <Page marginTop={'36px'}>
      <SignInForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default Login
