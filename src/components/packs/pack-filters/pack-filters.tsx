import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { DeleteIcon } from '@/icons'
import { TabValue, setCardsByAuthor } from '@/services/decks/decks.slice'

import s from './pack-filters.module.scss'

type PropsType = {
  sliderLabel: string
  switcherLabel: string
}

export function PackFilters(props: PropsType) {
  const { sliderLabel, switcherLabel } = props

  const dispatch = useDispatch()

  const onSetCardsByAuthor = (tabValue: TabValue) => {
    dispatch(setCardsByAuthor({ tabValue }))
  }

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

  return (
    <div className={s.container}>
      <div className={s.filtersHead}>
        <Typography children={'Decks list'} variant={'h1'} />
        <Button children={'Add New Pack'} variant={'primary'} />
      </div>

      <div className={s.filtersBody}>
        <TextField isModal={false} placeholder={'input search'} type={'search'} />
        <div style={{ padding: '0 25px' }}>
          <Typography variant={'body2'}>{switcherLabel}</Typography>
          <TabSwitcher onValueChange={onSetCardsByAuthor} tabs={tabs} />
        </div>
        <div>
          <Typography variant={'body2'}>{sliderLabel}</Typography>
          <Slider maxValues={10} />
        </div>
        <Button style={{ marginLeft: '35px' }} variant={'secondary'}>
          <div className={s.centeredIcons}>
            <DeleteIcon size={15} />
            <div>Clear Filters</div>
          </div>
        </Button>
      </div>
    </div>
  )
}
