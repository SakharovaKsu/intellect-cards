import { IconProps, IconWrapper } from './IconWrapper'

export const PictureIcon = (fullProps: IconProps) => {
  const { svgProps: props, ...restProps } = fullProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 17 16'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M12.5 2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-8 1.33h8a.67.67 0 0 1 .67.67v5.57l-2.14-1.82a1.85 1.85 0 0 0-2.34 0L3.83 11.8V4a.67.67 0 0 1 .67-.67Zm8 9.34H4.87l4.67-3.9a.52.52 0 0 1 .62 0l3 2.56V12a.67.67 0 0 1-.66.67Z'
            }
            fill={'#fff'}
          />
          <path d={'M5.83 6.67a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'} fill={'#fff'} />
        </svg>
      }
      {...restProps}
    />
  )
}
