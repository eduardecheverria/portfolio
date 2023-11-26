import styles from './programmerBody.module.css'
import ProgrammerDesktop from './ProgrammerDesktop/ProgrammerDesktop'
import ProgrammerChair from './ProgrammerChair/ProgrammerChair'

const ProgrammerBody = () => {
  return (
    <div className={styles.programmerBodyContainer}>
          <ProgrammerDesktop />
          <ProgrammerChair />
    </div>
  )
}

export default ProgrammerBody