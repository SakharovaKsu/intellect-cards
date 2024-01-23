import { useState } from 'react'

import { PackFilters } from '@/components/packs/pack-filters'
import { PackTable } from '@/components/packs/pack-table'
import { Page } from '@/components/ui/page/page'
import { Pagination } from '@/components/ui/pagination'
import { ItemsType } from '@/components/ui/select'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const PacksListPage = () => {
  const [currentPageUse, setCurrentPageUse] = useState(1)
  const { data, error, isLoading } = useGetDecksQuery({ currentPage: currentPageUse })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    // console.log(error)

    return <div>Error</div>
  }

  const items: ItemsType[] = [
    { title: '5', value: '5' },
    { title: '10', value: '10' },
    { title: '25', value: '25' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]

  return (
    <Page>
      <PackFilters sliderLabel={'Number of cards'} switcherLabel={'Show packs cards'} />
      <PackTable decks={data} />
      <Pagination
        currentPage={data?.pagination.currentPage ?? 1}
        items={items}
        onPageChange={setCurrentPageUse}
        pageSize={data?.pagination.itemsPerPage ?? 10}
        totalCount={data?.pagination.totalPages ?? 10}
      />
    </Page>
  )
}
