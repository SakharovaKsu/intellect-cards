import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from '@/pages/auth/login/login'

const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const publicRoutes = [
  {
    element: <Login />,
    path: '/login',
  },
]

const privateRoutes = [
  {
    element: <div>Decks</div>,
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
  return <RouterProvider router={router} />
}
