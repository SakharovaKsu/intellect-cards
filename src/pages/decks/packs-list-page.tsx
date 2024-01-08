import { Page } from '@/components/ui/page/page'
import { PackFilters } from '@/feature/packs-list/pack-filters'
import { PackTable } from '@/feature/packs-list/pack-table'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const PacksListPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    console.log(error)

    return <div>Error</div>
  }

  return (
    <Page>
      <PackFilters sliderLabel={'Number of cards'} switcherLabel={'Show packs cards'} />
      <PackTable decks={data} />
    </Page>
  )
}
