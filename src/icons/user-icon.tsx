import { IconProps, IconWrapper } from './IconWrapper'

export const UserIcon = (fullProps: IconProps) => {
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
              'M8 7.33A2.67 2.67 0 1 0 8 2a2.67 2.67 0 0 0 0 5.33Zm0-4A1.33 1.33 0 1 1 8 6a1.33 1.33 0 0 1 0-2.67ZM8 8.67a4.67 4.67 0 0 0-4.67 4.66.67.67 0 1 0 1.34 0 3.33 3.33 0 0 1 6.66 0 .67.67 0 0 0 1.34 0A4.67 4.67 0 0 0 8 8.67Z'
            }
            fill={'#fff'}
          />
          <defs>
            <clipPath id={'a'}>
              <path d={'M0 0h16v16H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
