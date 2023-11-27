import styles from './bodyLegStyles.module.css'
const BodyLeg = () => {
  return (
    <div className={styles.bodyLegsContainer}>
        <section className={styles.bodyLegUniqueContainer}>
            <section className={styles.bodyLeg}></section>
            <section className={styles.bodyShoe}></section>
        </section>
        <section className={styles.bodyLegUniqueContainer}>
            <section className={styles.bodyLeg}></section>
            <section className={styles.bodyShoe}></section>
        </section>
    </div>
  )
}

export default BodyLeg
