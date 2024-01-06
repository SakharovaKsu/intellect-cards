import {Meta, StoryObj} from '@storybook/react'
import {columns} from "@/feature/packs-list/pack-table";
import {HeaderTable} from "@/feature/packs-list/pack-table/header-table/header-table";

const meta = {
  component: HeaderTable,
  tags: ['autodocs'],
  title: 'Feature/HeaderTable',
} satisfies Meta<typeof HeaderTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story =  {
args: {columns:columns, sort: null, onSort: () => {} }
}
