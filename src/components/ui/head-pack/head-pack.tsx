import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/services/cards/cards.type'
import { clsx } from 'clsx'

import s from './head-pack.module.scss'

type Props = {
  authorId?: string
  buttonName: string
  cards?: Card[]
  cover?: string
  idCard?: string
  title?: string
}

export const HeadPack = memo(({ authorId, buttonName, cards, cover, idCard, title }: Props) => {
  const classNames = {
    container: clsx(s.container, cover ? s.containerImg : s.containerNotImg),
  }

  return (
    <div className={classNames.container}>
      <div className={s.containerTitle}>
        <div className={s.containerName}>
          <Typography variant={'h1'}>{title}</Typography>
          {cards?.find(card => authorId === card.userId) && (
            <Dropdown styles={s.containerDropdown} />
          )}
        </div>
        {cover && <img alt={'Deck picture.'} className={s.img} src={cover} />}
      </div>
      {idCard ? (
        <Link className={s.link} to={`/card/${idCard}`}>
          {buttonName}
        </Link>
      ) : (
        <Button variant={'primary'}>{buttonName}</Button>
      )}
    </div>
  )
})
