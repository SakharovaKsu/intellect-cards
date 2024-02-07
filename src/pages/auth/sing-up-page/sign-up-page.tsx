import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormValues, SignUp } from '@/components/auth/login/sign-up-form'
import { Page } from '@/components/ui/page/page'
import { useSingUpMutation } from '@/services/auth/auth.service'

export const SignUpPage = memo(() => {
  const [singUp] = useSingUpMutation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true)
      const { confirmPassword, ...requestData } = data

      await singUp(requestData)
      navigate('/')
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Page>
      <SignUp isSubmitting={isSubmitting} onSubmit={onSubmit} />
    </Page>
  )
})
