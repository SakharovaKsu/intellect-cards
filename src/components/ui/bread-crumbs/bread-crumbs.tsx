import { Link } from 'react-router-dom'

import { Typography } from '@/components/ui/typography'
import { ArrowBackOutlineIcon } from '@/icons'

import s from './bread-crumbs.module.scss'

type Props = {
  title: string
}

export const BreadCrumbs = ({ title }: Props) => {
  return (
    <Typography as={Link} className={s.link} to={'/'}>
      <ArrowBackOutlineIcon />
      {title}
    </Typography>
  )
}
