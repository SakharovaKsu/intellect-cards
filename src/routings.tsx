import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from '@/pages/auth/login/login'
import { SignUpPage } from '@/pages/auth/sing-up-page/sign-up-page'
import { PacksListPage } from '@/pages/decks/packs-list-page'
import { useGetMeQuery } from '@/services/auth/auth.service'

const PrivateRoutes = () => {
  const { isError, isLoading } = useGetMeQuery()

  if (isLoading) {
    return <div>loading</div>
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const publicRoutes = [
  {
    element: <Login />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/register',
  },
]

const privateRoutes = [
  {
    element: <PacksListPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  const { isLoading } = useGetMeQuery()

  if (isLoading) {
    return <div>loading</div>
  }

  return <RouterProvider router={router} />
}
