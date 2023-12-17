import { PacksList } from '@/components/auth/pack-list/packs-list'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PacksList,
  tags: ['autodocs'],
  title: 'Auth/Pack-List',
} satisfies Meta<typeof PacksList>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: 'Text', value: 'first' },
  { title: 'Text', value: 'second' },
  { title: 'Text', value: 'three' },
]

export const AddPack: Story = {
  args: {
    isPack: true,
    nameButton: 'Add New Pack',
    title: 'Add New Pack',
  },
}

export const AddPackWithPicture: Story = {
  args: {
    img: true,
    isPack: true,
    nameButton: 'Add New Pack',
    title: 'Add New Pack',
  },
}

export const EditPack: Story = {
  args: {
    isPack: true,
    nameButton: 'Save Changes',
    title: 'Edit Pack',
  },
}

export const DeletePack: Story = {
  args: {
    deletePack: true,
    isPack: true,
    nameButton: 'Delete Pack',
    title: 'Delete Pack',
  },
}

export const AddCard: Story = {
  args: {
    img: false,
    items: items,
    nameButton: 'Add New Card',
    title: 'Add New Card',
  },
}

export const AddCardWithPicture: Story = {
  args: {
    img: true,
    items: items,
    nameButton: 'Add New Card',
    title: 'Add New Card',
  },
}

export const EditCard: Story = {
  args: {
    items: items,
    nameButton: 'Edit Card',
    title: 'Save Changes',
  },
}

export const DeleteCard: Story = {
  args: {
    deletePack: true,
    nameButton: 'Delete Card',
    title: 'Delete Card',
  },
}
