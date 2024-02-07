import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/components/auth/login/sign-in-form'
import { Page } from '@/components/ui/page/page'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

export const LoginPage = () => {
  const [singIn] = useLoginMutation()
  const { data } = useGetMeQuery()

  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  const handleSingIn = useCallback(
    async (data: LoginArgs) => {
      try {
        await singIn(data).unwrap()
      } catch (e: any) {
        // console.error(e?.data.message)
      }
    },
    [singIn]
  )

  return (
    <Page>
      <SignInForm onSubmit={handleSingIn} />
    </Page>
  )
}
