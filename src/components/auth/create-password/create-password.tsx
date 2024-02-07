import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './create-password.module.scss'

type Props = {
  onSubmit: (data: CreatePasswordFormSchema) => Promise<void>
}

export type CreatePasswordFormSchema = z.infer<typeof CreatePasswordSchema>

const CreatePasswordSchema = z.object({
  password: z.string().min(3, { message: 'Password must contain at least 3 character(s)' }),
})

export const CreatePassword = memo(({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreatePasswordFormSchema>({ resolver: zodResolver(CreatePasswordSchema) })

  const handleSubmitForm = useCallback(() => handleSubmit(onSubmit), [handleSubmit, onSubmit])

  return (
    <CardPage className={s.container}>
      <Typography className={s.header} variant={'large'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmitForm}>
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
    </CardPage>
  )
})
