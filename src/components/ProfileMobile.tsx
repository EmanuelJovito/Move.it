import { useSession } from 'next-auth/client'
import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ProfileMobile.module.css'

export function ProfileMobile() {
  const { level } = useContext(ChallengeContext)
  const [ session, loading ] = useSession()

  return (
      <div className={styles.profileContainer}>
        <img src={session && session.user.image} alt={session && session.user.name}/>
        <div className={styles.levelContainer}>
          <strong>{session && session.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </div>
  )
}