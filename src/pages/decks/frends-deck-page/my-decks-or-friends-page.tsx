import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MyDeckOrFriendsTable } from '@/components/packs/pack-table-friends/my-deck-or-friends-table'
import { BreadCrumbs } from '@/components/ui/bread-crumbs'
import { HeadPack } from '@/components/ui/head-pack/head-pack'
import Loader from '@/components/ui/loader/loader'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { listPage } from '@/pages/decks'
import { authorIdSelect, orderBySelector, searchQuerySelector } from '@/services/decks/decks.select'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks/decks.service'
import { setSearchQuery } from '@/services/decks/decks.slice'
import { useAppSelector } from '@/services/store'

import s from './my-decks-or-friends-page.module.scss'

export const MyDecksOrFriendsPage = () => {
  const [itemPerPage, setItemPerPage] = useState(10)
  const [currentPageUse, setCurrentPageUse] = useState(1)

  const orderBy = useAppSelector(orderBySelector)
  const authorId = useSelector(authorIdSelect)

  const { id } = useParams()
  const dispatch = useDispatch()
  const searchQuery = useAppSelector(searchQuerySelector)

  const { data: dataDeck, isLoading: dataDeckLoading } = useGetDeckByIdQuery({ id })
  const { data: dataCards, isLoading: dataCardsLoading } = useGetDeckCardsQuery({
    currentPage: currentPageUse,
    id: id ?? 'defaultId',
    itemsPerPage: itemPerPage,
    orderBy: orderBy,
    question: searchQuery,
  })

  if (dataDeckLoading || dataCardsLoading) {
    return <Loader />
  }

  const titleButton = authorId === id ? 'Add New Card' : 'Learn to Deck'

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery({ value: event.target.value }))
  }

  const itemsPerPage = (selectValue: string) => setItemPerPage(Number(selectValue))

  return (
    <div className={s.container}>
      <BreadCrumbs title={'Back to Decks List'} />
      <HeadPack
        authorId={authorId}
        buttonName={titleButton}
        cards={dataCards?.items}
        cover={dataDeck?.cover || ''}
        idCard={dataDeck?.id}
        title={dataDeck?.name}
      />
      <TextField
        isModal={false}
        onChange={handleSearch}
        placeholder={'input search'}
        type={'search'}
        value={searchQuery}
      />
      <MyDeckOrFriendsTable
        authorId={authorId}
        cards={dataCards?.items}
        searchQuery={searchQuery}
      />
      <Pagination
        currentPage={dataCards?.pagination.currentPage ?? 1}
        items={listPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPageUse}
        pageSize={dataCards?.pagination.itemsPerPage ?? 10}
        totalCount={dataCards?.pagination.totalPages ?? 10}
      />
    </div>
  )
}
