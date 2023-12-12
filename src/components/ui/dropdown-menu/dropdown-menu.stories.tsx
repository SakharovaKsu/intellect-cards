import type { Meta, StoryObj } from '@storybook/react'

import avatar from '@/assets/userAvatar.png'
import { DropdownAvatar } from '@/components/ui/dropdown-menu/dropdown-avatar/dropdown-avatar'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown-menu/dropdown-item'
import { DeleteIcon } from '@/icons/delete-icon'
import { EditIcon } from '@/icons/edit-icon'
import { LearnIcon } from '@/icons/learn-icon'
import { LogOutIcon } from '@/icons/log-out-icon'
import { UserIcon } from '@/icons/user-icon'

import { DropDownMenu } from './drop-down-menu'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const MenuUser: Story = {
  args: {
    align: 'start',
    children: (
      <>
        <DropdownItem>
          <DropdownAvatar email={'j&johnson@gmail.com'} img={avatar} name={'Ivan'} />
        </DropdownItem>
        <DropdownItemWithIcon icon={<LogOutIcon />} label={'My Profile'} />
        <DropdownItemWithIcon icon={<UserIcon />} label={'Sign Out'} />
      </>
    ),
    img: avatar,
    user: true,
  },
}

export const Default: Story = {
  args: {
    align: 'start',
    children: (
      <>
        <DropdownItemWithIcon icon={<LearnIcon />} label={'Learn'} />
        <DropdownItemWithIcon icon={<EditIcon />} label={'Edit'} />
        <DropdownItemWithIcon icon={<DeleteIcon />} label={'Delete'} />
      </>
    ),
    user: false,
  },
}
