import { ReactNode } from 'react'

import { TabContent } from '@/components/ui/tab-switcher/tab-content/tab-content'
import { List, Root, Trigger } from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'
export type TabItemType = {
  content?: ReactNode
  disabled?: boolean
  label: string
  value: string
}
type TabSwitcherType = {
  tabs: TabItemType[]
}
export const TabSwitcher = (props: TabSwitcherType) => {
  const { tabs } = props

  return (
    <Root className={s.root}>
      <List aria-label={'tabs'} className={s.list}>
        {tabs.map(tab => (
          <Trigger className={s.trigger} disabled={tab.disabled} key={tab.value} value={tab.value}>
            {tab.label}
          </Trigger>
        ))}
      </List>
      {tabs.map(tab => (
        <TabContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabContent>
      ))}
    </Root>
  )
}
