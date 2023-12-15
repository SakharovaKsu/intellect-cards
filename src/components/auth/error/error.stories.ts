import { Error } from '@/components/auth/error/error'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Error,
  tags: ['autodocs'],
  title: 'Auth/Error',
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
