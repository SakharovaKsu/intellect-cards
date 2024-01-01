import { FC } from 'react'

import userAvatar from '@/assets/userAvatar.png'
import { Button } from '@/components/ui/button'
import { Logo } from '@/icons/icon-components/logo'

import s from './header.module.scss'
type HeaderProps = {
  isAuth: boolean
}
export const Header: FC<HeaderProps> = props => {
  const { isAuth } = props

  return (
    <header className={s.root}>
      <div className={s.headerContainer}>
        <Logo />
        {isAuth ? (
          <div className={s.user}>
            <span>Ivan</span>
            <img alt={'User avatar'} src={userAvatar} />
          </div>
        ) : (
          <Button variant={'primary'}>Sign In</Button>
        )}
      </div>
    </header>
  )
}
