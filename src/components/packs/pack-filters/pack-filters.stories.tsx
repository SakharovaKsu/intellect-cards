import { PackFilters } from '@/components/packs/pack-filters/pack-filters'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PackFilters,
  tags: ['autodocs'],
  title: 'Feature/PackFilters',
} satisfies Meta<typeof PackFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sliderLabel: 'Number of cards',
    switcherLabel: 'Show packs cards',
  },
}
