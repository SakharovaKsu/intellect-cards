import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'

import s from './sign-up-form.module.scss'

const passwordSchema = string()
  .min(3, 'Password must contain at least 3 character(s)')
  .max(30, 'Password must contain at most 30 character(s)')

const signUpSchema = z
  .object({
    confirmPassword: passwordSchema,
    email: string().trim().email('Invalid email'),
    password: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'The passwords do not match',
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof signUpSchema>

type Props = {
  isSubmitting: boolean
  onSubmit: (data: FormValues) => Promise<void>
}

export const SignUp: FC<Props> = ({ isSubmitting, onSubmit }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const navigate = useNavigate()

  const nahdlerSignInButton = () => {
    navigate('/login')
  }

  return (
    <Card className={s.container}>
      <Typography className={s.header} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />

        <TextField
          {...register('email')}
          disabled={isSubmitting}
          errorMessage={errors.email?.message}
          label={'Email'}
        />

        <TextField
          {...register('password')}
          disabled={isSubmitting}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
        />

        <TextField
          {...register('confirmPassword')}
          disabled={isSubmitting}
          errorMessage={errors.confirmPassword?.message}
          label={'Confirm password'}
          type={'password'}
        />
        <Button disabled={isSubmitting} style={{ marginTop: '33px' }} type={'submit'}>
          Submit
        </Button>
        <Typography as={'h4'} className={s.haveAccount} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography className={s.signUp} onClick={nahdlerSignInButton} variant={'link1'}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
