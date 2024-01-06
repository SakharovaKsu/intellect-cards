 import {useState} from "react";
import s from './pack-table.module.scss'
 import {HeaderTable} from "@/feature/packs-list/pack-table/header-table";

type DataTypeRequest = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
}

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