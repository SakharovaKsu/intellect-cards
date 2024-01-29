import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardPage } from '@/components/ui/card'
import Loader from '@/components/ui/loader/loader'
import { RadioGroup } from '@/components/ui/radio-group'
import { RadioItemProps } from '@/components/ui/radio-group/radio-item'
import { Typography } from '@/components/ui/typography'
import {
  useGetDeckByIdQuery,
  useGetLearnCardsQuery,
  useSubmitGradeMutation,
} from '@/services/decks/decks.service'
import { clsx } from 'clsx'

import s from './page-pack.module.scss'

type Props = {
  evaluationOptions?: string[]
  numberOfAttempts?: number
  openAnswer?: boolean
}

const evaluationOptions = [
  { id: 1, label: 'Did not know', value: 'did_not_know' },
  { id: 2, label: 'Forgot', value: 'forgot' },
  { id: 3, label: 'A lot of thought', value: 'a_lot_of_thought' },
  { id: 4, label: 'Сonfused', value: 'confused' },
  { id: 5, label: 'Knew the answer', value: 'knew_the_answer' },
]

export const PagePack: FC<Props> = ({ numberOfAttempts = 0 }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [rating, setRating] = useState(1)
  const { id } = useParams()
  const { data: dataDeck, isLoading: dataDeckLoading } = useGetDeckByIdQuery({ id })
  const { data: randomCards, isLoading: randomCardsLoading } = useGetLearnCardsQuery({
    id: id ?? 'defaultId',
  })
  const [saveRating, { isLoading: isRatingLoading }] = useSubmitGradeMutation()

  const classNames = {
    container: clsx(s.container),
    containerAnswer: clsx(s.containerAnswer),
    content: clsx(s.content),
    contentWithPicture: clsx(s.contentWithPicture),
    img: clsx(s.picture),
    text: clsx(s.text),
    title: clsx(s.title),
  }

  if (dataDeckLoading || randomCardsLoading || isRatingLoading) {
    return <Loader />
  }

  const questionPicture = randomCards?.questionImg && (
    <img alt={'question imag'} className={classNames.img} src={randomCards?.questionImg} />
  )

  const answerPicture = randomCards?.answerImg && (
    <img alt={'answer imag'} className={classNames.img} src={randomCards?.answerImg} />
  )

  const handleNextQuestion = () => {
    if (dataDeck) {
      saveRating({
        cardId: dataDeck?.id,
        grade: rating,
        id: id ?? '',
      })
      setShowAnswer(false)
    }
  }

  const handleShowAnswer = () => {
    setShowAnswer(true)
  }

  return (
    <CardPage className={classNames.container}>
      <Typography className={classNames.title} variant={'h1'}>
        Learn “{dataDeck?.name}”
      </Typography>
      <Typography variant={'body1'}>
        <b>Question: </b>
        {randomCards?.question}
      </Typography>
      {questionPicture}
      <Typography className={classNames.text} variant={'body2'}>
        Number of attempts to answer the question:{' '}
        <b>{randomCards?.shots ? randomCards?.shots : numberOfAttempts}</b>
      </Typography>
      {showAnswer && (
        <div className={classNames.containerAnswer}>
          <Typography className={classNames.content} variant={'body1'}>
            <b>Answer: </b>
            {randomCards?.answer}
          </Typography>
          {answerPicture}
          <Typography
            className={answerPicture ? classNames.contentWithPicture : classNames.content}
            variant={'body1'}
          >
            <b>Rate yourself:</b>
          </Typography>
          <RadioGroup
            items={evaluationOptions as unknown as RadioItemProps[]}
            onChangeOption={(rating: number) => setRating(rating)}
          />
        </div>
      )}
      {showAnswer ? (
        <Button fullWidth onClick={handleNextQuestion}>
          Next Question
        </Button>
      ) : (
        <Button fullWidth onClick={handleShowAnswer}>
          Show Answer
        </Button>
      )}
    </CardPage>
  )
}
