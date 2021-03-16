import styles from '../styles/components/Sidebar.module.css'

export function SideBar() {
  return (
    <div className={styles.sidebar__container}> 
    <div className={styles.sidebar__wrapper}>
      <div className={styles.sidebarHeader}>
        <img src='icons/logoSimbolo.svg' alt="Logo move.it"/>
      </div>
      <div className={styles.sidebarButtons}>
        <div className={styles.home}>
          <img src="icons/home.svg" alt="Inicio"/>
        </div>
        <div className={styles.awards}>
          <img src="icons/award.svg" alt="Awards"/>
        </div>
      </div>
    </div>
    </div>
  )
}