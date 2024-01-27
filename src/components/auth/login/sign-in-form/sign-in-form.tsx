import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

type SignInFormProps = {
  disabled?: boolean
  onSubmit: (data: SignInFormSchema) => void
}
export type SignInFormSchema = z.infer<typeof signInSchema>
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})

export const SignInForm = ({ disabled, onSubmit }: SignInFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignInFormSchema>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  return (
    <CardPage className={s.container}>
      <Typography className={s.header} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
        />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography
          as={Link}
          className={s.forgotPassword}
          to={'/forgot-password'}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button disabled={disabled} type={'submit'}>
          Sign In
        </Button>
        <Typography as={'h4'} className={s.haveAccount} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <Typography as={Link} className={s.signUp} to={'/register'} variant={'link1'}>
          Sign Up
        </Typography>
      </form>
    </CardPage>
  )
}
