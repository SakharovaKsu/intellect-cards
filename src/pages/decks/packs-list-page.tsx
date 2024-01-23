import { PackFilters } from '@/components/packs/pack-filters'
import { PackTable } from '@/components/packs/pack-table'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { authorIdSelect, tabValueSelector } from '@/services/decks/decks.select'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import { useAppSelector } from '@/services/store'

export const PacksListPage = () => {
  const authorId = useAppSelector(authorIdSelect)
  const tabValue = useAppSelector(tabValueSelector)

  const meId = tabValue === 'myCards' ? { authorId } : { authorId: '' }

  const { data, error, isLoading } = useGetDecksQuery(meId)

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Page>
      <PackFilters sliderLabel={'Number of cards'} switcherLabel={'Show packs cards'} />
      <PackTable decks={data} />
    </Page>
  )
}
