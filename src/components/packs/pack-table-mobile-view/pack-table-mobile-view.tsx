import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Column } from '@/components/packs/pack-table'
import { Typography } from '@/components/ui/typography'
import { DeleteIcon, EditIcon, PlayIcon } from '@/icons'
import { GetDesksResponse } from '@/services/decks/decks.types'

import s from './pack-table-mobile-view.module.scss'

type HeaderTableProps = {
  authorId: string
  columns?: Column[]
  decks?: GetDesksResponse
  tabValue: string
}

export const PackTableMobileView: FC<HeaderTableProps> = ({
  authorId,
  columns,
  decks,
  tabValue,
}) => {
  return (
    <div className={s.cardContainer}>
      {decks?.items?.map(item => (
        <div className={s.dataColumn} key={item.id}>
          {columns?.map(({ key, title }) => (
            <div key={key}>
              {key === 'name' && (
                <div className={s.containerText}>
                  <Typography className={s.title} variant={'subtitle2'}>
                    {title}
                  </Typography>
                  <Link
                    className={s.linkName}
                    to={
                      item.author.id !== authorId
                        ? `/friends-pack/${item.id}`
                        : `/my-pack/${item.id}`
                    }
                  >
                    {item.name}
                  </Link>
                </div>
              )}
              {key === 'cardsCount' && (
                <div className={s.containerText}>
                  <Typography variant={'subtitle2'}>{title}</Typography>
                  <Typography variant={'body2'}>{item.cardsCount}</Typography>
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

              {key === 'createdBy' && (
                <div className={s.containerText}>
                  <Typography variant={'subtitle2'}>{title}</Typography>
                  <Typography variant={'body2'}>{item.author.name}</Typography>
                </div>
              )}

              {key === '' && (
                <div className={s.iconContainer}>
                  <Link className={s.link} to={`/card/${item.id}`}>
                    <PlayIcon />
                  </Link>
                  {tabValue === 'myCards' && (
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
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
