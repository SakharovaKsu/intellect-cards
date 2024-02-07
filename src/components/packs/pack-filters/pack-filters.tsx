import { ChangeEvent, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import ResponsiveButton from '@/components/packs/pack-filters/responsive-button-filter/responsive-button-filter'
import { HeadPack } from '@/components/ui/head-pack/head-pack'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DeleteIcon } from '@/icons'
import { maxCardsCountSelector, minCardsCountSelector } from '@/services/decks/decks.select'
import {
  TabValue,
  setCardsByAuthor,
  setCardsCount,
  setSearchQuery,
} from '@/services/decks/decks.slice'
import { useAppSelector } from '@/services/store'

import s from './pack-filters.module.scss'

const tabs = [
  {
    disabled: false,
    label: 'My Cards',
    value: 'myCards',
  },
  {
    disabled: false,
    label: 'All Cards',
    value: 'allCards',
  },
]

type Props = {
  searchQuery: string
  sliderLabel?: string
  switcherLabel?: string
}

export const PackFilters = memo(({ searchQuery, sliderLabel, switcherLabel }: Props) => {
  const dispatch = useDispatch()
  const maxCardsCount = useAppSelector(maxCardsCountSelector)
  const minCardsCount = useAppSelector(minCardsCountSelector)

  const onSetCardsByAuthor = useCallback(
    (tabValue: TabValue) => {
      dispatch(setCardsByAuthor({ tabValue }))
    },
    [dispatch]
  )

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchQuery({ value: event.target.value }))
    },
    [dispatch]
  )

  const handleCardsCountChange = useCallback(
    (value: number[]) => {
      dispatch(setCardsCount(value))
    },
    [dispatch]
  )

  const handlerClearFilters = useCallback(() => {
    dispatch(setCardsByAuthor({ tabValue: 'allCards' }))
    dispatch(setSearchQuery({ value: '' }))
    dispatch(setCardsCount([0, 10]))
  }, [dispatch])

  return (
    <div className={s.container}>
      <HeadPack buttonName={'Add New Pack'} title={'Decks list'} />

      <div className={s.filtersBody}>
        <TextField
          isModal={false}
          onChange={handleSearch}
          placeholder={'input search'}
          style={s.search}
          type={'search'}
          value={searchQuery}
        />
        <div className={s.containerButton}>
          <Typography variant={'body2'}>{switcherLabel}</Typography>
          <TabSwitcher onValueChange={onSetCardsByAuthor} tabs={tabs} />
        </div>
        <div className={s.containerSlider}>
          <Typography variant={'body2'}>{sliderLabel}</Typography>
          <Slider
            handleCardsCountChange={handleCardsCountChange}
            max={10}
            min={0}
            values={[minCardsCount, maxCardsCount]}
          />
        </div>
        <ResponsiveButton isFullWidth onClick={handlerClearFilters} variant={'secondary'}>
          <div className={s.centeredIcons}>
            <DeleteIcon size={15} />
            Clear Filters
          </div>
        </ResponsiveButton>
      </div>
    </div>
  )
})
