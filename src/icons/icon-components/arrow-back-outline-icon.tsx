import { IconProps, IconWrapper } from './IconWrapper'

export const ArrowBackOutlineIcon = (fullProps: IconProps) => {
  const { svgProps: props, ...restProps } = fullProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'16'}
          viewBox={'0 0 16 16'}
          width={'16'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <g clipPath={'url(#a)'}>
            <path
              d={
                'M12.67 7.33H4.76l2.42-2.9a.67.67 0 1 0-1.03-.86l-3.33 4a.8.8 0 0 0-.06.1c0 .04 0 .06-.05.09a.67.67 0 0 0-.04.24c0 .08.01.16.04.24 0 .03 0 .05.05.09a.8.8 0 0 0 .06.1l3.33 4a.67.67 0 0 0 1.03-.86l-2.42-2.9h7.9a.67.67 0 1 0 0-1.34Z'
              }
              fill={'#fff'}
            />
          </g>
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
