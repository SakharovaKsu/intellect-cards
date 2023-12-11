import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {
    label: {
      control: { type: 'radio' },
      options: ['with label', 'without label'],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxWithLabel: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'with label',
  },
}
export const CheckboxWithoutLabel: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const UnControlled: Story = {
  args: {
    label: 'uncontrolled checkbox',
  },
}
