import { Avatar } from '@/components/ui/avatar/avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    image: 'https://placehold.jp/3d4070/ffffff/150x150.png ',
    size: 'small',
  },
}
