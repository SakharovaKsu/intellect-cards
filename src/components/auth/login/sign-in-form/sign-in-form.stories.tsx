import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './sign-in-form'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/Sign-In',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignInStory: Story = (args: any) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <SignInForm {...args} />
      </MemoryRouter>
    </Provider>
  )
}
SignInStory.args = {
  onSubmit: async (data: any) => {
    alert(`
    email: ${data.email},
    password: ${data.password},
    rememberMe: ${data.rememberMe}
    `)
  },
}
