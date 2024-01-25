import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  handleCardsCountChange: (value: number[]) => void
  max: number
  min: number
  values: number[]
}

export const Slider = (props: Props) => {
  const { handleCardsCountChange, max, min, values } = props

  const onValueChangeHandler = (e: number[]) => {
    handleCardsCountChange(e)
  }

  return (
    <div className={s.container} style={{ display: 'flex' }}>
      <input
        className={s.sliderIndicator}
        placeholder={''}
        readOnly
        tabIndex={-1}
        value={values[0]}
      />
      <form>
        <Root
          className={s.SliderRoot}
          defaultValue={values}
          max={max}
          min={min}
          minStepsBetweenThumbs={0}
          onValueChange={onValueChangeHandler}
          step={1}
          value={values}
        >
          <Track className={s.SliderTrack}>
            <Range className={s.SliderRange} />
          </Track>
          <Thumb aria-label={'Volume'} className={s.SliderThumb} tabIndex={1} />
          <Thumb aria-label={'Volume'} className={s.SliderThumb} tabIndex={1} />
        </Root>
      </form>
      <input
        className={s.sliderIndicator}
        placeholder={''}
        readOnly
        tabIndex={-1}
        value={values[1]}
      />
    </div>
  )
}
