
import styles from './programmerDesktop.module.css'

const ProgrammerDesktop = () => {
  return (
    <div className={styles.programmerDesktop}>
        <section className={styles.screenContainer}>
          <section className={styles.screen}>
              <section className={styles.screenBox}></section>
          </section>
          <div className={styles.screenSupport}>
            <div className={styles.screenSupportTube}></div>
            <div className={styles.screenSupportBase}></div>
          </div>
        </section>
        <section className={styles.tableContainer}>
            <section className={styles.table}></section>
            <section className={styles.legsContainer}>
                <span className={styles.leg}></span>
                <span className={styles.leg}></span>
            </section> 
        </section>
    </div>
  )
}

export default ProgrammerDesktop
