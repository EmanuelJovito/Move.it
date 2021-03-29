import { forwardRef, ForwardRefRenderFunction, useRef } from 'react'
import styles from '../styles/components/Menu.module.css'
import { CompletedChallenges } from './CompletedChallenges'
import { Profile } from './Profile'

const Menu: ForwardRefRenderFunction<HTMLDivElement> = ({}, menuRef) => {
  return (
    <>
      <div ref={menuRef} className={styles.Menu}>
        <div className={styles.MenuContent}>
          <Profile className={styles.prrofileMneu}/>
          <CompletedChallenges className={styles.challengesMenu}/>
        </div>
      </div>
    </>
  )
}

export default forwardRef(Menu)