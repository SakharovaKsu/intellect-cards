import { EditProfile } from '@/components/auth/edit-profile/edit-profile'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Auth/Edit-profile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    emailUser: 'j&johnson@gmail.com',
    nameUser: 'Ivan',
  },
}

export const Edit: Story = {
  args: {
    emailUser: 'j&johnson@gmail.com',
    nameUser: 'Ivan',
  },
}
