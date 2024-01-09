import { columns } from '@/components/packs/pack-table'
import { HeaderTable } from '@/components/packs/pack-table/header-table/header-table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: HeaderTable,
  tags: ['autodocs'],
  title: 'Feature/HeaderTable',
} satisfies Meta<typeof HeaderTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { columns: columns, onSort: () => {}, sort: null },
}
