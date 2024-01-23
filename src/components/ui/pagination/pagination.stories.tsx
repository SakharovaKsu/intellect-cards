import { Pagination } from '@/components/ui/pagination/pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '40', value: '40' },
  { title: '50', value: '50' },
]

export const Default: Story = {
  args: { currentPage: 1, items, pageSize: 10, totalCount: 94 },
}
