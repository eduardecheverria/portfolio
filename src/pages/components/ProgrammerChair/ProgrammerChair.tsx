import styles from './programmerChair.module.css'

const ProgrammerChair = () => {
  return (
    <div className={styles.programmerChair}>
          <section className={styles.chairFooterContainer}>
              <div className={styles.backupContainer}>
                  <div className={styles.backupSupportLeft}></div>
                  <div className={styles.backup}>
                      <div className={styles.backupBack}></div>
                      <div className={styles.backupTube}></div>
                  </div>
                  <div className={styles.backupSupportRight}></div>
              </div>
              <div className={styles.seatContainer}>
                  <div className={styles.seatTubeRight}></div>
                  <div className={styles.seat}></div>
                  <div className={styles.seatTubeLeft}></div>
              </div>
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
