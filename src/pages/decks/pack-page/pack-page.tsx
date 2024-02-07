import { memo } from 'react'

import { PagePack } from '@/components/page-pack'
import { BreadCrumbs } from '@/components/ui/bread-crumbs'
import { Page } from '@/components/ui/page/page'

import s from './pack-page.module.scss'

export const PackPage = memo(() => {
  return (
    <div className={s.container}>
      <BreadCrumbs title={'Back to Decks List'} />
      <Page>
        <PagePack />
      </Page>
    </div>
  )
})
