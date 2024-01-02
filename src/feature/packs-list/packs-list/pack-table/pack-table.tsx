import {useState} from "react";
import {HeaderTable} from "@/feature/packs-list/packs-list/pack-table/header-table/header-table";
import s from './pack-table.module.scss'

type DataTypeRequest = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
}

const columns: Column[] = [
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
  }
]


const data: DataTypeRequest[] = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  title: string
}

export const PackTable = () => {

  const [sort, setSort] = useState<Sort>(null)

  return (
    <div className={s.container}>
      <table className={s.table}>
        {/*<thead style={{width: '100%'}}>*/}
        {/*<tr>*/}
        {/*  <th*/}
        {/*    onClick={() => handleSort('name')}*/}
        {/*    style={{*/}
        {/*      backgroundColor: 'var(--color-dark-500)',*/}
        {/*      minWidth: '200px',*/}
        {/*      height: '36px',*/}
        {/*      paddingLeft: '24px',*/}
        {/*      textAlign: 'start'*/}
        {/*    }}>Name*/}
        {/*    {sort && sort.key === 'name' && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}*/}
        {/*  </th>*/}
        {/*  <th style={{*/}
        {/*    backgroundColor: 'var(--color-dark-500)',*/}
        {/*    minWidth: '200px',*/}
        {/*    height: '36px',*/}
        {/*    paddingLeft: '24px',*/}
        {/*    textAlign: 'start'*/}
        {/*  }}>Cards*/}
        {/*  </th>*/}
        {/*  <th style={{*/}
        {/*    backgroundColor: 'var(--color-dark-500)',*/}
        {/*    minWidth: '200px',*/}
        {/*    height: '36px',*/}
        {/*    paddingLeft: '24px',*/}
        {/*    textAlign: 'start',*/}
        {/*  }}>*/}
        {/*    <div onClick={() => setArrowPosition(!arrowPosition)}*/}
        {/*         style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'}}>*/}
        {/*      Last Updated*/}
        {/*      {*/}
        {/*        !arrowPosition*/}
        {/*          ? <ArrowMiniDownIcon style={{width: '12px'}}/>*/}
        {/*          : <ArrowMiniUpIcon style={{width: '12px'}}/>*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*  </th>*/}
        {/*  <th style={{*/}
        {/*    backgroundColor: 'var(--color-dark-500)',*/}
        {/*    minWidth: '200px',*/}
        {/*    height: '36px',*/}
        {/*    paddingLeft: '24px',*/}
        {/*    textAlign: 'start'*/}
        {/*  }}>Created by*/}
        {/*  </th>*/}
        {/*  <th style={{*/}
        {/*    backgroundColor: 'var(--color-dark-500)',*/}
        {/*    minWidth: '200px',*/}
        {/*    height: '36px',*/}
        {/*    paddingLeft: '24px',*/}
        {/*    textAlign: 'start'*/}
        {/*  }}></th>*/}
        {/*</tr>*/}
        {/*</thead>*/}

        <HeaderTable columns={columns} sort={sort} onSort={setSort}/>
        <tbody>
        {data.map(item => (
          <tr key={item.title}>
            <td className={`${s.tdc} ${s.unselectable}`}>{item.title}</td>
            <td className={s.tdc}>{item.cardsCount}</td>
            <td className={s.tdc}>{item.updated}</td>
            <td className={s.tdc}>{item.createdBy}</td>
            <td className={s.tdc}>some icons</td>
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  )
}