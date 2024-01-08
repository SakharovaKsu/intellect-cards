import { Meta, StoryObj } from '@storybook/react'

import { FormValues, SignUp } from './sign-up'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/Sign-Up',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

const onSubmitHandler = (data: FormValues) => {
  console.log(data)

  return Promise.resolve()
}

export const Default: Story = {
  args: {
    isSubmitting: false,
    onSubmit: onSubmitHandler,
  },
}
