import { Column } from '@/components/packs/pack-table'
import { HeaderTable } from '@/components/packs/pack-table/header-table'
import { Table } from '@/components/ui/table/tabl'
import { TableBody } from '@/components/ui/table/table-body/table-body'
import { TableDataCell } from '@/components/ui/table/table-body/table-row/table-data-cell/table-data-cell'
import { TableRow } from '@/components/ui/table/table-body/table-row/table-row'
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
}

export const PackTableFriends = ({ cards }: Props) => {
  return (
    <Table className={s.table}>
      <HeaderTable columns={columns} />
      <TableBody>
        {cards?.map(card => {
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
              <TableDataCell>{card.grade}</TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
