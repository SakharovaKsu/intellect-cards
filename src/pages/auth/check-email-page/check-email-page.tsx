import { CheckEmail } from '@/components/auth/check-email'
import Loader from '@/components/ui/loader/loader'
import { Page } from '@/components/ui/page/page'
import { useGetMeQuery } from '@/services/auth/auth.service'

export const CheckEmailPage = () => {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <Page>
      <CheckEmail email={data?.email} />
    </Page>
  )
}
