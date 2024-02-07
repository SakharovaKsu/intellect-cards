import { ReactNode, memo } from 'react'

import { Content } from '@radix-ui/react-tabs'

type Props = {
  children: ReactNode
  value: string
}

export const TabContent = memo(({ children, value }: Props) => {
  return (
    <Content style={{ whiteSpace: 'nowrap' }} value={value}>
      {children}
    </Content>
  )
})
