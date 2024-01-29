import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Router } from '@/routings'
import { store } from '@/services/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer autoClose={3000} position={'bottom-left'} theme={'dark'} />
    </Provider>
  )
}
