import { RootState } from '@/services/store'

export const authorIdSelect = (state: RootState) => state.decks.authorId
export const tabValueSelector = (state: RootState) => state.decks.tabValue
export const searchQuerySelector = (state: RootState) => state.decks.searchByName
export const maxCardsCountSelector = (state: RootState) => state.decks.maxCardsCount
export const minCardsCountSelector = (state: RootState) => state.decks.minCardsCount
