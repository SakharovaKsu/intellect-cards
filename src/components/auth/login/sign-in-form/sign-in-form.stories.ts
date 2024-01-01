import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './sign-in-form'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Signed In',
    },
  },
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/Sign-In',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
