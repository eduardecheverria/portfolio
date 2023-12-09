import ChangeLanguage from "./ChangeLanguage/ChangeLanguage"
import Logo from "./Logo/Logo"
import styles from "./navHeader.module.css"
import gitHubLogo from "../../../assets/images/github.svg"
import linkedInLogo from "../../../assets/images/linkedin.png"
const NavHeader = () => {
  return (
    <header className={styles.navHeader}>
      <div className={styles.navHeaderContainer}>
        <Logo />
        <div className={styles.restOfHeader}>
          <nav className={styles.navContainer}>
              <ul>
                  <li>Inicio</li>
                  <li>Proyectos</li>
                  <li>Acerca de mi</li>
                  <li><img src={linkedInLogo} alt="" /> <img src={gitHubLogo} /></li>
              </ul>
          </nav>
          <ChangeLanguage />
        </div>
      </div>
    </header>
  )
}

export default NavHeader
