/* eslint-disable max-len */
import { IBrandsSliderArrow } from '@/types/elements'
import BrandSliderArrowSvg from '../BrandsSliderArrow/BrandsSliderArrow'
import styles from '@/styles/dashboard/index.module.scss'

const BrandsSliderNextArrow = (props: IBrandsSliderArrow) => (
  <button
    className={`${styles.dashboard__brands__slider__arrow} ${styles.dashboard__brands__slider__arrow_next} ${props.modeClass}`}
    onClick={props.onClick}
  >
    <span>
      <BrandSliderArrowSvg />
    </span>
  </button>
)

export default BrandsSliderNextArrow
