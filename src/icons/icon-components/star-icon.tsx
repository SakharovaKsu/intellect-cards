import { IconProps, IconWrapper } from './IconWrapper'

export const StarIcon = (fullProps: IconProps) => {
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
                'M11.7 14a.67.67 0 0 1-.3-.07L8 12.15l-3.4 1.78a.67.67 0 0 1-.97-.71l.67-3.75L1.55 6.8a.67.67 0 0 1-.16-.67.67.67 0 0 1 .54-.45l3.8-.55L7.4 1.7a.67.67 0 0 1 1.2 0l1.7 3.41 3.8.55a.67.67 0 0 1 .53.46.67.67 0 0 1-.16.66l-2.75 2.67.67 3.75a.67.67 0 0 1-.27.67.67.67 0 0 1-.41.12Z'
              }
              fill={'#E6AC39'}
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
