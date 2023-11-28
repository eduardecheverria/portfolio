import styles from './programmerDraw.module.css'
import ProgrammerDesktop from './ProgrammerDesktop/ProgrammerDesktop'
import ProgrammerChair from './ProgrammerChair/ProgrammerChair'
import ProgrammerBody from './ProgrammerBody/ProgrammerBody'
import Mechanism from './Mechanism/Mechanism'

const ProgrammerDraw = () => {
  return (
    <div className={styles.programmerDrawContainer}>
          <Mechanism />
          <ProgrammerBody />
          <ProgrammerDesktop />
          <ProgrammerChair />
    </div>
  )
}

export default ProgrammerDraw