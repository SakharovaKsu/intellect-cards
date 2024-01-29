import {
  AuthResponse,
  LoginArgs,
  RecoverPasswordArgs,
  ResendVerificationEmailArgs,
  ResetPasswordArgs,
  SingUpArgs,
} from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<AuthResponse, void>({
        extraOptions: {
          maxRetries: 0,
        },
        providesTags: ['Me'],
        query: () => {
          return { method: 'GET', url: `v1/auth/me` }
        },
      }),

      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: `/v1/auth/login`,
          }
        },
      }),

      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        //go hard or gone
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            authService.util.updateQueryData('getMe', undefined, () => {
              return null
            })
          )

          try {
            await queryFulfilled
          } catch {
            // cancels getMe request data update
            patchResult.undo()
          }
        },
        query: () => {
          return { method: 'POST', url: `v1/auth/logout` }
        },
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        invalidatesTags: ['UserAuth'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/recover-password`,
          }
        },
      }),
      resendVerificationEmail: builder.mutation<void, ResendVerificationEmailArgs>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/resend-verification-email`,
          }
        },
      }),
      resetPassword: builder.mutation<void, ResetPasswordArgs>({
        invalidatesTags: ['UserAuth'],
        query: ({ token, ...args }) => {
          return {
            body: { ...args },
            method: 'POST',
            url: `/v1/auth/reset-password/${token}`,
          }
        },
      }),
      singUp: builder.mutation<AuthResponse, SingUpArgs>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `/v1/auth/sign-up`,
          }
        },
      }),
      updateMe: builder.mutation<AuthResponse, FormData>({
        invalidatesTags: ['Me'],
        query: body => {
          return {
            body,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
      verifyEmail: builder.mutation<
        void,
        {
          code: string
        }
      >({
        query: body => {
          return {
            body,
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
  useResetPasswordMutation,
  useSingUpMutation,
  useUpdateMeMutation,
  useVerifyEmailMutation,
} = authService
