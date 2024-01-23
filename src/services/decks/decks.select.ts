import { RootState } from '@/services/store'

export const authorIdSelect = (state: RootState) => state.decks.authorId
export const tabValueSelector = (state: RootState) => state.decks.tabValue
