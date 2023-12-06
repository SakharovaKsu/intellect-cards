import { ReactNode } from 'react'

import { Content } from '@radix-ui/react-tabs'

type TabContentProps = {
  children: ReactNode
  value: string
}

export const TabContent = (props: TabContentProps) => {
  const { children, value } = props

  return <Content value={value}>{children}</Content>
}
