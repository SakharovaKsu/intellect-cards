import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
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

type PropsType = {
  searchQuery: string
  sliderLabel: string
  switcherLabel: string
}

export function PackFilters(props: PropsType) {
  const { searchQuery, sliderLabel, switcherLabel } = props

  const dispatch = useDispatch()
  const maxCardsCount = useAppSelector(maxCardsCountSelector)
  const minCardsCount = useAppSelector(minCardsCountSelector)

  const onSetCardsByAuthor = (tabValue: TabValue) => {
    dispatch(setCardsByAuthor({ tabValue }))
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery({ value: event.target.value }))
  }

  const handleCardsCountChange = (value: number[]) => {
    dispatch(setCardsCount(value))
  }

  const handlerClearFilters = () => {
    dispatch(setCardsByAuthor({ tabValue: 'allCards' }))
    dispatch(setSearchQuery({ value: '' }))
    dispatch(setCardsCount([0, 10]))
  }

  return (
    <div className={s.container}>
      <div className={s.filtersHead}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button variant={'primary'}>Add New Pack</Button>
      </div>

      <div className={s.filtersBody}>
        <TextField
          isModal={false}
          onChange={handleSearch}
          placeholder={'input search'}
          type={'search'}
          value={searchQuery}
        />
        <div style={{ padding: '0 25px' }}>
          <Typography variant={'body2'}>{switcherLabel}</Typography>
          <TabSwitcher onValueChange={onSetCardsByAuthor} tabs={tabs} />
        </div>
        <div>
          <Typography variant={'body2'}>{sliderLabel}</Typography>
          <Slider
            handleCardsCountChange={handleCardsCountChange}
            max={10}
            min={0}
            values={[minCardsCount, maxCardsCount]}
          />
        </div>
        <Button onClick={handlerClearFilters} style={{ marginLeft: '35px' }} variant={'secondary'}>
          <div className={s.centeredIcons}>
            <DeleteIcon size={15} />
            Clear Filters
          </div>
        </Button>
      </div>
    </div>
  )
}
