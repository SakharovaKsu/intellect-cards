import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from './create-password'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Auth/Create-Password',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordStory: Story = {
  args: {},
}
