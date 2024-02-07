import { Sort } from '@/components/packs/pack-table'

export const sortItems = (a: any, b: any, sort: Sort) => {
  const aValue = a[sort?.key as keyof typeof a]
  const bValue = b[sort?.key as keyof typeof b]

  if (typeof aValue === 'string' && typeof bValue === 'string') {
    return sort?.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
  }
  if (typeof aValue === 'number' && typeof bValue === 'number') {
    return sort?.direction === 'asc' ? aValue - bValue : bValue - aValue
  }

  if (sort?.key === 'createdBy') {
    const aAuthorName = a.author.name.toLowerCase()
    const bAuthorName = b.author.name.toLowerCase()

    return sort.direction === 'asc'
      ? aAuthorName.localeCompare(bAuthorName)
      : bAuthorName.localeCompare(aAuthorName)
  }

  return 0
}
