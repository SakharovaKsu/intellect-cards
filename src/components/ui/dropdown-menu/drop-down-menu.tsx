import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Content, Group, Root, Trigger } from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

export type DropDownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  img?: string
  user?: boolean
} & ComponentPropsWithoutRef<typeof Root>

export const DropDownMenu: FC<DropDownMenuProps> = ({ align = 'end', children, img, user }) => {
  return (
    <Root>
      <Group>
        <Trigger className={s.buttonAvatar}>
          {user && <img alt={'Фото пользователя.'} className={s.picture} src={img} />}
        </Trigger>
        <Content className={s.group}>{children}</Content>
      </Group>
    </Root>
  )
}
