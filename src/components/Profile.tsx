import { useContext } from 'react'
import { useSession } from 'next-auth/client'

import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
  className: string;
}

export function Profile (props: ProfileProps) {
  const { level } = useContext(ChallengeContext)
  const [ session, loading ] = useSession()

  return (
    <div className={props.className}>
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
    </div>
  )
}