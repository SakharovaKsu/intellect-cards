import { baseApi } from '@/services/base-api'
import { Card, CreateCardsArgs, GetCardsArgs } from '@/services/cards/cards.type'
import { CreateDeckArgs, Deck, GetDecksArgs, GetDesksResponse } from '@/services/decks/decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCards: builder.mutation<Card, CreateCardsArgs & { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      deleteDecks: builder.mutation<Omit<Deck, 'author'>, { id: string }>({
        query: id => {
          return {
            method: 'DELETE',
            url: `v1/decks/${id}`,
          }
        },
      }),
      getCards: builder.query<Omit<GetDesksResponse, 'maxCardsCount'>, GetCardsArgs>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params: params ?? {},
            url: `v1/decks/${params.id}/cards`,
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
      getLearnCards: builder.query<Card, { id: string; previousCardId: string }>({
        query: params => {
          return {
            url: `v1/decks/${params.id}/learn`,
          }
        },
      }),
      submitGrade: builder.mutation<void, { cardId: string; grade: number; id: string }>({
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `v1/decks/${id}/learn`,
          }
        },
      }),
      updateDecksById: builder.mutation<Deck, CreateDeckArgs & { id: string }>({
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDecksByIdQuery,
  useGetDecksQuery,
  useGetLearnCardsQuery,
  useSubmitGradeMutation,
  useUpdateDecksByIdMutation,
} = decksService
