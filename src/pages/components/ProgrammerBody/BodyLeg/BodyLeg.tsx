import styles from './bodyLegStyles.module.css'
const BodyLeg = () => {
  return (
    <div className={styles.bodyLegsContainer}>
        <div className={styles.bodyLegUniqueContainer}>
            <div className={styles.bodyLeg}></div>
            <div className={styles.bodyShoe}></div>
        </div>
        <div className={styles.bodyLegUniqueContainer}>
            <div className={styles.bodyLeg}></div>
            <div className={styles.bodyShoe}></div>
        </div>
    </div>
  )
}

export default BodyLeg
