import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/index.module.scss'

const NameInput = ({ register, errors }: IAuthPageInput) => (
  <label className={styles.form__label}>
    <input
      {...register('name', {
        required: 'Sisestage nimi!',
        minLength: 2,
        maxLength: 15,
        pattern: {
          value: /^[а-яА-Яa-zA-ZёЁ]*$/,
          message: 'Lubamatu väärtus!',
        },
      })}
      className={styles.form__input}
      type="text"
      placeholder="Name"
    />
    {errors.name && (
      <span className={styles.error_alert}>{errors.name?.message}</span>
    )}
    {errors.name && errors.name.type === 'minLength' && (
      <span className={styles.error_alert}>Vähemalt 2 märki!</span>
    )}
    {errors.name && errors.name.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte rohkem kui 15 tähemärki!</span>
    )}
  </label>
)

export default NameInput
