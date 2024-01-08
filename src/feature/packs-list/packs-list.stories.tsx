import { Provider } from 'react-redux'

import { PacksListPage } from '@/pages/decks/packs-list-page'
import { GetDesksResponse } from '@/services/decks/decks.types'
import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PacksListPage,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
  title: 'Feature/PacksList',
} satisfies Meta<typeof PacksListPage>

export default meta
type Story = StoryObj<typeof meta>

const data: GetDesksResponse = {
  items: [
    {
      author: {
        id: '1',
        name: 'John Doe',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-08',
      id: '1',
      isPrivate: false,
      name: 'Project A',
      shots: 0,
      updated: '2024-01-08',
      userId: '1',
    },
    {
      author: {
        id: '2',
        name: 'Project B',
      },
      cardsCount: 1,
      cover: null,
      created: '2024-01-08',
      id: '2',
      isPrivate: false,
      name: 'Project B',
      shots: 0,
      updated: '2024-01-08',
      userId: '2',
    },
    {
      author: {
        id: '3',
        name: 'Project B',
      },
      cardsCount: 1,
      cover: null,
      created: '2024-01-08',
      id: '3',
      isPrivate: false,
      name: 'Project B',
      shots: 0,
      updated: '2024-01-08',
      userId: '3',
    },
    {
      author: {
        id: '4',
        name: 'Project B',
      },
      cardsCount: 1,
      cover: null,
      created: '2024-01-08',
      id: '4',
      isPrivate: false,
      name: 'Project B',
      shots: 0,
      updated: '2024-01-08',
      userId: '4',
    },
  ],
  maxCardsCount: 61,
  pagination: {
    currentPage: 211,
    itemsPerPage: 1,
    totalItems: 10,
    totalPages: 2106,
  },
}

export const Default: Story = {
  args: {
    decks: data,
  },
}
