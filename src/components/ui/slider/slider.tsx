import { useState } from 'react'

import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  maxValues: number
}

export const Slider = (props: SliderProps) => {
  const { maxValues } = props
  const [values, setValues] = useState([1, maxValues])
  const onValueChangeHandler = (e: number[]) => {
    setValues(e)
  }

  return (
    <div className={s.container} style={{ display: 'flex' }}>
      <input className={s.sliderIndicator} placeholder={''} tabIndex={-1} value={values[0]} readOnly/>
      <form>
        <Root
          className={s.SliderRoot}
          defaultValue={[values[0], values[1]]}
          max={maxValues}
          min={1}
          minStepsBetweenThumbs={1}
          onValueChange={onValueChangeHandler}
          step={1}
        >
          <Track className={s.SliderTrack}>
            <Range className={s.SliderRange} />
            <Range className={s.SliderRange} />
          </Track>
          <Thumb aria-label={'Volume'} className={s.SliderThumb} tabIndex={1} />
          <Thumb aria-label={'Volume'} className={s.SliderThumb} tabIndex={1} />
        </Root>
      </form>
      <input className={s.sliderIndicator} placeholder={''} tabIndex={-1} value={values[1]} readOnly/>
    </div>
  )
}
