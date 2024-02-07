import { FC } from 'react'
import { Link } from 'react-router-dom'

import { columnsTableCards } from '@/components/packs/pack-table-friends/my-deck-or-friends-table'
import { Typography } from '@/components/ui/typography'
import { DeleteIcon, EditIcon, PlayIcon } from '@/icons'
import { Card } from '@/services/cards/cards.type'
import { renderStars } from '@/utilit/render-stars-grade'

import s from './my-deck-or-friends-table-mobile.module.scss'

type HeaderTableProps = {
  authorId: string
  cards?: Card[]
  pageType: 'friends' | 'my'
  searchQuery: string
}

export const PackTableMobileView: FC<HeaderTableProps> = ({ authorId, cards }) => {
  return (
    <div className={s.cardContainer}>
      {cards?.map(item => (
        <div className={s.dataColumn} key={item.id}>
          {columnsTableCards?.map(({ key, title }) => (
            <div key={key}>
              {key === 'question' && (
                <div className={s.containerText}>
                  <Typography className={s.title} variant={'subtitle2'}>
                    {title}
                  </Typography>
                  <Typography variant={'body2'}>{item.question}</Typography>
                </div>
              )}

              {key === 'answer' && (
                <div className={s.containerText}>
                  <Typography variant={'subtitle2'}>{title}</Typography>
                  <Typography variant={'body2'}>{item.answer}</Typography>
                </div>
              )}

              {key === 'updated' && (
                <div className={s.containerText}>
                  <Typography variant={'subtitle2'}>{title}</Typography>
                  <Typography variant={'body2'}>
                    {new Date(item.updated).toLocaleDateString()}
                  </Typography>
                </div>
              )}

              {key === 'grade' && (
                <div className={s.containerText}>
                  <Typography variant={'subtitle2'}>{title}</Typography>
                  <div className={s.grade}>{renderStars(item.grade)}</div>
                </div>
              )}

              <div className={s.iconContainer}>
                <Link className={s.link} to={`/card/${item.id}`}>
                  <PlayIcon />
                </Link>
                {authorId === item.userId && (
                  <>
                    <Link className={s.link} to={''}>
                      <EditIcon />
                    </Link>
                    <Link className={s.link} to={''}>
                      <DeleteIcon />
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
