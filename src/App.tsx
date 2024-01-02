import { Provider } from 'react-redux'

import { Layout } from '@/components/ui/layout/layout'
import { Router } from '@/routings'
import { store } from '@/services/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
