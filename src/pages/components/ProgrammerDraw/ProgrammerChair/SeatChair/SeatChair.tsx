import styles from './seatChairStyles.module.css'
const SeatChair = () => {
  return (
    <div className={styles.seatContainer}>
        <div className={styles.seatTubeRight}></div>
        <div className={styles.seat}></div>
        <div className={styles.seatTubeLeft}></div>
    </div>
  )
}

export default SeatChair
