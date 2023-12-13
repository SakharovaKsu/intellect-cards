import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './page-pack.module.scss'

type PagePackProps = {
  evaluationOptions?: string[]
  numberOfAttempts?: number
  openAnswer?: boolean
  text?: string
}

export const PagePack: FC<PagePackProps> = ({ numberOfAttempts = 0, openAnswer = false, text }) => {
  const classNames = {
    container: clsx(s.container),
    containerAnswer: clsx(s.containerAnswer),
    content: clsx(s.content),
    text: clsx(s.text),
    title: clsx(s.title),
  }

  const evaluationOptions = [
    { id: 1, text: 'Did not know' },
    { id: 2, text: 'Forgot' },
    { id: 3, text: 'A lot of thought' },
    { id: 4, text: 'Сonfused' },
    { id: 5, text: 'Knew the answer' },
  ]

  return (
    <Card className={classNames.container}>
      <Typography className={classNames.title} variant={'h1'}>
        Learn “Pack Name”
      </Typography>
      <Typography variant={'body1'}>
        <b>Question: </b>
        {text}
      </Typography>
      <Typography className={classNames.text} variant={'body2'}>
        Количество попыток ответов на вопрос: <b>{numberOfAttempts}</b>
      </Typography>
      {openAnswer && (
        <div className={classNames.containerAnswer}>
          <Typography className={classNames.content} variant={'body1'}>
            <b>Answer: </b>
            {text}
          </Typography>
          <Typography className={classNames.content} variant={'body1'}>
            <b>Rate yourself:</b>
          </Typography>
          {evaluationOptions.map(value => {
            return (
              <div key={value.id}>
                <Checkbox label={value.text} />
              </div>
            )
          })}
        </div>
      )}
      {openAnswer ? (
        <Button fullWidth>Next Question</Button>
      ) : (
        <Button fullWidth>Show Answer</Button>
      )}
    </Card>
  )
}
