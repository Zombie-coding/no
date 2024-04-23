/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          Ettevõttest
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              Компания Vokinikoo - teie usaldusväärne partner tehnoloogia ja kodumugavuste maailmas. Meie eesmärk on tagada meie klientidele kõik vajalik: alates kõige kaasaegsemast elektroonikast kuni usaldusväärsete varuosadeni ja stiilsete sisekujunduselementideni. Meie missioon on muuta teie elu lihtsamaks, mugavamaks ja põnevamaks. Usaldage meid ja saate juurdepääsu parimatele tehnoloogiatele ja kodusele mugavusele!.
            </p>
            <p>
              Ассортимент интернет-магазина &quot;АкваТермикс&quot; включает в
              себя запасные части для котлов Arderia, Ariston, Baxi, Beretta,
              Bosch, Buderus, Chaffoteaux, De Dietrich, Demrad, Electrolux,
              Ferroli, Fondital, Immergas, Junkers, Koreastar, Nova Florida,
              Saunier Duval, Sime, Tiberis, Vaillant, Viessmann, Westen.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img.png" alt="image-1" />
          </div>
          <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
