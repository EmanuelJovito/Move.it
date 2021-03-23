import styles from '../styles/components/HeaderBarMobile.module.css'
import { Menu } from './Menu'

export function HeaderBarMobile() {
  return (
    <div className={styles.HeaderBarMobile}>
      <img src='logo-full.svg' />
      <Menu />
    </div>
  )
}