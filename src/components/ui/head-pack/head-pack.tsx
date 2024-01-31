import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './head-pack.module.scss'

type Props = {
  buttonName: string
  title: string
}

export const HeadPack = ({ buttonName, title }: Props) => {
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>{title}</Typography>
      <Button variant={'primary'}>{buttonName}</Button>
    </div>
  )
}
