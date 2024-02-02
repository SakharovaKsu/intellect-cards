import { Provider } from 'react-redux'

import { PackFilters, PackFiltersPropsType } from '@/components/packs/pack-filters/pack-filters'
import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PackFilters,
  tags: ['autodocs'],
  title: 'Feature/PackFilters',
} satisfies Meta<typeof PackFilters>

export default meta
type Story = StoryObj<typeof meta>

export const PackFiltersStory: Story = (args: PackFiltersPropsType) => {
  return (
    <Provider store={store}>
      <PackFilters {...args} />
    </Provider>
  )
}

PackFiltersStory.args = {
  searchQuery: 'search . . .',
  sliderLabel: 'Slider Label',
  switcherLabel: 'Switcher Label',
}
