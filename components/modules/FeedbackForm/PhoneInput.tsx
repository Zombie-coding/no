import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const PhoneInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Telefon *</span>
    <input
      className={styles.feedback_form__form__input}
      placeholder="+327 55555555"
      type="tel"
      {...register('phone', {
        required: 'Sisesta telefon!',
        pattern: {
          value: /^\d*[1-9]\d*$/,
          message: 'Vastuvõetamatu väärtus',
        },
        minLength: 12,
        maxLength: 12,
      })}
    />
    {errors.phone && (
      <span className={styles.error_alert}>{errors.phone?.message}</span>
    )}
    {errors.phone && errors.phone.type === 'minLength' && (
      <span className={styles.error_alert}>Vähemalt 11 kohta!</span>
    )}
    {errors.phone && errors.phone.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte üle 11 numbri!</span>
    )}
  </label>
)

export default PhoneInput
