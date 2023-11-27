
import styles from './backupStyles.module.css'
const BackupChair = () => {
  return (
    <div className={styles.backupContainer}>
      <div className={styles.backupSupportLeft}>
        <div className={styles.backupArmSupport__padded}></div>
        <div className={styles.backupArmSupport}></div>
      </div>
      <div className={styles.backup}>
          <div className={styles.backupBack}></div>

      </div>
      <div className={styles.backupSupportRight}>
        <div className={styles.backupArmSupport__padded}></div>
        <div className={styles.backupArmSupport}></div>
      </div>
    </div>
  )
}

export default BackupChair
