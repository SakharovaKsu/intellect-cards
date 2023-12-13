import { Pack } from '@/components/auth/pack/pack'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pack,
  tags: ['autodocs'],
  title: 'Auth/Pack',
} satisfies Meta<typeof Pack>

export default meta
type Story = StoryObj<typeof meta>

export const AddPack: Story = {
  args: {
    nameButton: 'Cancel',
    title: 'Add New Pack',
  },
}

export const EditPack: Story = {
  args: {
    nameButton: 'Add New Pac',
    title: 'Edit Pack',
  },
}

export const DeletePack: Story = {
  args: {
    deletePack: true,
    nameButton: 'Delete Pack',
    title: 'Delete Pack',
  },
}
