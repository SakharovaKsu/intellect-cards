import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './checkbox'

const meta = {
  argTypes: {
    label: {
      control: { type: 'radio' },
      options: ['with label', 'without label'],
    },
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

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
