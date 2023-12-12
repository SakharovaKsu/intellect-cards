import { IconProps, IconWrapper } from './IconWrapper'

export const LogOutIcon = (fullProps: IconProps) => {
  const { svgProps: props, ...restProps } = fullProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 16 16'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M4.67 4a.67.67 0 1 0 0-1.33H3.33a.67.67 0 0 0-.66.66v9.34a.67.67 0 0 0 .66.66h1.34a.67.67 0 1 0 0-1.33H4V4h.67ZM13.88 7.61 12 4.95a.67.67 0 1 0-1.09.77l1.15 1.61h-5.4a.67.67 0 0 0 0 1.34H12l-1.2 1.6a.67.67 0 0 0 .13.93.67.67 0 0 0 .94-.13l2-2.67a.67.67 0 0 0 .01-.79Z'
            }
            fill={'#fff'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
