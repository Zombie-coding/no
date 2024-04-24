import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { HTTPStatus } from '@/constans'

export const showAuthError = (error: unknown) => {
  const axiosError = error as AxiosError

  if (axiosError.response) {
    if (axiosError.response.status === HTTPStatus.UNAUTHORIZED) {
      toast.error('Vale kasutajanimi või salasõna')
      return
    }
  }

  toast.error((error as Error).message)
}
