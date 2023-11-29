import styles from './bodyForeArmStyles.module.css'

const BodyForeArm = () => {
  return (
    <div className={styles.bodyArmOutOfPlaceContainer}>
        <div className={styles.bodyArmOutOfPlaceLeft}>
            <div className={styles.bodyHand}></div>
            <div className={styles.forearm}></div>      
        </div>
        <div className={styles.bodyArmOutOfPlaceRight}>
        <div className={styles.bodyArmRightContainer}>
            <div className={styles.containerToRotateRightArm}>
            <div className={styles.bodyHand}></div>
            <div className={styles.forearm}></div>
            </div>
        </div>      
        </div>
    </div> 
  )
}

export default BodyForeArm
