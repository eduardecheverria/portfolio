import BodyLeg from './BodyLeg/BodyLeg'
import styles from './programmerBody.module.css'
const ProgrammerBody = () => {
  return (
    <div className={styles.programmerBodyContainer}>
        <div className={styles.body}>
              <div className={styles.bodyHead}>
                <div className={styles.eyebrow}>
                      
                </div>
                <div className={styles.bodyHeadEye}>
                      <div className={styles.bodyHeadEyeIris}>
                          
                      </div>
                </div>
                <div className={styles.bodyHeadNose}></div>
                <div className={styles.bodyHeadMouth}></div>  
            </div>
            <div className={styles.bodyNeck}></div>
              <div className={styles.bodyBody}>
                <div className={styles.bodyArmOutOfPlaceContainer}>
                    <div className={styles.bodyArmOutOfPlaceLeft}>
                        <div className={styles.bodyHand}></div>
                        <div className={styles.forearm}></div>      
                    </div>
                    <div className={styles.bodyArmOutOfPlaceRight}>
                        <div className={styles.bodyHand}></div>
                        <div className={styles.forearm}></div>      
                    </div>
                </div>   
                <div className={styles.bodyArmContainer}>
                    <div className={styles.bodyArmLeft}></div>
                    <div className={styles.bodyArmRight}></div>  
                </div>      
            </div>

        </div>
        <BodyLeg />
    </div>
  )
}

export default ProgrammerBody
