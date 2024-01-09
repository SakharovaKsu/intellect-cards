import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Page } from '@/components/ui/page/page'
import { Typography } from '@/components/ui/typography'
import { EmailIcon } from '@/icons/icon-components/email-icon'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  const navigate = useNavigate()
  const handleSingIn = () => navigate('/login')

  return (
    <Page>
      <Card className={s.checkContainer}>
        <Typography variant={'large'}>Check Email</Typography>
        <div className={s.icon}>
          <EmailIcon className={s.emailIcon} />
        </div>
        <Typography as={'p'} className={s.info} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button as={'a'} onClick={handleSingIn} type={'submit'}>
          Back to Sign In
        </Button>
      </Card>
    </Page>
  )
}
