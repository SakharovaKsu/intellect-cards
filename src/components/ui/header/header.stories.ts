import { Header } from '@/components/ui/header/header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DesktopWithButton: Story = {
  args: {
    isAuth: false,
  },
}

export const DesktopWithAvatar: Story = {
  args: {
    isAuth: true,
  },
}
