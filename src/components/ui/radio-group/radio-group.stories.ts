import { RadioGroup } from '@/components/ui/radio-group/radio-group'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupFourItems: Story = {
  args: {
    items: [
      { disabled: false, label: 'Label - 1', value: '1' },
      { disabled: true, label: 'Label - 2', value: '2' },
      { disabled: false, label: 'Label - 3', value: '3' },
      { disabled: false, label: 'Label - 4', value: '4' },
    ],
  },
}
