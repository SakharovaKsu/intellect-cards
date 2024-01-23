import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef, useState } from 'react'

import { HeaderTable } from '@/components/packs/pack-table/header-table'
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
    title: 'Created by',
  },
  {
    key: '',
    title: '',
  },
]

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  title: string
}

type Props = {
  decks?: GetDesksResponse
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

export const PackTable: FC<Props> = ({ decks }) => {
  const [sort, setSort] = useState<Sort>(null)

  const checkCorrectLength = (value: string) => {
    if (value.length >= 16) {
      return value.slice(0, 16) + '...'
    } else {
      return value
    }
  }

  return (
    <div className={s.container}>
      <Table className={s.table}>
        <HeaderTable columns={columns} onSort={setSort} sort={sort} />
        <TableBody>
          {decks?.items?.map(item => (
            <TableRow key={item.id}>
              <TableDataCell className={`${s.tdc} ${s.unselectable}`}>
                {checkCorrectLength(item.name)}
              </TableDataCell>
              <TableDataCell className={s.tdc}>{item.cardsCount}</TableDataCell>
              <TableDataCell className={s.tdc}>
                {new Date(item.updated).toLocaleDateString()}
              </TableDataCell>
              <TableDataCell className={s.tdc}>
                {checkCorrectLength(item.author.name)}
              </TableDataCell>
              <TableDataCell className={s.tdc}>some icons</TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
