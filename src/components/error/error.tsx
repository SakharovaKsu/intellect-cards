import error from '@/assets/404.png'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './error.module.scss'

export const Error = () => {
  return (
    <div className={s.container}>
      <img alt={'Изображение 404.'} src={error} />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button>Back to home page</Button>
    </div>
  )
}
