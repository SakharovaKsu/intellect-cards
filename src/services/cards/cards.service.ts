import { baseApi } from '@/services/base-api'
import { Card, CreateCardsArgs } from '@/services/cards/cards.type'
import { Deck } from '@/services/decks/decks.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      deleteCard: builder.mutation<void, { id: string }>({
        query: id => {
          return {
            body: {},
            method: 'DELETE',
            url: `v1/cards/${id}`,
          }
        },
      }),
      getCards: builder.query<Card, { id: string }>({
        query: id => {
          return {
            body: {},
            url: `v1/cards/${id}`,
          }
        },
      }),
      updateCard: builder.mutation<Deck, CreateCardsArgs & { id: string }>({
        query: args => {
          return {
            body: args,
            method: 'PATCH',
            url: `v1/cards/${args.id}`,
          }
        },
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardsQuery, useUpdateCardMutation } = cardsService
