import { useRef } from 'react'
import styles from '../styles/components/Menu.module.css'

export function Menu() {
  const menuRef = useRef<HTMLDivElement>(null)

  function handleToggleMenu() {
    menuRef.current.classList.add(styles.MenuActive)
    // menuRef.current.classList.remove(styles.MenuActive)
  }

  return (
    <div ref={menuRef} className={styles.Menu} onClick={handleToggleMenu}>
      <div className={styles.spanMenuActive} />
      <div className={styles.spanMenuActive} />
    </div>
  )
}
