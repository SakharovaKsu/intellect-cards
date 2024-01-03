import { Login, ResendVerificationEmail, SingUp, UserData } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<UserData, void>({
        query: () => `v1/auth/me`,
      }),
      login: builder.mutation<{ accessToken: string }, Login>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/login`,
          }
        },
      }),
      logout: builder.mutation<void, void>({
        query: () => {
          return {
            method: 'POST',
            url: `v1/auth/logout`,
          }
        },
      }),
      recoverPassword: builder.mutation<void, { email: string; html: string; subject: string }>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/recover-password`,
          }
        },
      }),
      resendVerificationEmail: builder.mutation<ResendVerificationEmail, void>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/resend-verification-email`,
          }
        },
      }),
      singUp: builder.mutation<UserData, SingUp>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/sing-up`,
          }
        },
      }),
      updateMe: builder.mutation<UserData, { avatar?: string; name: string }>({
        query: args => {
          return {
            body: args,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
      verifyEmail: builder.mutation<void, { code: string }>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/verify-email`,
          }
        },
      }),
    }
  },
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResendVerificationEmailMutation,
  useSingUpMutation,
  useUpdateMeMutation,
  useVerifyEmailMutation,
} = authService
