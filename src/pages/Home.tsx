import NavHeader from "./components/NavHeader/NavHeader"
import ProgrammerDraw from "./components/ProgrammerDraw/ProgrammerDraw"
import styles from "./homeStyles.module.css"
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavHeader />
      <ProgrammerDraw />
    </div>
  )
}

export default Home
