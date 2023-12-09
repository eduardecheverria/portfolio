import styles from './logoStyles.module.css'
import mainLogo from '../../../../assets/images/logo.svg'
const Logo = () => {
  return (
    <a href='/' className={styles.mainTitle}>
      <picture>
        <img decoding='async' src={mainLogo} alt="Eduardo Echeverria Logo" />
      </picture>
    </a>
  )
}

export default Logo
