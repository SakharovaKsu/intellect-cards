import { Error } from '@/components/error/error'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Error,
  tags: ['autodocs'],
  title: 'Сomponents/Error',
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
