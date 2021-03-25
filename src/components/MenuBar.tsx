import { useRef } from 'react'
import styles from '../styles/components/MenuBar.module.css'
import { Menu } from './Menu'

export function MenuBar() {
  const menuRef = useRef<HTMLDivElement>(null)
  const menuBar = useRef<HTMLDivElement>(null)

  function handleToggleMenu() {
    const list = menuRef.current.classList.value.split(' ')

    if (list.includes(styles.MenuActive)) {
      menuRef.current.classList.remove(styles.MenuActive)
    } else {
      menuRef.current.classList.add(styles.MenuActive)
    }
  }

  return (
    <>
      <div ref={menuRef} className={styles.Menu} onClick={handleToggleMenu}>
        <div className={styles.spanMenuActive} />
        <div className={styles.spanMenuActive} />
      </div>
    </>
  )
}
