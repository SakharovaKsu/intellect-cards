import { UserData } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<UserData, void>({
        query: () => `v1/auth/me`,
      }),
    }
  },
})

export const { useGetMeQuery } = authService
