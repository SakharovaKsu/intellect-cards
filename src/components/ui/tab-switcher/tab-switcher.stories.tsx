import { Typography } from '@/components/ui/typography'
import { Meta } from '@storybook/react'

import { TabItemType, TabSwitcher } from './'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
const tabs: TabItemType[] = [
  {
    content: <Typography variant={'body1'}>Content1</Typography>,
    disabled: false,
    label: 'Switcher',
    value: 'tab1',
  },
  {
    content: <Typography variant={'body1'}>Content2</Typography>,
    disabled: false,
    label: 'Switcher',
    value: 'tab2',
  },
  {
    content: <Typography variant={'body1'}>Content3</Typography>,
    disabled: false,
    label: 'Switcher',
    value: 'tab3',
  },
  {
    content: <Typography variant={'body1'}>Content4</Typography>,
    disabled: false,
    label: 'Switcher',
    value: 'tab4',
  },
  {
    content: <Typography variant={'body1'}>Content6</Typography>,
    disabled: true,
    label: 'Switcher',
    value: 'tab6',
  },
]

export const Switchers = {
  args: {
    tabs,
  },
}
