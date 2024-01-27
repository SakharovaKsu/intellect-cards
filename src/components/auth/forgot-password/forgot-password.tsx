import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordFormSchema) => void
}
export type ForgotPasswordFormSchema = z.infer<typeof ForgotPasswordSchema>

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPasswordFormSchema>({ resolver: zodResolver(ForgotPasswordSchema) })

  return (
    <CardPage className={s.forgotContainer}>
      <Typography className={s.header} variant={'large'}>
        Forgot your password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <TextField
          {...register('email')}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <Typography as={'p'} className={s.info} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type={'submit'}>Send Instructions</Button>
        <Typography as={'p'} className={s.rememberPassword} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={s.trySignIn} to={'/login'} variant={'link1'}>
          Try logging in
        </Typography>
      </form>
    </CardPage>
  )
}
