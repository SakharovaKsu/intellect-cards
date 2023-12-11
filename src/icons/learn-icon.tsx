import { IconProps, IconWrapper } from './IconWrapper'

export const LearnIcon = (fullProps: IconProps) => {
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
          <g clipPath={'url(#a)'} fill={'#fff'}>
            <path
              d={
                'M8 1.33a6.67 6.67 0 1 0 0 13.34A6.67 6.67 0 0 0 8 1.33Zm0 12A5.33 5.33 0 1 1 8 2.67a5.33 5.33 0 0 1 0 10.66Z'
              }
            />
            <path
              d={
                'M8.23 4.97a1.13 1.13 0 0 0-1.24-.2 1.07 1.07 0 0 0-.66.98v4.5a1.07 1.07 0 0 0 .66.98 1.12 1.12 0 0 0 1.24-.2l2.44-2.24a1.07 1.07 0 0 0 0-1.58L8.23 4.97Zm-.56 4.76V6.27L9.54 8 7.67 9.73Z'
              }
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

export class userIcon {}
