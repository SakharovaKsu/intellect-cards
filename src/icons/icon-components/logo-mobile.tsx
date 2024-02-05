import { SVGProps, forwardRef, memo } from 'react'

export const LogoMobile = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
      fill={'none'}
      height={'20'}
      ref={ref}
      viewBox={'0 0 30 20'}
      width={'30'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M5.85.25h-4.8v2.32H2v10.12H0L.96 15h3.75v-2.31h-.87V2.57h.96L5.85.25ZM20.85 0h-10.6v14.89h11.92l-2.87-4.85h-2.86l1.43 2.42h-5.3V2.43h4.2l-1.55 2.42h2.87L20.85 0Z'
        }
        fill={'#fff'}
      />
    </svg>
  ))
)
