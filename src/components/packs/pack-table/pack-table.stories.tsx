import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { PackTable, PackTableProps } from '@/components/packs/pack-table/pack-table'
import { GetDesksResponse } from '@/services/decks/decks.types'
import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PackTable,
  tags: ['autodocs'],
  title: 'Feature/PackTable',
} satisfies Meta<typeof PackTable>

export default meta
type Story = StoryObj<typeof meta>

const a: GetDesksResponse = {
  items: [
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-31T13:21:46.776Z',
      id: 'cls1tgq3c022grr2uodmsbn0m',
      isPrivate: false,
      name: 'new Deck 1',
      shots: 1,
      updated: '2024-01-31T13:21:46.776Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: '50e1e98c-9768-42bf-a714-04c5e8c49242',
        name: 'snakiso',
      },
      cardsCount: 9,
      cover:
        'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/9d4d6ac2-bcee-4446-bf01-040a22574ce7-photo_2023-12-23_20-10-09.jpg',
      created: '2024-01-31T12:17:09.561Z',
      id: 'cls1r5mex01zwrr2uwjddq41z',
      isPrivate: false,
      name: 'Лучшие ребята!',
      shots: 1,
      updated: '2024-01-31T12:17:09.561Z',
      userId: '50e1e98c-9768-42bf-a714-04c5e8c49242',
    },
    {
      author: {
        id: '50e1e98c-9768-42bf-a714-04c5e8c49242',
        name: 'snakiso',
      },
      cardsCount: 1,
      cover:
        'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/bc29dd0f-6a25-4e90-8db1-a593db82892c-photo_2024-01-06_18-05-54.jpg',
      created: '2024-01-26T12:37:33.711Z',
      id: 'clrumoln204jcy42wm2n1sh03',
      isPrivate: false,
      name: 'В-вендетта ',
      shots: 1,
      updated: '2024-01-31T12:05:44.307Z',
      userId: '50e1e98c-9768-42bf-a714-04c5e8c49242',
    },
    {
      author: {
        id: 'ca8815d7-72ec-4e7b-8df7-e5a253e2d17b',
        name: 'Narssss',
      },
      cardsCount: 2,
      cover:
        'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/cf8fa6b7-61cf-41c9-a758-ba121d24b7c0-qqwwee.PNG',
      created: '2024-01-31T09:39:07.436Z',
      id: 'cls1lidyk01xqrr2un868bioc',
      isPrivate: false,
      name: '1223232',
      shots: 1,
      updated: '2024-01-31T09:39:07.436Z',
      userId: 'ca8815d7-72ec-4e7b-8df7-e5a253e2d17b',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-30T21:33:10.167Z',
      id: 'cls0vksyf01uprr2ur0bvdgmg',
      isPrivate: false,
      name: 'Cat',
      shots: 1,
      updated: '2024-01-30T21:33:10.167Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
  ],
  maxCardsCount: 61,
  pagination: {
    currentPage: 4,
    itemsPerPage: 5,
    totalItems: 2303,
    totalPages: 461,
  },
}

export const PackTableStory: Story = (args: PackTableProps) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <PackTable {...args} />
      </MemoryRouter>
    </Provider>
  )
}
PackTableStory.args = {
  decks: a,
  maxCardsCount: 500,
  minCardsCount: 10,
  searchQuery: 'search . . .',
  tabValue: 'allCards',
}
