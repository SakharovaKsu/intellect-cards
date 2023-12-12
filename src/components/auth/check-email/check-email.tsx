import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { EmailIcon } from '@/icons/icon-components/email-icon'

import s from './check-email.module.scss'
export const CheckEmail = () => {
  return (
    <Card className={s.checkContainer}>
      <Typography variant={'large'}>Check Email</Typography>
      <div className={s.icon}>
        <EmailIcon className={s.emailIcon} />
      </div>
      <Typography as={'p'} className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button type={'submit'}>Back to Sign In</Button>
    </Card>
  )
}
