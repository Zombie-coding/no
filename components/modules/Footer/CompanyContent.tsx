import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const CompanyContent = () => (
  <ul className={styles.footer__top__item__list}>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/about" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>Ettevõtte</a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/contacts" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>
          Tagasisidee
        </a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/wholesale-buyers" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>
          ОHHulgimüük kliendid
        </a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/contacts" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>Кontaktid</a>
      </Link>
    </li>
  </ul>
)

export default CompanyContent
