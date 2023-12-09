import { Select } from '@/components/ui/select/select'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: 'one', value: 'first' },
  { title: 'two', value: 'second' },
  { title: 'three', value: 'three' },
]

export const Default: Story = {
  args: {
    disabled: false,
    items: items,
    open: false,
    placeholder: items[0].title,
    variant: 'default',
  },
}
