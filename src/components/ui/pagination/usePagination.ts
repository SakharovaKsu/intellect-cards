import { useMemo } from 'react'

import { createRange } from '@/components/ui/pagination/createRange'

type Props = {
  currentPage: number
  siblingsCount: number
  totalPageCount: number
}

const DOTS = '...'

export const usePagination = ({
  currentPage,
  siblingsCount = 1,
  totalPageCount,
}: Props): ('...' | number)[] => {
  return useMemo(() => {
    if (siblingsCount + 5 >= totalPageCount) {
      return createRange(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount
      const leftRange = createRange(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount
      const rightRange = createRange(totalPageCount - rightItemCount + 1, totalPageCount)

      return [1, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createRange(leftSiblingIndex, rightSiblingIndex)

      return [1, DOTS, ...middleRange, DOTS, totalPageCount]
    }

    return createRange(1, totalPageCount)
  }, [totalPageCount, currentPage, siblingsCount])
}
