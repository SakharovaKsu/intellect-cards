import { FC, useState } from 'react'

import { HeaderTable } from '@/feature/packs-list/pack-table/header-table'
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

export const PackTable: FC<Props> = ({ decks }) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <div className={s.container}>
      <table className={s.table}>
        <HeaderTable columns={columns} onSort={setSort} sort={sort} />
        <tbody>
          {decks?.items?.map(item => (
            <tr key={item.id}>
              <td className={`${s.tdc} ${s.unselectable}`}>{item.name}</td>
              <td className={s.tdc}>{item.cardsCount}</td>
              <td className={s.tdc}>{new Date(item.updated).toLocaleDateString()}</td>
              <td className={s.tdc}>{item.author.name}</td>
              <td className={s.tdc}>some icons</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
