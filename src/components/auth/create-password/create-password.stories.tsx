import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/services/store'

import { CreatePassword, CreatePasswordFormSchema } from './create-password'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Auth/Create-Password',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordStory: Story = (args: any) => {
  return (
    <Provider store={store}>
      <CreatePassword {...args} />
    </Provider>
  )
}
CreatePasswordStory.args = {
  onSubmit: async (data: CreatePasswordFormSchema) => {
    alert(data.password)
  },
}
