import styles from '../styles/components/HeaderBarMobile.module.css'
import { MenuBar } from './MenuBar'

export function HeaderBarMobile() {
  return (
    <div className={styles.HeaderBarMobile}>
      <img src='logo-full.svg' />
      <MenuBar />
    </div>
  )
}