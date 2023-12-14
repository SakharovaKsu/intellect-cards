import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { RadioItemProps } from '@/components/ui/radio-group/radio-item'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './page-pack.module.scss'

type PagePackProps = {
  evaluationOptions?: string[]
  numberOfAttempts?: number
  openAnswer?: boolean
  text?: string
}

const evaluationOptions = [
  { id: 1, label: 'Did not know', value: 'did_not_know' },
  { id: 2, label: 'Forgot', value: 'forgot' },
  { id: 3, label: 'A lot of thought', value: 'a_lot_of_thought' },
  { id: 4, label: 'Сonfused', value: 'confused' },
  { id: 5, label: 'Knew the answer', value: 'knew_the_answer' },
]

export const PagePack: FC<PagePackProps> = ({ numberOfAttempts = 0, openAnswer = false, text }) => {
  const classNames = {
    container: clsx(s.container),
    containerAnswer: clsx(s.containerAnswer),
    content: clsx(s.content),
    text: clsx(s.text),
    title: clsx(s.title),
  }

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
          <RadioGroup items={evaluationOptions as unknown as RadioItemProps[]} />
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
