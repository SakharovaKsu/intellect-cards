import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/services/store'
import { StoryObj } from '@storybook/react'

import { ForgotPassword, ForgotPasswordFormSchema } from './forgot-password'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/Forgot-Password',
}

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = (args: any) => (
  <Provider store={store}>
    <MemoryRouter>
      <ForgotPassword {...args} />
    </MemoryRouter>
  </Provider>
)

ForgotPasswordStory.args = {
  onSubmit: async (data: ForgotPasswordFormSchema) => {
    alert(data.email)
  },
}
