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
    } //siblingsCount - this is the number of pages that should be displayed to the left and right of the current page.

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPageCount)
    // these are the page numbers to the left and right of the one you are currently on.
      // if current 5 (leftSiblingIndex===4) (rightSiblingIndex==6)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount
      const leftRange = createRange(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }
    // Пример: Если у нас totalPageCount = 10 (всего страниц 10), currentPage = 3 (текущая страница 3), и siblingsCount = 1 (по одной странице с каждой стороны), то получится так:
    //
    //   leftItemCount будет 3 + 2 * 1 = 5.
    // leftRange будет [1, 2, 3, 4, 5].
    //   Итоговый массив будет [1, 2, 3, 4, 5, '...', 10].

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
