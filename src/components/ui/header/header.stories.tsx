import { Provider } from 'react-redux'

import { Header } from '@/components/ui/header/header'
import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DesktopHeader: Story = {
  args: {},
}
