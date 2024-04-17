import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/index.module.scss'

const PasswordInput = ({ register, errors }: IAuthPageInput) => (
  <label className={styles.form__label}>
    <input
      {...register('password', {
        required: 'Sisestage oma parool!',
        minLength: 4,
        maxLength: 20,
      })}
      className={styles.form__input}
      type="password"
      placeholder="Password"
    />
    {errors.password && (
      <span className={styles.error_alert}>{errors.password?.message}</span>
    )}
    {errors.password && errors.password.type === 'minLength' && (
      <span className={styles.error_alert}>Vähemalt 4 tähemärki!</span>
    )}
    {errors.password && errors.password.type === 'maxLength' && (
      <span className={styles.error_alert}>Mitte rohkem kui 20 tähemärki!</span>
    )}
  </label>
)

export default PasswordInput
