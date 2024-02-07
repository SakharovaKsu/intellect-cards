import { memo, useState } from 'react'
import { Link } from 'react-router-dom'

import { Column, Sort } from '@/components/packs/pack-table'
import { HeaderTable } from '@/components/packs/pack-table/header-table'
import { Table } from '@/components/ui/table/tabl'
import { TableBody } from '@/components/ui/table/table-body/table-body'
import { TableDataCell } from '@/components/ui/table/table-body/table-row/table-data-cell/table-data-cell'
import { TableRow } from '@/components/ui/table/table-body/table-row/table-row'
import { DeleteIcon, EditIcon, PlayIcon } from '@/icons'
import { Card } from '@/services/cards/cards.type'
import { renderStars } from '@/utilit/render-stars-grade'

import s from './my-deck-or-friends-table.module.scss'

export const columnsTableCards: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

type Props = {
  authorId?: string
  cards?: Card[]
  pageType: 'friends' | 'my'
  searchQuery: string
}

export const MyDeckOrFriendsTable = memo(({ authorId, cards, pageType, searchQuery }: Props) => {
  const [sort, setSort] = useState<Sort>(null)

  const filteredCards = cards?.filter(card =>
    card.question.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedCards = filteredCards?.sort((a, b) => {
    const aValue = a[sort?.key as keyof typeof a]
    const bValue = b[sort?.key as keyof typeof b]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sort?.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sort?.direction === 'asc' ? aValue - bValue : bValue - aValue
    }

    return 0
  })

  return (
    <Table className={s.table}>
      <HeaderTable columns={columnsTableCards} onSort={setSort} pageType={pageType} sort={sort} />
      <TableBody>
        {sortedCards?.map(card => {
          return (
            <TableRow key={card.userId}>
              <TableDataCell>
                <div className={s.tdcImg}>
                  {card.questionImg && (
                    <span className={s.cardImg}>
                      <img alt={'Question image.'} className={s.img} src={card.questionImg} />
                    </span>
                  )}
                  <span>{card.question}</span>
                </div>
              </TableDataCell>
              <TableDataCell>
                <div className={s.tdcImg}>
                  {card.answerImg && (
                    <img alt={'Answer image.'} className={s.cardImg} src={card.answerImg} />
                  )}
                  <span>{card.answer}</span>
                </div>
              </TableDataCell>
              <TableDataCell>{new Date(card.updated).toLocaleDateString()}</TableDataCell>
              <TableDataCell>
                <div className={s.grade}>{renderStars(card.grade)}</div>
              </TableDataCell>
              {authorId === card.userId ? (
                <TableDataCell>
                  <div className={s.tbcIconContainer}>
                    <Link className={s.link} to={`/card/${card.id}`}>
                      <PlayIcon />
                    </Link>
                    <Link className={s.link} to={''}>
                      <EditIcon />
                    </Link>
                    <Link className={s.link} to={''}>
                      <DeleteIcon />
                    </Link>
                  </div>
                </TableDataCell>
              ) : (
                ''
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
})
