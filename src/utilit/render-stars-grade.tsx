import { StarIcon, StarOutlineIcon } from '@/icons'

export const renderStars = (grade: number) => {
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(i < grade ? <StarIcon key={i} /> : <StarOutlineIcon key={i} />)
  }

  return stars
}
