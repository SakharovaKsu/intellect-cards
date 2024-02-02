import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderTable } from '@/components/packs/pack-table/header-table'
import { DeleteIcon, EditIcon, PlayIcon } from '@/icons'
import { GetDesksResponse } from '@/services/decks/decks.types'

import s from './pack-table.module.scss'

export const columns: Column[] = [
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

export type PackTableProps = {
  decks?: GetDesksResponse
  maxCardsCount: number
  minCardsCount: number
  searchQuery: string
  tabValue: string
}

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table className={className} {...rest} ref={ref} />
  }
)
export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    return <tbody className={className} {...rest} ref={ref} />
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    return <tr className={className} {...rest} ref={ref} />
  }
)
export const TableDataCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    return <td className={className} {...rest} ref={ref} />
  }
)

export const TableHeader = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
  }
)
export const TableHeaderCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    return <th className={className} {...rest} ref={ref} />
  }
)

export const PackTable: FC<PackTableProps> = ({
  decks,
  maxCardsCount,
  minCardsCount,
  searchQuery,
  tabValue,
}) => {
  const [sort, setSort] = useState<Sort>(null)

  const filteredDecks = decks?.items
    ?.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(item => item.cardsCount >= minCardsCount || item.cardsCount >= maxCardsCount)

  const checkCorrectLength = (value: string) => {
    if (value.length >= 16) {
      return value.slice(0, 16) + '...'
    } else {
      return value
    }
  }

  const sortedDecks = filteredDecks?.sort((a, b) => {
    const aValue = a[sort?.key as keyof typeof a]
    const bValue = b[sort?.key as keyof typeof b]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sort?.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sort?.direction === 'asc' ? aValue - bValue : bValue - aValue
    }

    if (sort?.key === 'createdBy') {
      const aAuthorName = a.author.name.toLowerCase()
      const bAuthorName = b.author.name.toLowerCase()

      return sort?.direction === 'asc'
        ? aAuthorName.localeCompare(bAuthorName)
        : bAuthorName.localeCompare(aAuthorName)
    }

    return 0
  })

  return (
    <div className={s.container}>
      <Table className={s.table}>
        <HeaderTable columns={columns} onSort={setSort} sort={sort} />
        <TableBody>
          {sortedDecks?.map(item => (
            <TableRow key={item.id}>
              <TableDataCell className={`${s.tdc} ${s.unselectable} `}>
                <div className={s.tdcImg}>
                  {item.cover && (
                    <img alt={'pack image.'} className={s.packImage} src={item.cover} />
                  )}
                  {item.name}
                </div>
              </TableDataCell>
              <TableDataCell className={s.tdc}>{item.cardsCount}</TableDataCell>
              <TableDataCell className={s.tdc}>
                {new Date(item.updated).toLocaleDateString()}
              </TableDataCell>
              <TableDataCell className={s.tdc}>
                {checkCorrectLength(item.author.name)}
              </TableDataCell>
              <TableDataCell className={s.tdc}>
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
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
