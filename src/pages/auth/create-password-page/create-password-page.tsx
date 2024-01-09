import { CreatePassword, CreatePasswordFormSchema } from '@/components/auth/create-password'
import { Page } from '@/components/ui/page/page'
import { useResetPasswordMutation } from '@/services/auth/auth.service'

export const CreatePasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()

  const handleCreatePassword = async (data: CreatePasswordFormSchema) => {
    try {
      await resetPassword({ password: data.password, token: 'token' }).unwrap()
      console.log(data)
    } catch (e) {
      /* empty */
    }
  }

  return (
    <Page>
      <CreatePassword onSubmit={handleCreatePassword} />
    </Page>
  )
}
