import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { Logo } from '@/icons/icon-components/logo'
import { useGetMeQuery } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const Header = () => {
  const { data: userData } = useGetMeQuery()

  return (
    <header className={s.root}>
      <div className={s.headerContainer}>
        <Logo />
        {userData?.name ? (
          <div className={s.user}>
            <Typography as={'button'} variant={'subtitle1'}>
              {userData?.name}
            </Typography>
            <Dropdown align={'end'} userData={userData} />
          </div>
        ) : (
          <Button variant={'primary'}>Sign In</Button>
        )}
      </div>
    </header>
  )
}
