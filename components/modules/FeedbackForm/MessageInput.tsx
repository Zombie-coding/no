import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const MessageInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <textarea
      className={`${styles.feedback_form__form__textarea} ${darkModeClass}`}
      placeholder="Sisestage oma sõnum (20 kuni 300 märki)"
      {...register('message', {
        required: 'Sisesta sõnum!',
        minLength: 20,
        maxLength: 300,
      })}
    />
    {errors.message && (
      <span className={styles.error_alert}>{errors.message?.message}</span>
    )}
    {errors.message && errors.message.type === 'minLength' && (
      <span className={styles.error_alert}>Minimaalselt 20 tähemärki!</span>
    )}
    {errors.message && errors.message.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte rohkem kui 300 märki!</span>
    )}
  </label>
)

export default MessageInput
