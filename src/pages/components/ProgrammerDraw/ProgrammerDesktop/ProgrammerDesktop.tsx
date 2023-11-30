
import styles from './programmerDesktop.module.css'

const ProgrammerDesktop = () => {
  return (
    <div className={styles.programmerDesktop}>
        <div className={styles.screenContainer}>
          <div className={styles.screen}>
              <div className={styles.screenBox}></div>
          </div>
          <div className={styles.screenSupport}>
            <div className={styles.screenSupportTube}></div>
            <div className={styles.screenSupportBase}></div>
          </div>
        </div>
        <div className={styles.tableContainer}>
            <div className={styles.tableSurface}></div>
            <div className={styles.tableLegsContainer}>
                <div className={styles.tableLeg}></div>
                <div className={styles.tableLeg}></div>
            </div> 
        </div>
    </div>
  )
}

export default ProgrammerDesktop
