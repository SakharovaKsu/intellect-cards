import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './create-password.module.scss'
type CreatePasswordProps = {
  onSubmit: (data: CreatePasswordFormSchema) => void
}

export type CreatePasswordFormSchema = z.infer<typeof CreatePasswordSchema>

const CreatePasswordSchema = z.object({
  password: z.string().min(3, { message: 'Password must contain at least 3 character(s)' }),
})

export const CreatePassword = ({ onSubmit }: CreatePasswordProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreatePasswordFormSchema>({ resolver: zodResolver(CreatePasswordSchema) })

  return (
    <Card className={s.container}>
      <Typography className={s.header} variant={'large'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
        />
        <Typography as={'p'} className={s.info} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type={'submit'}>Create New Password</Button>
      </form>
    </Card>
  )
}
