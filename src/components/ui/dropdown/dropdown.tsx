import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import { MoreOptionsIcon } from '@/icons/icon-components/more-options-icon'
import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof Root>
export const Dropdown = forwardRef<ElementRef<typeof Content>, DropdownProps>(
  ({ align, children, trigger }, ref) => {
    const classNames = {
      arrow: clsx(s.arrow),
      content: clsx(s.content),
      separator: clsx(s.separator),
      trigger: clsx(s.trigger),
    }

    const [open, setOpen] = useState(false)

    return (
      <Root defaultOpen onOpenChange={setOpen} open={open}>
        <Trigger asChild>{trigger ?? <span><MoreOptionsIcon /></span>}</Trigger>
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
                {children}
                <Arrow className={classNames.arrow} />
              </>
            </Content>
          </Portal>
        )}
      </Root>
    )
  }
)
