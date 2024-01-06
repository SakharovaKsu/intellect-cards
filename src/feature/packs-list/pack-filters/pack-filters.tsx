import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {TextField} from "@/components/ui/text-field";
import {TabSwitcher} from "@/components/ui/tab-switcher";
import {Slider} from "@/components/ui/slider";
import {DeleteIcon} from "@/icons";
import s from './pack-filters.module.scss'

type PropsType = {
  switcherLabel: string
  sliderLabel: string
}

export function PackFilters(props: PropsType) {
  const {switcherLabel, sliderLabel} = props

  const tabs = [
    {
      disabled: false,
      label: 'My Cards',
      value: 'tab1',
    },
    {
      disabled: false,
      label: 'All Cards',
      value: 'tab2',
    },
  ]

  return (
    <div className={s.container}>

      <div className={s.filtersHead}>
        <Typography variant='h1' children={'Packs list'}/>
        <Button variant={'primary'} children={'Add New Pack'}/>
      </div>

      <div className={s.filtersBody}>
        <TextField type={'search'} placeholder={'input search'} isModal={false}/>
        <div  style={{padding:'0 25px'}}>
          <Typography variant={'body2'}>{switcherLabel}</Typography>
          <TabSwitcher tabs={tabs}/>
        </div>
        <div>
          <Typography variant={'body2'}>{sliderLabel}</Typography>
          <Slider maxValues={10}/>
        </div>
        <Button style={{marginLeft:'35px'}} variant={'secondary'}>
          <div className={s.centeredIcons}>
            <DeleteIcon size={15}/>
            <div>Clear Filters</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
