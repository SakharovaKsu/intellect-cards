import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './text-field'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
    placeholder: 'Placeholder',
  },
}
export const Error: Story = {
  args: {
    errorMessage: 'Error',
    label: 'Error',
    placeholder: 'Placeholder',
    type: 'text',
  },
}
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Placeholder',
    type: 'search',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    placeholder: 'Placeholder',
    type: 'text',
  },
}
