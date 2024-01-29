import { useDispatch } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/ui/layout/layout'
import Loader from '@/components/ui/loader/loader'
import { CheckEmailPage } from '@/pages/auth/check-email-page/check-email-page'
import { CreatePasswordPage } from '@/pages/auth/create-password-page/create-password-page'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password-page/forgot-password-page'
import LoginPage from '@/pages/auth/login-page/login-page'
import { Profile } from '@/pages/auth/profile/profile'
import { SignUpPage } from '@/pages/auth/sing-up-page/sign-up-page'
import { PacksListPage } from '@/pages/decks/packs-list-page'
import { useGetMeQuery } from '@/services/auth/auth.service'
import { setAuthorId } from '@/services/decks/decks.slice'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/register',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/forgot-password',
  },
  {
    element: <CheckEmailPage />,
    path: '/check-email',
  },
  {
    element: <CreatePasswordPage />,
    path: '/confirm-email/:token',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <PacksListPage />,
    path: '/',
  },
  {
    element: <Profile />,
    path: '/user-profile',
  },
]

const router = createBrowserRouter([
  {
    children: [
      ...publicRoutes,
      { children: privateRoutes, element: <PrivateRoutes /> },
      {
        element: <div style={{ fontSize: '100px' }}>error</div>,
        path: '*',
      },
    ],
    element: <Layout />,
  },
])

function PrivateRoutes() {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetMeQuery()

  if (data) {
    dispatch(setAuthorId({ authorId: data.id }))
  }

  if (isLoading) {
    return <Loader />
  }
  const isLoggedIn = !!data

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  const { isLoading } = useGetMeQuery()

  if (isLoading) {
    return <div>loading</div>
  }

  return <RouterProvider router={router} />
}
