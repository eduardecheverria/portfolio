import styles from './programmerChair.module.css'
import SeatChair from './components/SeatChair/SeatChair'
import BackupChair from './components/BackupChair/BackupChair'

const ProgrammerChair = () => {
  return (
    <div className={styles.programmerChair}>
          <div className={styles.chairFooterContainer}>
              <BackupChair />
              <SeatChair />
              <div className={styles.support}></div>
              <div className={styles.footerRectangle}></div>
              <div className={styles.circleContainer} >
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
              </div>
        </div>
    </div>
  )
}

export default ProgrammerChair
