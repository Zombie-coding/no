import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const NameInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Nimi *</span>
    <input
      className={styles.feedback_form__form__input}
      type="text"
      placeholder="Alex"
      {...register('name', {
        required: 'Sisestage nimi!',
        pattern: {
          value: /^[а-яА-Яa-zA-ZёЁ]*$/,
          message: 'Vastuvõetamatu väärtus',
        },
        minLength: 2,
        maxLength: 15,
      })}
    />
    {errors.name && (
      <span className={styles.error_alert}>{errors.name?.message}</span>
    )}
    {errors.name && errors.name.type === 'minLength' && (
      <span className={styles.error_alert}>Vähemalt 2 tähemärki!</span>
    )}
    {errors.name && errors.name.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte rohkem kui 15 märki!</span>
    )}
  </label>
)

export default NameInput
