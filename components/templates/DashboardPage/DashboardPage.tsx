import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getBestsellersOrNewPartsFx } from '@/app/api/boilerParts'
import BrandsSlider from '@/components/modules/DashboardPage/BrandsSlider'
import { IBoilerParts } from '@/types/boilerparts'
import styles from '@/styles/dashboard/index.module.scss'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import DashboardSlider from '@/components/modules/DashboardPage/DashboardSlider'
import { $shoppingCart } from '@/context/shopping-cart'
import { AnimatePresence, motion } from 'framer-motion'
import CartAlert from '@/components/modules/DashboardPage/CartAlert'

const DashboardPage = () => {
  const [newParts, setNewParts] = useState<IBoilerParts>({} as IBoilerParts)
  const [bestsellers, setBestsellers] = useState<IBoilerParts>(
    {} as IBoilerParts
  )
  const [spinner, setSpinner] = useState(false)
  const shoppingCart = useStore($shoppingCart)
  const [showAlert, setShowAlert] = useState(!!shoppingCart.length)
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadBoilerParts()
  }, [])

  useEffect(() => {
    if (shoppingCart.length) {
      setShowAlert(true)
      return
    }

    setShowAlert(false)
  }, [shoppingCart.length])

  const loadBoilerParts = async () => {
    try {
      setSpinner(true)
      const bestsellers = await getBestsellersOrNewPartsFx(
        '/boiler-parts/bestsellers'
      )
      const newParts = await getBestsellersOrNewPartsFx('/boiler-parts/new')

      setBestsellers(bestsellers)
      setNewParts(newParts)
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }

  const closeAlert = () => setShowAlert(false)

  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${styles.dashboard__alert} ${darkModeClass}`}
            >
              <CartAlert
                count={shoppingCart.reduce(
                  (defaultCount, item) => defaultCount + item.count,
                  0
                )}
                closeAlert={closeAlert}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.dashboard__brands}>
          <BrandsSlider />
        </div>
        <h2 className={`${styles.dashboard__title} ${darkModeClass}`}>
          Elektroonika ja kodukaubandus
        </h2>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
            Müügihitid
          </h3>
          <DashboardSlider items={bestsellers.rows || []} spinner={spinner} />
        </div>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
            Uuendused
          </h3>
          <DashboardSlider items={newParts.rows || []} spinner={spinner} />
        </div>
        <div className={styles.dashboard__about}>
          <h3
            className={`${styles.dashboard__parts__title} ${styles.dashboard__about__title} ${darkModeClass}`}
          >
          Ettevõtte kohta
          </h3>
          <p className={`${styles.dashboard__about__text} ${darkModeClass}`}>
            Tere tulemast innovatsioonide maailma Vokinikoo juures! Meie valikust leiad laia valiku elektroonikat, varuosi ja kodutarbeid. Otsid siis viimast nutitelefoni, remondiosasid oma seadmele või funktsionaalseid esemeid koju, oleme siin, et aidata sul oma ideid ellu viia!
          </p>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
