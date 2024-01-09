import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { DropdownWithAvatar } from '@/components/ui/dropdown/dropdown-avatar'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdown-item'
import { EditIcon, LogOutIcon, PlayIcon, ProfileAvatarIcon, ThrashIcon } from '@/icons'
import { MoreOptionsIcon } from '@/icons/icon-components/more-options-icon'
import { User } from '@/services/auth/auth.types'
import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  userData?: User
} & ComponentPropsWithoutRef<typeof Root>

export const Dropdown = forwardRef<ElementRef<typeof Content>, DropdownProps>(
  ({ align, userData }, ref) => {
    const classNames = {
      arrow: clsx(s.arrow),
      content: clsx(s.content),
      separator: clsx(s.separator),
      trigger: clsx(s.trigger),
    }

    const [open, setOpen] = useState(false)

    const userAvatar = userData?.avatar
      ? userData?.avatar
      : 'https://ionicframework.com/docs/img/demos/avatar.svg'

    return (
      <Root defaultOpen onOpenChange={setOpen} open={open}>
        <Trigger asChild>
          {userData?.name ? (
            <span>
              <Avatar image={userAvatar} />
            </span>
          ) : (
            <span>
              <MoreOptionsIcon />
            </span>
          )}
        </Trigger>
        {open && (
          <Portal forceMount>
            <Content
              align={align}
              asChild
              className={classNames.content}
              forceMount
              ref={ref}
              sideOffset={6}
            >
              <>
                {userData?.name ? (
                  <>
                    <DropdownItem>
                      <DropdownWithAvatar
                        avatar={'https://ionicframework.com/docs/img/demos/avatar.svg'}
                        mail={userData.email}
                        name={userData.name}
                      />
                    </DropdownItem>
                    <DropdownItemWithIcon icon={<ProfileAvatarIcon />} label={'My Profile'} />
                    <DropdownItemWithIcon icon={<LogOutIcon />} label={'Sign Out'} />
                  </>
                ) : (
                  <>
                    <DropdownItemWithIcon icon={<PlayIcon />} label={'Learn'} />
                    <DropdownItemWithIcon icon={<EditIcon />} label={'Edit'} />
                    <DropdownItemWithIcon icon={<ThrashIcon />} label={'Delete'} />
                  </>
                )}
                <Arrow className={classNames.arrow} />
              </>
            </Content>
          </Portal>
        )}
      </Root>
    )
  }
)
