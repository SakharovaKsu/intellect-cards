import { Slider } from '@/components/ui/slider/slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    maxValues: 10,
  },
}
