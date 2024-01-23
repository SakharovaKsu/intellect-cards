import { usePagination } from '@/components/ui/pagination/usePagination'
import { Select, SelectProps } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { ArrowMiniLeftIcon } from '@/icons/icon-components/arrow-mini-left-icon'
import { ArrowMiniRightIcon } from '@/icons/icon-components/arrow-mini-right-icon'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingsCount?: number
  totalCount: number
} & SelectProps

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingsCount = 1,
  totalCount,
  ...rest
}: PaginationProps) => {
  const classNames = {
    arrows(disabled: boolean) {
      return clsx(s.arrows, disabled && s.disabledArrows)
    },
    container: clsx(s.container),
    dots: clsx(s.dots),
    numbers(pageNumber: number) {
      return clsx(s.numbers, pageNumber === currentPage && s.activePage)
    },
    root: clsx(s.root),
    select: clsx(s.select),
    selectContainer: clsx(s.selectContainer),
  }

  const totalPageCount = Math.ceil(totalCount / pageSize)
  const pageNumbers = usePagination({ currentPage, siblingsCount, totalPageCount })

  const setNextPage = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  const setPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <button className={classNames.arrows(currentPage === 1)} onClick={setPrevPage}>
          <ArrowMiniLeftIcon size={16} />
        </button>
        {pageNumbers.map((num, index) => {
          if (num === '...') {
            return (
              <div className={classNames.dots} key={index}>
                {num}
              </div>
            )
          } else {
            return (
              <button
                className={classNames.numbers(num)}
                key={index}
                onClick={() => onPageChange(num)}
              >
                <Typography variant={'body2'}>{num}</Typography>
              </button>
            )
          }
        })}
        <button className={classNames.arrows(currentPage === totalPageCount)} onClick={setNextPage}>
          <ArrowMiniRightIcon size={16} />
        </button>
      </div>
      <div className={classNames.selectContainer}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <Select className={classNames.select} variant={'pagination'} {...rest} />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
