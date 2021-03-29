import { useRef } from 'react'

import Burguer from './Burguer'
import Menu from './Menu'

import styles from '../styles/components/HeaderBarMobile.module.css'
import menuStyles from '../styles/components/Menu.module.css'
import burguerStyles from '../styles/components/Burguer.module.css'

export function HeaderBarMobile() {
  const menuRef = useRef<HTMLDivElement>(null)
  const burguerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  function handleToggleMenu() {
    const classListBurguer = burguerRef.current.classList.value.split(' ')
    const classListMenu = menuRef.current.classList.value.split(' ')
    const classListHeader = headerRef.current.classList.value.split(' ')

    if (classListBurguer.includes(burguerStyles.BurguerActive), classListMenu.includes(menuStyles.MenuActive)) {
      burguerRef.current.classList.remove(burguerStyles.BurguerActive)
      menuRef.current.classList.remove(menuStyles.MenuActive)
      headerRef.current.classList.remove(styles.HeaderActive)
    } else {
      burguerRef.current.classList.add(burguerStyles.BurguerActive)
      menuRef.current.classList.add(menuStyles.MenuActive)
      headerRef.current.classList.add(styles.HeaderActive)
    }
  }

  return (
    <div ref={headerRef} className={styles.HeaderBarMobile}>
      <img src='logo-full.svg' />
      <Menu ref={menuRef}/>
      <Burguer ref={burguerRef} handleToggleMenu={handleToggleMenu}/>
    </div>
  )
}