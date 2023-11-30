import ProgrammerDraw from "./components/ProgrammerDraw/ProgrammerDraw"
import styles from "./homeStyles.module.css"
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <ProgrammerDraw />
    </div>
  )
}

export default Home
