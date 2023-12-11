import { StoryObj } from '@storybook/react'

import { ForgotPassword } from './forgot-password'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
}

export default meta
type Story = StoryObj<typeof meta>
export const ForgotPasswordStory: Story = {
  args: {},
}
