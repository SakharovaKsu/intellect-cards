import { baseApi } from '@/services/base-api'
import { CreateDeckArgs, Deck, GetDecksArgs, GetDesksResponse } from '@/services/decks/decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      getDecks: builder.query<GetDesksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params: params ?? {},
            url: `v1/decks`,
          }
        },
      }),
      getDecksById: builder.query<Deck, { id: string }>({
        query: params => {
          return {
            url: `v1/decks/${params.id}`,
          }
        },
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDecksByIdQuery, useGetDecksQuery } = decksService
