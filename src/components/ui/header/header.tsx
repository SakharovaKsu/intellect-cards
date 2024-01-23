import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { Logo } from '@/icons/icon-components/logo'
import { useGetMeQuery } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const Header = () => {
  const { data } = useGetMeQuery()

  return (
    <header className={s.root}>
      <div className={s.headerContainer}>
        <Logo />
        {data ? (
          <div className={s.user}>
            <Typography as={'button'} variant={'subtitle1'}>
              {data?.name}
            </Typography>
            <Dropdown align={'end'} userData={data} />
          </div>
        ) : (
          <Button variant={'primary'}>Sign In</Button>
        )}
      </div>
    </header>
  )
}
