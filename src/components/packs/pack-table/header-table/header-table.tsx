import { ComponentPropsWithoutRef, FC } from 'react'

import { Column, Sort, TableHeader, TableHeaderCell, TableRow } from '@/components/packs/pack-table'
import { ArrowMiniDownIcon, ArrowMiniUpIcon } from '@/icons'

import s from './header-table.module.scss'

export const HeaderTable: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort: Sort
    },
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    console.log(`${key} - this is key; ${sortable} - this is sortable`)

    if (sort?.key !== key) {
      return onSort && onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort && onSort(null)
    }

    return (
      onSort &&
      onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    )
  }

  return (
    <TableHeader {...restProps}>
      <TableRow>
        {columns.map(({ key, title }) => {
          return (
            <TableHeaderCell
              className={s.columnHeaderContainer}
              key={key}
              onClick={key !== '' ? handleSort(key) : undefined}
            >
              <div className={s.titleArrowContainer}>
                <div>{title}</div>
                {sort && sort.key === key && (
                  <div className={s.arrowCenteredBox}>
                    {sort.direction === 'asc' ? (
                      <ArrowMiniDownIcon size={16} />
                    ) : (
                      <ArrowMiniUpIcon size={16} />
                    )}
                  </div>
                )}
              </div>
            </TableHeaderCell>
          )
        })}
      </TableRow>
    </TableHeader>
  )
}
