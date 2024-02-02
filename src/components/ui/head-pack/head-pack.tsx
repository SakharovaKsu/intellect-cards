import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './head-pack.module.scss'

type Props = {
  buttonName: string
  cover?: string
  title?: string
}

export const HeadPack = ({ buttonName, cover, title }: Props) => {
  const classNames = {
    container: clsx(s.container, cover ? s.containerImg : s.containerNotImg),
  }

  return (
    <div className={classNames.container}>
      <div className={s.containerTitle}>
        <Typography variant={'h1'}>{title}</Typography>
        {cover && <img alt={'Deck picture.'} className={s.img} src={cover} />}
      </div>
      <Button variant={'primary'}>{buttonName}</Button>
    </div>
  )
}
