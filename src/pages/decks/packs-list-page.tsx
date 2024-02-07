import { memo, useState } from 'react'
import MediaQuery from 'react-responsive'

import { PackFilters } from '@/components/packs/pack-filters'
import { PackTable } from '@/components/packs/pack-table'
import { PackTableMobileView } from '@/components/packs/pack-table-mobile-view/pack-table-mobile-view'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { Pagination } from '@/components/ui/pagination'
import { ItemsType } from '@/components/ui/select'
import {
  authorIdSelect,
  maxCardsCountSelector,
  minCardsCountSelector,
  searchQuerySelector,
  tabValueSelector,
} from '@/services/decks/decks.select'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import { useAppSelector } from '@/services/store'

export const listPage: ItemsType[] = [
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '15', value: '15' },
  { title: '20', value: '20' },
  { title: '25', value: '25' },
]

export const PacksListPage = memo(() => {
  const authorId = useAppSelector(authorIdSelect)
  const tabValue = useAppSelector(tabValueSelector)
  const searchQuery = useAppSelector(searchQuerySelector)
  const maxCardsCount = useAppSelector(maxCardsCountSelector)
  const minCardsCount = useAppSelector(minCardsCountSelector)

  const meId = tabValue === 'myCards' ? authorId : ''
  const [itemPerPage, setItemPerPage] = useState(10)
  const [currentPageUse, setCurrentPageUse] = useState(1)

  const { data, error, isLoading } = useGetDecksQuery({
    authorId: meId,
    currentPage: currentPageUse,
    itemsPerPage: itemPerPage,
    maxCardsCount: maxCardsCount,
    minCardsCount: minCardsCount,
    name: searchQuery,
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error</div>
  }

  const itemsPerPage = (selectValue: string) => setItemPerPage(Number(selectValue))

  return (
    <Page>
      <PackFilters
        searchQuery={searchQuery}
        sliderLabel={'Number of cards'}
        switcherLabel={'Show packs cards'}
      />
      <MediaQuery maxWidth={768}>
        <PackTableMobileView authorId={authorId} decks={data} tabValue={tabValue} />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <PackTable
          authorId={authorId}
          decks={data}
          maxCardsCount={maxCardsCount}
          minCardsCount={minCardsCount}
          searchQuery={searchQuery}
          tabValue={tabValue}
        />
        <Pagination
          currentPage={data?.pagination.currentPage ?? 1}
          items={listPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPageUse}
          pageSize={data?.pagination.itemsPerPage ?? 10}
          totalCount={data?.pagination.totalPages ?? 10}
        />
      </MediaQuery>
    </Page>
  )
})
