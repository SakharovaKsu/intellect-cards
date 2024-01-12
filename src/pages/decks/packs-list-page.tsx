import { PackFilters } from '@/components/packs/pack-filters'
import { PackTable } from '@/components/packs/pack-table'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const PacksListPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    // console.log(error)

    return <div>Error</div>
  }

  return (
    <Page>
      <PackFilters sliderLabel={'Number of cards'} switcherLabel={'Show packs cards'} />
      <PackTable decks={data} />
    </Page>
  )
}
