import { useDispatch } from 'react-redux'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Loader from '@/components/ui/loader/loader'
import { CheckEmailPage } from '@/pages/auth/check-email-page/check-email-page'
import { CreatePasswordPage } from '@/pages/auth/create-password-page/create-password-page'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password-page/forgot-password-page'
import LoginPage from '@/pages/auth/login-page/login-page'
import { SignUpPage } from '@/pages/auth/sing-up-page/sign-up-page'
import { PacksListPage } from '@/pages/decks/packs-list-page'
import { useGetMeQuery } from '@/services/auth/auth.service'
import { setAuthorId } from '@/services/decks/decks.slice'

const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetMeQuery()

  if (data) {
    dispatch(setAuthorId({ authorId: data.id }))
  }

  if (isLoading) {
    return <Loader />
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const publicRoutes = [
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
    return <Loader />
  }

  return <RouterProvider router={router} />
}
