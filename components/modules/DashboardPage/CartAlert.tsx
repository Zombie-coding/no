import Link from 'next/link'
import { useStore } from 'effector-react'
import { formatPrice } from '@/utils/common'
import { ICartAlertProps } from '../../../types/dashboard'
import { $mode } from '@/context/mode'
import { $totalPrice } from '@/context/shopping-cart'
import styles from '@/styles/dashboard/index.module.scss'

const CartAlert = ({ count, closeAlert }: ICartAlertProps) => {
  const mode = useStore($mode)
  const totalPrice = useStore($totalPrice)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const showCountMessage = (count: string) => {
    if (count.endsWith('1')) {
      return 'kaup'
    }

    if (count.endsWith('2') || count.endsWith('3') || count.endsWith('4')) {
      return 'kaup'
    }

    return 'kaubad'
  }

  return (
    <>
      <div className={`${styles.dashboard__alert__left} ${darkModeClass}`}>
        <span>
          Korvis {count} {showCountMessage(`${count}`)}
        </span>
        <span>Summa eest {formatPrice(totalPrice)} P</span>
      </div>
      <div className={styles.dashboard__alert__right}>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_cart}>Mine ostukorvi</a>
        </Link>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_order}>Tee tellimus</a>
        </Link>
      </div>
      <button
        className={styles.dashboard__alert__btn_close}
        onClick={closeAlert}
      />
    </>
  )
}

export default CartAlert
