import { PagePack } from '@/components/auth/page-pack/page-pack'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PagePack,
  tags: ['autodocs'],
  title: 'Auth/Page-Pack',
} satisfies Meta<typeof PagePack>

export default meta
type Story = StoryObj<typeof meta>

export const PagePackDefault: Story = {
  args: {
    numberOfAttempts: 10,
    text: 'This is how "This" works in JavaScript',
  },
}

export const PagePackOpenAnswer: Story = {
  args: {
    numberOfAttempts: 10,
    openAnswer: true,
    text: 'This is how "This" works in JavaScript',
  },
}
