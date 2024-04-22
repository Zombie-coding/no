import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const CompanyContent = () => (
  <ul className={styles.footer__top__item__list}>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/about" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>Ettevõtte kohta</a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/contacts" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>
          Tagasiside
        </a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/wholesale-buyers" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>
          Hulgimüügikliendid
        </a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/contacts" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>Kontaktandmed</a>
      </Link>
    </li>
  </ul>
)

export default CompanyContent
