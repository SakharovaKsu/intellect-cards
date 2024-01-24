import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TabValue = 'allCards' | 'myCards'

const initialState = {
  addDeckName: '',
  authorId: '',
  currentPage: 1,
  editDeckName: '',
  itemsPerPage: 10,
  maxCardsCount: 10,
  minCardsCount: 0,
  myCardsPage: {
    currentPage: '1',
    itemsPerPage: '10',
  },
  orderBy: 'updated-desc',
  searchByName: '',
  tabValue: 'allCards',
}

export const decksSlice = createSlice({
  initialState: initialState,
  name: 'decks',
  reducers: {
    setAuthorId: (state, action: PayloadAction<{ authorId: string }>) => {
      state.authorId = action.payload.authorId
    },
    setCardsByAuthor: (state, action: PayloadAction<{ tabValue: TabValue }>) => {
      state.tabValue = action.payload.tabValue
    },
    setCardsCount: (state, action: PayloadAction<number[]>) => {
      state.minCardsCount = action.payload[0]
      state.maxCardsCount = action.payload[1]
    },
    setSearchQuery: (state, action: PayloadAction<{ value: string }>) => {
      state.searchByName = action.payload.value
    },
  },
})

export const { setAuthorId, setCardsByAuthor, setCardsCount, setSearchQuery } = decksSlice.actions
