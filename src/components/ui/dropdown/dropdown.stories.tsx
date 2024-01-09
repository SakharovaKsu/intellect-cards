import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
  created: '2024-01-06',
  email: 'IvanMain@gmail.com',
  id: '1',
  isEmailVerified: false,
  name: 'Ivan',
  updated: '2024-01-06',
}

export const WithAvatar: Story = {
  args: {},
}

export const WithoutAvatar: Story = {
  args: {
    userData: user,
  },
}
