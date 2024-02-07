import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { EmailIcon } from '@/icons/icon-components/email-icon'

import s from './check-email.module.scss'

type Props = {
  email?: string
}

export const CheckEmail = memo(({ email }: Props) => {
  return (
    <CardPage className={s.checkContainer}>
      <Typography variant={'large'}>Check Email</Typography>
      <div className={s.icon}>
        <EmailIcon className={s.emailIcon} />
      </div>
      <Typography as={'p'} className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to
        {email ? ` ${email}` : 'example@mail.com'}
      </Typography>
      <Button as={Link} to={'/login'} type={'submit'}>
        Back to Sign In
      </Button>
    </CardPage>
  )
})
