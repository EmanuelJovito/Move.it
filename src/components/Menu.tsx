import { forwardRef, ForwardRefRenderFunction, useRef } from 'react'
import styles from '../styles/components/Menu.module.css'
import { CompletedChallenges } from './CompletedChallenges'
import { Profile } from './Profile'
import { ProfileMobile } from './ProfileMobile'

const Menu: ForwardRefRenderFunction<HTMLDivElement> = ({}, menuRef) => {
  return (
    <>
      <div ref={menuRef} className={styles.Menu}>
        <div className={styles.MenuContent}>
          <ProfileMobile />
        </div>
      </div>
    </>
  )
}

export default forwardRef(Menu)