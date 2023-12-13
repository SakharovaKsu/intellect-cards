import { IconProps, IconWrapper } from './IconWrapper'

export const CloseIcon = (fullProps: IconProps) => {
  const { svgProps: props, ...restProps } = fullProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'14px'}
          viewBox={'0 0 14 14'}
          width={'14px'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z'
            }
            fill={'#fff'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
