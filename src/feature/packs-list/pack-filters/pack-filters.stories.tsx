import {Meta, StoryObj} from '@storybook/react'
import {PackFilters} from "@/feature/packs-list/pack-filters/pack-filters";

const meta = {
  component: PackFilters,
  tags: ['autodocs'],
  title: 'Feature/PackFilters',
} satisfies Meta<typeof PackFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sliderLabel:'Number of cards',
    switcherLabel:'Show packs cards',
  },
}
