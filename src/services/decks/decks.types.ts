import { Author } from '@/services/auth/auth.types'

export type GetDesksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  rating?: number
  shots: number
  updated: string
  userId: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type CreateDeckArgs = {
  isPrivate: boolean
  name: string
}

export type GetDeckByIdArgs = {
  cover?: string
  id?: string
  isPrivate?: boolean
  name?: string
}
