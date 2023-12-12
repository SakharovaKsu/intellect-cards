import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Content, Group, Root, Trigger } from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

export type DropDownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  img?: string
  user?: boolean
} & ComponentPropsWithoutRef<typeof Root>

export const DropDownMenu: FC<DropDownMenuProps> = ({ align, children, img, user }) => {
  return (
    <Root>
      <Group className={s.box}>
        <Trigger className={s.buttonAvatar}>
          {user && <img alt={'Фото пользователя.'} className={s.picture} src={img} />}
        </Trigger>
        <Content align={align} className={s.group} sideOffset={15}>
          {children}
        </Content>
      </Group>
    </Root>
  )
}
