import {Meta, StoryObj} from '@storybook/react'
import {PacksList} from "@/feature/packs-list/packs-list";

const meta = {
  component: PacksList,
  tags: ['autodocs'],
  title: 'Feature/PacksList',
} satisfies Meta<typeof PacksList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  },
}
