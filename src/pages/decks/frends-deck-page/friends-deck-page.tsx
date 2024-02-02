import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { PackTableFriends } from '@/components/packs/pack-table-friends/pack-table-friends'
import { BreadCrumbs } from '@/components/ui/bread-crumbs'
import { HeadPack } from '@/components/ui/head-pack/head-pack'
import Loader from '@/components/ui/loader/loader'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { listPage } from '@/pages/decks'
import { searchQuerySelector } from '@/services/decks/decks.select'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks/decks.service'
import { setSearchQuery } from '@/services/decks/decks.slice'
import { useAppSelector } from '@/services/store'

import s from './friends-deck-page.module.scss'

export const FriendsDeckPage = () => {
  const [itemPerPage, setItemPerPage] = useState(10)
  const [currentPageUse, setCurrentPageUse] = useState(1)
  const { id } = useParams()
  const dispatch = useDispatch()
  const searchQuery = useAppSelector(searchQuerySelector)

  const { data: dataDeck, isLoading: dataDeckLoading } = useGetDeckByIdQuery({ id })
  const { data: dataCards } = useGetDeckCardsQuery({
    currentPage: currentPageUse,
    id: id ?? 'defaultId',
    itemsPerPage: itemPerPage,
  })

  // answer?: string
  // currentPage?: number
  // id: string
  // itemsPerPage?: number
  // orderBy?: string
  // question?: string

  if (dataDeckLoading) {
    return <Loader />
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery({ value: event.target.value }))
  }

  const itemsPerPage = (selectValue: string) => setItemPerPage(Number(selectValue))

  return (
    <div className={s.container}>
      <BreadCrumbs title={'Back to Decks List'} />
      <HeadPack buttonName={'Friend’s Deck'} cover={dataDeck?.cover || ''} title={dataDeck?.name} />
      <TextField
        isModal={false}
        onChange={handleSearch}
        placeholder={'input search'}
        type={'search'}
        value={searchQuery}
      />
      <PackTableFriends cards={dataCards?.items} />
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
