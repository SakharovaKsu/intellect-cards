import { useState } from 'react'

import { Column, Sort } from '@/components/packs/pack-table'
import { HeaderTable } from '@/components/packs/pack-table/header-table'
import { Table } from '@/components/ui/table/tabl'
import { TableBody } from '@/components/ui/table/table-body/table-body'
import { TableDataCell } from '@/components/ui/table/table-body/table-row/table-data-cell/table-data-cell'
import { TableRow } from '@/components/ui/table/table-body/table-row/table-row'
import { StarOutlineIcon } from '@/icons'
import { StarIcon } from '@/icons/icon-components/star-icon'
import { Card } from '@/services/cards/cards.type'

import s from './pack-table-friends.module.scss'

const columns: Column[] = [
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
  cards?: Card[]
  searchQuery: string
}

export const PackTableFriends = ({ cards, searchQuery }: Props) => {
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

  const renderStars = (grade: number) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      stars.push(i < grade ? <StarIcon key={i} /> : <StarOutlineIcon key={i} />)
    }

    return stars
  }

  return (
    <Table className={s.table}>
      <HeaderTable columns={columns} onSort={setSort} sort={sort} />
      <TableBody>
        {sortedCards?.map(card => {
          return (
            <TableRow key={card.userId}>
              <TableDataCell className={s.tdcImg}>
                {card.questionImg && (
                  <img alt={'Question image.'} className={s.cardImg} src={card.questionImg} />
                )}
                <span>{card.question}</span>
              </TableDataCell>
              <TableDataCell className={s.tdcImg}>
                {card.answerImg && (
                  <img alt={'Answer image.'} className={s.cardImg} src={card.answerImg} />
                )}
                <span>{card.answer}</span>
              </TableDataCell>
              <TableDataCell>{new Date(card.updated).toLocaleDateString()}</TableDataCell>
              <TableDataCell>{renderStars(card.grade)}</TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
