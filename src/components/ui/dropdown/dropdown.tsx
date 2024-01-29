import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { DropdownWithAvatar } from '@/components/ui/dropdown/dropdown-avatar'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdown-item'
import { EditIcon, LogOutIcon, PlayIcon, ProfileAvatarIcon, ThrashIcon } from '@/icons'
import { MoreOptionsIcon } from '@/icons/icon-components/more-options-icon'
import { useLogoutMutation } from '@/services/auth/auth.service'
import { AuthResponse } from '@/services/auth/auth.types'
import { Arrow, Content, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  userData?: AuthResponse
} & ComponentPropsWithoutRef<typeof Root>

export const Dropdown = forwardRef<ElementRef<typeof Content>, DropdownProps>(
  ({ userData }, ref) => {
    const classNames = {
      arrow: clsx(s.arrow),
      content: clsx(s.content),
      separator: clsx(s.separator),
      trigger: clsx(s.trigger),
    }

    const [open, setOpen] = useState(false)
    const [logout] = useLogoutMutation()
    const [navigateToLogin, setNavigateToLogin] = useState(false)
    const navigate = useNavigate()
    const userAvatar = userData?.avatar
      ? userData.avatar
      : 'https://ionicframework.com/docs/img/demos/avatar.svg'

    const onClickLogOut = async () => {
      try {
        await logout().unwrap()
        setNavigateToLogin(true)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    if (navigateToLogin) {
      return <Navigate to={'/login'} />
    }

    return (
      <Root defaultOpen onOpenChange={setOpen} open={open}>
        <Trigger asChild>
          {userData ? (
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
          <Content className={classNames.content} ref={ref}>
            <>
              {userData?.name ? (
                <>
                  <DropdownItem>
                    <DropdownWithAvatar
                      avatar={userAvatar ?? `https://ionicframework.com/docs/img/demos/avatar.svg`}
                      mail={userData.email}
                      name={userData.name}
                      onClick={() => {
                        navigate('/')
                      }}
                    />
                  </DropdownItem>
                  <DropdownItemWithIcon
                    icon={<ProfileAvatarIcon />}
                    label={'My Profile'}
                    onClick={() => {
                      navigate('/user-profile')
                    }}
                  />
                  <DropdownItemWithIcon
                    icon={<LogOutIcon />}
                    label={'Sign Out'}
                    onClick={onClickLogOut}
                  />
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
        )}
      </Root>
    )
  }
)
