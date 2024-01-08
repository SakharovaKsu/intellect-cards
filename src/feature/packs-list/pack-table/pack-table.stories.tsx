import { PackTable } from '@/feature/packs-list/pack-table/pack-table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PackTable,
  tags: ['autodocs'],
  title: 'Feature/PackTable',
} satisfies Meta<typeof PackTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
