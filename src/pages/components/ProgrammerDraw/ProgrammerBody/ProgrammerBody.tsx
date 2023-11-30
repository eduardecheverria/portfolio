import BodyArm from './BodyArm/BodyArm'
import BodyForeArm from './BodyForeArm/BodyForeArm'
import BodyHead from './BodyHead/BodyHead'
import BodyLeg from './BodyLeg/BodyLeg'
import styles from './programmerBody.module.css'
const ProgrammerBody = () => {
  return (
    <div className={styles.programmerBodyContainer}>
        <div className={styles.body}>
            <BodyHead />
            <div className={styles.bodyNeck}></div>
            <div className={styles.bodyBody}>
                <BodyForeArm />
                <BodyArm />
            </div>
        </div>
        <BodyLeg />
    </div>
  )
}

export default ProgrammerBody
