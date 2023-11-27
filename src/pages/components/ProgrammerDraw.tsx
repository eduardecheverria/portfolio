import styles from './programmerDraw.module.css'
import ProgrammerDesktop from './ProgrammerDesktop/ProgrammerDesktop'
import ProgrammerChair from './ProgrammerChair/ProgrammerChair'
import ProgrammerBody from './ProgrammerBody/ProgrammerBody'

const ProgrammerDraw = () => {
  return (
    <div className={styles.programmerBodyContainer}>
          <ProgrammerBody />
          <ProgrammerDesktop />
          <ProgrammerChair />
    </div>
  )
}

export default ProgrammerDraw