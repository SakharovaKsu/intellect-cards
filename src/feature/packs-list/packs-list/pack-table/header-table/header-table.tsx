import {ComponentPropsWithoutRef, FC} from "react";
import {Column, Sort} from "@/feature/packs-list/packs-list/pack-table/pack-table";
import {ArrowMiniDownIcon, ArrowMiniUpIcon} from "@/icons";


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

      {columns.map(({title, key}) => (
        <th
          style={{
            backgroundColor: 'var(--color-dark-500)',
            minWidth: '200px',
            height: '36px',
            paddingLeft: '24px',
            textAlign: 'start',
            userSelect: 'none'

          }}
          key={key}
          onClick={handleSort(key)}>
          <div  style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'}}>
            <div>{title}</div>
            {sort && sort.key === key && <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>{sort.direction === 'asc' ? <ArrowMiniDownIcon size={16}/> : <ArrowMiniUpIcon size={16}/>}</div>}
          </div>
        </th>
      ))}

    </tr>
    </thead>
  )
}