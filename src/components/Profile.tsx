import { useContext } from 'react'
import { useSession } from 'next-auth/client'

import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengeContext)
  const [ session, loading ] = useSession()

  return (
    <div className={styles.profileContainer}>
      <img src='' alt="Emanuel Jovito"/>
      <div>
        <strong></strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}