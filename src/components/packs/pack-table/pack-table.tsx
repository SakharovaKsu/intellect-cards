import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderTable } from '@/components/packs/pack-table/header-table'
import { Table } from '@/components/ui/table/tabl'
import { TableBody } from '@/components/ui/table/table-body/table-body'
import { TableDataCell } from '@/components/ui/table/table-body/table-row/table-data-cell/table-data-cell'
import { TableRow } from '@/components/ui/table/table-body/table-row/table-row'
import { DeleteIcon, EditIcon, PlayIcon } from '@/icons'
import { GetDesksResponse } from '@/services/decks/decks.types'
import { sortItems } from '@/utilit/sort-items'

import s from './pack-table.module.scss'

export const columnsTableDecks: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    sortable: false,
    title: 'Created by',
  },
  {
    key: '',
    sortable: true,
    title: '',
  },
]

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

type Props = {
  authorId: string
  decks?: GetDesksResponse
  maxCardsCount: number
  minCardsCount: number
  searchQuery: string
  tabValue: string
}

export const PackTable = memo(
  ({ authorId, decks, maxCardsCount, minCardsCount, searchQuery, tabValue }: Props) => {
    const [sort, setSort] = useState<Sort>(null)

    const filteredDecks = decks?.items
      ?.filter(
        item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(item => item.cardsCount >= minCardsCount || item.cardsCount >= maxCardsCount)

    const checkCorrectLength = useCallback((value: string) => {
      if (value.length >= 16) {
        return value.slice(0, 16) + '...'
      } else {
        return value
      }
    }, [])

    const sortedDecks = filteredDecks?.sort((a, b) => sortItems(a, b, sort))

    return (
      <div className={s.container}>
        <Table>
          <HeaderTable columns={columnsTableDecks} onSort={setSort} sort={sort} />
          <TableBody>
            {sortedDecks?.map(item => {
              const packPath =
                item.author.id !== authorId ? `/friends-pack/${item.id}` : `/my-pack/${item.id}`

              return (
                <TableRow key={item.id}>
                  <TableDataCell>
                    <Link className={s.tdcImg} to={packPath}>
                      {item.cover && (
                        <img alt={'pack image.'} className={s.packImage} src={item.cover} />
                      )}
                      {item.name}
                    </Link>
                  </TableDataCell>
                  <TableDataCell>{item.cardsCount}</TableDataCell>
                  <TableDataCell>{new Date(item.updated).toLocaleDateString()}</TableDataCell>
                  <TableDataCell>{checkCorrectLength(item.author.name)}</TableDataCell>
                  <TableDataCell>
                    <div className={s.tbcIconContainer}>
                      <Link className={s.link} to={`/card/${item.id}`}>
                        <PlayIcon />
                      </Link>
                      {tabValue === 'myCards' && (
                        <Link className={s.link} to={''}>
                          <EditIcon />
                        </Link>
                      )}
                      {tabValue === 'myCards' && (
                        <Link className={s.link} to={''}>
                          <DeleteIcon />
                        </Link>
                      )}
                    </div>
                  </TableDataCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
)
