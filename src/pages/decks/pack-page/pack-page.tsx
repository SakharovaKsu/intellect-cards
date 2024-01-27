import { Link } from 'react-router-dom'

import { PagePack } from '@/components/page-pack'
import { Page } from '@/components/ui/page/page'
import { Typography } from '@/components/ui/typography'
import { ArrowBackOutlineIcon } from '@/icons'

import s from './pack-page.module.scss'

export const PackPage = () => {
  return (
    <>
      <Typography as={Link} className={s.link} to={'/'}>
        <ArrowBackOutlineIcon />
        Back to Decks List
      </Typography>
      <Page>
        <PagePack />
      </Page>
    </>
  )
}
