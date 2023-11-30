import styles from './bodyHeadStyles.module.css'

const BodyHead = () => {
  return (
    <div className={styles.bodyHead}>
        <div className={styles.eyebrow}></div>
        <div className={styles.bodyHeadEye}>
            <div className={styles.bodyHeadEyeIris}></div>
        </div>
        <div className={styles.bodyHeadNose}></div>
        <div className={styles.bodyHeadMouth}></div>  
    </div>
  )
}

export default BodyHead
