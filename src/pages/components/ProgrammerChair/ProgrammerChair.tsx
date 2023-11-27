import styles from './programmerChair.module.css'
import SeatChair from './components/SeatChair/SeatChair'
import BackupChair from './components/BackupChair/BackupChair'

const ProgrammerChair = () => {
  return (
    <div className={styles.programmerChair}>
          <section className={styles.chairFooterContainer}>
              <BackupChair />
              <SeatChair />
              <div className={styles.support}></div>
              <div className={styles.footerRectangle}></div>
              <div className={styles.circleContainer} >
                  <span className={styles.circle}></span>
                  <span className={styles.circle}></span>
              </div>
        </section>
    </div>
  )
}

export default ProgrammerChair
