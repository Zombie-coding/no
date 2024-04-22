import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const MessageInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <textarea
      className={`${styles.feedback_form__form__textarea} ${darkModeClass}`}
      placeholder="Введите ваше сообщение (от 20 до 300 символов)"
      {...register('message', {
        required: 'Sisestage sõnum!',
        minLength: 20,
        maxLength: 300,
      })}
    />
    {errors.message && (
      <span className={styles.error_alert}>{errors.message?.message}</span>
    )}
    {errors.message && errors.message.type === 'minLength' && (
      <span className={styles.error_alert}>Vähemalt 20 tähemärki!</span>
    )}
    {errors.message && errors.message.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte rohkem kui 300 tähemärki!</span>
    )}
  </label>
)

export default MessageInput
