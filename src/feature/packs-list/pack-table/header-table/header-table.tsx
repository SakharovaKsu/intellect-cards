import {ComponentPropsWithoutRef, FC} from "react";
import {ArrowMiniDownIcon, ArrowMiniUpIcon} from "@/icons";

import s from "./header-table.module.scss"
import {Column, Sort} from "@/feature/packs-list/pack-table";

export const HeaderTable: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    sort: Sort
    onSort?: (sort: Sort) => void
  },
    'children'
  >
> = ({columns, sort, onSort, ...restProps}) => {

  const handleSort = (key: string, sortable?: boolean) => () => {
    console.log(`${key} - this is key; ${sortable} - this is sortable`)

    if (sort?.key !== key) return onSort && onSort({key, direction: 'asc'})

    if (sort.direction === 'desc') return onSort && onSort(null)

    return onSort && onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }


  return (
    <thead {...restProps}>
    <tr>

      {columns.map(({title, key}) => {
          return (
            <th
              className={s.columnHeaderContainer}
              key={key}
              onClick={ key !== '' ? handleSort(key) : undefined}>
              <div className={s.titleArrowContainer}>
                <div>{title}</div>
                {sort && sort.key === key &&
                    <div className={s.arrowCenteredBox}>
                      {sort.direction === 'asc' ?
                        <ArrowMiniDownIcon size={16}/> : <ArrowMiniUpIcon size={16}/>}</div>}
              </div>
            </th>
          )
        }
      )}

    </tr>
    </thead>
  )
}