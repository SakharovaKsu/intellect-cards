import { PagePack } from '@/components/page-pack'
import { BreadCrumbs } from '@/components/ui/bread-crumbs'
import { Page } from '@/components/ui/page/page'

export const PackPage = () => {
  return (
    <>
      <BreadCrumbs title={'Back to Decks List'} />
      <Page>
        <PagePack />
      </Page>
    </>
  )
}
