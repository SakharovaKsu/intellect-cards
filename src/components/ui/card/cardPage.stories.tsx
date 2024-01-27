import { Meta, StoryObj } from '@storybook/react'

import { CardPage } from './cardPage'

const meta: Meta<typeof CardPage> = {
  component: CardPage,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '',
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '552px',
      justifyContent: 'center',
      width: '420px',
    },
  },
}
